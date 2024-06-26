import { Input } from "@components/input/input";

interface ColorPickerInputProps {
  color: string;
  setColor: (value: string) => void;
  name: string;
  className?: string;
  colorPickerInputClasses?: string;
  textInputClasses?: string;
}

const ColorPickerInput: React.FC<ColorPickerInputProps> = ({
  name,
  color,
  setColor,
  className = '',
  colorPickerInputClasses = '',
  textInputClasses = '',
}) => {
  return (
    <div className={`~flex ~gap-2 ${className}`}>
      <Input
        className={`~w-14 ~p-1 ~rounded ${colorPickerInputClasses}`}
        type="color"
        value={color}
        name={name}
        onChange={(e) => setColor(e.target.value)}
      />
      <Input
        className={`~w-24 ~rounded ~border ${textInputClasses}`}
        type="text"
        value={color}
        name={name}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export { ColorPickerInput };
