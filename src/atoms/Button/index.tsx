import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "linkText";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  let className;

  switch (type) {
    case "submit":
      className =
        "text-white rounded-2xl cursor-pointer px-3 py-2 bg-blue-500 hover:bg-blue-600 focus:ring-blue-200";
      break;
    case "linkText":
      className = "border-none p-0 bg-transparent cursor-pointer";
      break;
  }

  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
