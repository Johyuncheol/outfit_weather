import React from "react";
import Image from "next/image";
import Button from "@/atoms/Button";

interface DetailModalProps {
  data: Record<string, any>;
  closeModal: () => void;
}
const DetailModal: React.FC<DetailModalProps> = ({ data, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-gray-500 bg-opacity-70">
      <div className="bg-white p-8 rounded shadow-lg overflow-auto h-[80%] w-[80%] ">
        <div className=" flex justify-between items-center">
          <h2 className=" text-xl font-bold ">모달 내용</h2>
          <Button type={"submit"} onClick={() => closeModal()}>
            닫기
          </Button>
        </div>

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
          <Button type={"submit"} onClick={() => closeModal()}>
            선택하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
