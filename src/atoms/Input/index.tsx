import { useState } from "react";

interface InputProps {
  id: string;
  placeholder?: string;
  value?: string;
  type: string;
  required?: boolean;
  onChange?: ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => void;
  onBlur?: ({ event }: { event: React.ChangeEvent<HTMLInputElement> }) => void;
}

const Input = ({
  placeholder,
  onChange = () => {},
  onBlur = () => {},
  value = "",
  id,
  type,
  required = false,
}: InputProps) => {
  const [text, setText] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
    onChange({ event });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur({ event });
  };

  return (
    <input
      id={id}
      name={id}
      type={type}
      value={text}
      required={required}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
    />
  );
};

export default Input;
