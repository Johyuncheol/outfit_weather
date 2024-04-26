import React, { ReactElement, ReactNode } from "react";

interface InputFrameProps {
  id: string;
  label: string;
  children: ReactElement;
  errorMessage?: string;
  required?: boolean;
}

const InputFrame: React.FC<InputFrameProps> = ({
  id,
  label,
  children,
  errorMessage,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}:
      </label>
      {children} {/* id와 name 속성 전달 */}
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default InputFrame;
