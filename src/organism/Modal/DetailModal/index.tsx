import React from "react";
import Image from "next/image";
import { SubmitButton } from "@/atoms/Button";
import ModalFrame from "@/molecules/ModalFrame";

interface DetailModalProps {
  data: Record<string, any>;
  closeModal: () => void;
}
const DetailModal: React.FC<DetailModalProps> = ({ data, closeModal }) => {
  return (
    <ModalFrame closeModal={closeModal} title={"코디 정보"}>
      <p>선택한 코디의 정보입니다.</p>

      {Object.keys(data).map((key, index) => (
        <div className="flex gap-5" key={index}>
          <Image
            src={data[key].imgSrc}
            alt={data[key].alt}
            width={100}
            height={100}
          />
          <div>
            <p>{key}</p>
            <p>{`name: ${data[key].name}`}</p>
            <p>{`category: ${data[key].category}`}</p>
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <SubmitButton onClick={() => closeModal()}>선택하기</SubmitButton>
      </div>
    </ModalFrame>
  );
};

export default DetailModal;
