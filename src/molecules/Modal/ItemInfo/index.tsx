import React, { useState } from "react";
import Image from "next/image";
import { SubmitButton } from "@/atoms/Button";
import ModalFrame from "@/molecules/Frame/ModalFrame";
import Frame from "@/molecules/Frame/ArticleFrame";
import { deleteAPI } from "@/api/ClothesAPI";
import UpdateForm from "@/molecules/Form/UpdateForm";
import { useDispatch } from "react-redux";
import { setRerender } from "@/redux/modules/reRender";

interface ItemInfoModalProps {
  data: Record<string, any>;
  closeModal: () => void;
}
const ItemInfoModal: React.FC<ItemInfoModalProps> = ({ data, closeModal }) => {
  const dispatch = useDispatch();

  const [updateMode, setUpdateMode] = useState(false);

  const deleteItem = async (dataID: string) => {
    const res = await deleteAPI({ _id: dataID });
    dispatch(setRerender());
  };

  return (
    <ModalFrame closeModal={closeModal} title={"아이템 정보"}>
      <p>선택한 아이템의 정보입니다.</p>

      <div className="flex flex-col gap-5">
        <Frame title={data.category}>
          <div className="flex gap-5">
            <div className="relative w-[15rem] h-[20rem]">
              <Image src={data.imgSrc} alt={data.name} fill />
            </div>
            {updateMode ? (
              <UpdateForm Itemdata={data} />
            ) : (
              <div>
                <p>{`subCategory: ${data.subcategory}`}</p>
                <p>{`temp: ${data.temp}`}</p>
                <p>{`name: ${data.name}`}</p>
              </div>
            )}
          </div>
        </Frame>

        {updateMode ? (
          <div className="flex justify-center gap-5">
            <SubmitButton onClick={() => setUpdateMode(false)}>
              취소
            </SubmitButton>
          </div>
        ) : (
          <div className="flex justify-center gap-5">
            <SubmitButton onClick={() => deleteItem(data._id)}>
              삭제하기
            </SubmitButton>
            <SubmitButton onClick={() => setUpdateMode(true)}>
              수정하기
            </SubmitButton>
          </div>
        )}
      </div>
    </ModalFrame>
  );
};

export default ItemInfoModal;
