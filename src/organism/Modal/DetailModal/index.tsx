import React from "react";
import Image from "next/image";
import { SubmitButton } from "@/atoms/Button";
import ModalFrame from "@/molecules/Frame/ModalFrame";
import Frame from "@/molecules/Frame/ArticleFrame";
import { selectAPI } from "@/api/ClothesAPI";
import { useRouter } from "next/navigation";

interface DetailModalProps {
  data: Record<string, any>;
  closeModal: () => void;
}
const DetailModal: React.FC<DetailModalProps> = ({ data, closeModal }) => {
  const router = useRouter();

  const handleSubmit = async () => {
    const newData: Record<string, any> = {};

    for (const key in data) {
      newData[key] = data[key]._id;
    }
    
    const res = await selectAPI(newData);
    if (res === 401) {
      alert("로그인이 필요합니다");
      router.push("/");
    }
  };

  return (
    <ModalFrame closeModal={closeModal} title={"코디 정보"}>
      <p>선택한 코디의 정보입니다.</p>

      <div className="flex flex-col gap-5 ">
        {Object.keys(data).map((key, index) => (
          <Frame title={data[key].category} key={index}>
            <div className="flex gap-5">
              <div className="relative w-[15rem] h-[20rem]">
                <Image src={data[key].imgSrc} alt={data[key].alt} fill />
              </div>
              <div>
                <p>{key}</p>
                <p>{`name: ${data[key].name}`}</p>
              </div>
            </div>
          </Frame>
        ))}

        <div className="flex justify-center">
          <SubmitButton onClick={() => handleSubmit()}>선택하기</SubmitButton>
        </div>
      </div>
    </ModalFrame>
  );
};

export default DetailModal;
