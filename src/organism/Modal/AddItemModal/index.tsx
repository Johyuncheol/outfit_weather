import React, { useEffect, useState } from "react";
import ModalFrame from "@/molecules/ModalFrame";
import useModal from "@/hook/useModal";
import ItemsCarousel from "@/organism/ItemsCarousel";
import { SubmitButton } from "@/atoms/Button";
import AddItemForm from "@/molecules/Form/AddItemForm";

interface SelectItemModalProps {
  children: React.ReactNode;
}
const AddItemModal: React.FC<SelectItemModalProps> = ({ children }) => {
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
          <AddItemForm onSubmit={()=>{}} />
        </ModalFrame>
      )}
    </>
  );
};

export default AddItemModal;
