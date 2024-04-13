import React from "react";
import InputFrame from "../InputFrame";
import Input from "@/atoms/Input";

interface InputFrameProps {
  id: string;
  label: string;
  type: string;
  errorMessage?: string;
  value?: string;
  onChange?: ({ value, id }: { value: string; id: string }) => void;
  onBlur?: ({ value, id }: { value: string; id: string }) => void;
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
