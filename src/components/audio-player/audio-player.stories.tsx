import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from './audio-player';

const meta: Meta<typeof AudioPlayer> = {
  component: AudioPlayer,
  title: 'Components/AudioPlayer',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

/** A basic audio player with play/pause controls and progress bar. */
export const Demo: Story = {
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  argTypes: {
    src: {
      description: 'The audio file URL to play.',
      control: {
        type: 'text',
      },
    },
    classNames: {
      description:
        'Object containing CSS classes for different parts of the audio player.',
      control: {
        type: 'object',
      },
    },
  },
  render: (args) => <AudioPlayer {...args} />,
};

/** Audio player with custom classNames. */
export const CustomStyle: Story = {
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    classNames: {
      wrapper: 'shadow-lg',
      playbackButton: 'hover:scale-110',
      progressBar: '',
    },
  },
  render: (args) => <AudioPlayer {...args} />,
};

/** Multiple audio players in a list. */
export const MultipleAudioPlayers: Story = {
  render: () => (
    <div className='flex flex-col space-y-4'>
      <div>
        <h3 className='text-sm font-medium mb-2'>Audio</h3>
        <AudioPlayer src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' />
      </div>
    </div>
  ),
};
