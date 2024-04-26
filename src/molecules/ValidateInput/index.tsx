import React from "react";
import InputFrame from "../Frame/InputFrame";
import Input from "@/atoms/Input";

interface InputFrameProps {
  id: string;
  label: string;
  type: string;
  errorMessage?: string;
  value?: string;
  onChange?: ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => void;
  onBlur?: ({ event }: { event: React.ChangeEvent<HTMLInputElement> }) => void;
  inputType?: "input" | "textarea";
  required?: boolean;
}

const ValidateInput: React.FC<InputFrameProps> = ({
  id,
  label,
  type,
  errorMessage,
  value = "",
  onChange = () => {},
  onBlur = () => {},
  required,
}) => {
  return (
    <InputFrame
      id={id}
      label={label}
      errorMessage={errorMessage}
      required={required}
    >
      <Input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputFrame>
  );
};

export default ValidateInput;
