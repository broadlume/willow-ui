import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { HiMiniPlay, HiMiniPause } from 'react-icons/hi2';

interface AudioPlayerProps {
  src: string;
  classNames?: {
    wrapper?: string;
    playbackButton?: string;
    progressBar?: string;
  };
}

export const AudioPlayer = ({
  src,
  classNames = { wrapper: '', playbackButton: '', progressBar: '' },
}: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Use requestAnimationFrame for smooth progress updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging && isPlaying) {
        setCurrentTime(audio.currentTime);
      }
      if (isPlaying) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, isDragging]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const formatTime = (time: number): string => {
    if (!Number.isFinite(time)) return '0:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className={clsx(
        'bg-surface-sec rounded-lg px-5 py-4',
        classNames.wrapper
      )}
    >
      <audio ref={audioRef} src={src} preload='metadata'>
        <track kind='captions' />
      </audio>

      <div className='flex items-center gap-4'>
        <div className='flex !pr-4 !border-r !border-border-pri'>
          {/* Play/Pause Button */}
          <button
            type='button'
            onClick={togglePlayPause}
            className={clsx(
              'flex h-8 w-8 min-h-8 min-w-8 items-center justify-center rounded-full !bg-text-cta text-white hover:bg-primary-90 transition-colors cursor-pointer',
              classNames.playbackButton
            )}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <HiMiniPause className='h-4 w-4' />
            ) : (
              <HiMiniPlay className='h-4 w-4' />
            )}
          </button>
        </div>

        {/* Time Display */}
        <span className='text-xs min-w-[30px]'>{formatTime(currentTime)}</span>

        {/* Progress Bar */}
        <div className='flex-1 relative'>
          <input
            type='range'
            min='0'
            max={duration || 0}
            step='0.01'
            value={currentTime}
            onChange={handleProgressChange}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            className={clsx(
              'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-text-cta focus:outline-none',
              classNames.progressBar
            )}
            style={{
              background: `linear-gradient(to right, #1A6CFF 0%, #1A6CFF ${
                (currentTime / duration) * 100
              }%, #CCCCCC ${(currentTime / duration) * 100}%, #CCCCCC 100%)`,
            }}
          />
        </div>

        {/* Total Duration */}
        <span className='text-xs min-w-[30px]'>{formatTime(duration)}</span>
      </div>
    </div>
  );
};
