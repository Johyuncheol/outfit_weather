import React from "react";
import Image from "next/image";

export { SubmitButton, LinkTextButton, SquareButton, IconButton };

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface IconButtonProps {
  iconSrc: string;
  altText: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const SubmitButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white rounded-2xl cursor-pointer px-3 py-2 bg-blue-500 hover:bg-blue-600 focus:ring-blue-200"
    >
      {children}
    </button>
  );
};

const LinkTextButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-none p-0 bg-transparent cursor-pointer"
    >
      {children}
    </button>
  );
};

const SquareButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white w-[40vw] rounded-l-2xl max-w-[300px] cursor-pointer py-8 bg-slate-600 hover:bg-gray-800 focus:ring-blue-200"
    >
      {children}
    </button>
  );
};

const IconButton: React.FC<IconButtonProps> = ({
  iconSrc,
  altText,
  onClick,
  width = 35,
  height = 35,
}: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Image src={iconSrc} alt={altText} width={width} height={height} />
    </button>
  );
};

