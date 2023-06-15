type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  disabled?: boolean;
};

export const Input = ({
  input,
  setInput,
  placeholder,
  disabled = false,
}: Props) => {
  return (
    <input
      disabled={disabled}
      value={input}
      onChange={(e) => setInput && setInput(e.target.value)}
      placeholder={placeholder}
      className='body-medium min-h-[48px] min-w-[345px] rounded-[6px] border border-ash-medium bg-white p-[12px] disabled:bg-ash-light disabled:bg-opacity-50 disabled:text-ash-medium'
    />
  );
};
