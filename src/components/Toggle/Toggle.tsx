import { useEffect, useRef, useState } from 'react';

type Props = {
  checked?: boolean;
  onChange?: (newState: boolean) => void;
  disabled?: boolean;
};

export const Toggle = ({ checked = false, onChange, disabled }: Props) => {
  const [innerEnabled, setInnerEnabled] = useState(checked);

  const id = useRef(Math.random().toString(36).substring(7));
  const label = `toggle-${id.current}`;

  const backgrounds = {
    checked: 'bg-ribbon',
    unchecked: 'bg-ash-medium',
    disabled: 'bg-ash-light',
  };
  const getBackground = () => {
    if (disabled) return backgrounds.disabled;
    return innerEnabled ? backgrounds.checked : backgrounds.unchecked;
  };
  const cursor = disabled ? 'cursor-auto' : 'cursor-pointer';

  const togglePosition = innerEnabled ? 'left-[16px]' : 'left-0';

  useEffect(() => {
    setInnerEnabled(checked);
  }, [checked]);

  const handleToggle = () => {
    if (disabled) return;
    const newEnabled = !innerEnabled;
    if (onChange) onChange(newEnabled);
    else setInnerEnabled(newEnabled);
  };

  return (
    <label
      htmlFor={label}
      className={`relative inline-block h-[16px] w-[32px] rounded-full border-[2px] border-transparent transition-colors ${cursor} ${getBackground()}`}
    >
      <input
        id={label}
        type='checkbox'
        className='hidden'
        checked={innerEnabled}
        onChange={handleToggle}
      />
      <div
        className={`absolute top-0 h-[12px] w-[12px] rounded-full bg-white transition-[left] ${togglePosition}`}
      ></div>
    </label>
  );
};
