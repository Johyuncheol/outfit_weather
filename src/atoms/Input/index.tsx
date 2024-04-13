import { useState } from "react";

interface InputProps {
  id: string;
  placeholder?: string;
  value?: string;
  type: string;
  required?: boolean;
  onChange?: ({ value, id }: { value: string; id: string }) => void;
  onBlur?: ({ value, id }: { value: string; id: string }) => void;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    onChange({ value, id });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur({ value: e.target.value, id });
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
