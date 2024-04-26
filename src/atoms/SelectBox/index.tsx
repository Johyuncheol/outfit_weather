import React, { useState } from "react";

interface SelectProps {
  id: string;
  options: { value: string | number; label: string }[];
  value?: string;
  required?: boolean;
  onChange?: ({
    event,
  }: {
    event: React.ChangeEvent<HTMLSelectElement>;
  }) => void;
}

const SelectBox: React.FC<SelectProps> = ({
  id,
  options,
  value = "",
  required = false,
  onChange = () => {},
}) => {
  const [SelectValue, setSelectValue] = useState<string>(value);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ event });
    setSelectValue(event.target.value);
  };

  return (
    <select
      id={id}
      name={id}
      value={SelectValue}
      required={required}
      onChange={handleChange}
      className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
