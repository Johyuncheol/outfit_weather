import React, { useEffect, useState } from "react";
import ModalFrame from "@/molecules/ModalFrame";
import useModal from "@/hook/useModal";
import ItemsCarousel from "@/organism/ItemsCarousel";
import { SubmitButton } from "@/atoms/Button";

interface SelectItemModalProps {
  children: React.ReactNode;
}
const SelectItemModal: React.FC<SelectItemModalProps> = ({ children }) => {
  const { ChangeModalState, open } = useModal();

  let selectedItems: Record<string, string> = {};

  const handleItemClick = (cateogry: string, id: string) => {
    selectedItems = { ...selectedItems, [cateogry]: id };
  };

  return (
    <>
      <div onClick={ChangeModalState}>{children}</div>

      {open && (
        <ModalFrame
          closeModal={ChangeModalState}
          title={"클릭해서 아이템 선택"}
        >
          <ItemsCarousel title={"아우터"} onItemClick={handleItemClick} />
          <ItemsCarousel title={"상의"} onItemClick={handleItemClick} />
          <ItemsCarousel title={"이너"} onItemClick={handleItemClick} />
          <ItemsCarousel title={"하의"} onItemClick={handleItemClick} />
          <SubmitButton
            onClick={() => {
              console.log(selectedItems);
            }}
          >
            선택하기
          </SubmitButton>
        </ModalFrame>
      )}
    </>
  );
};

export default SelectItemModal;
