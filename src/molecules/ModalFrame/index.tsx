import { SubmitButton } from "@/atoms/Button";
import React from "react";

interface ModalFrameProps {
  children: React.ReactNode;
  closeModal: () => void;
  title: string;
}

const ModalFrame: React.FC<ModalFrameProps> = ({
  closeModal,
  children,
  title,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-gray-500 bg-opacity-70">
      <div className="bg-white p-8 rounded shadow-lg overflow-auto h-[80%] w-[80%] ">
        <div className=" flex justify-between items-center">
          <h2 className=" text-xl font-bold ">{title}</h2>
          <SubmitButton onClick={() => closeModal()}>닫기</SubmitButton>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalFrame;
