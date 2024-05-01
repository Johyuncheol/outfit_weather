import React from "react";
import ModalFrame from "@/molecules/Frame/ModalFrame";
import useModal from "@/hook/useModal";
import AddItemForm from "@/molecules/Form/AddItemForm";

interface SelectItemModalProps {
  children: React.ReactNode;
}
const AddItemModal: React.FC<SelectItemModalProps> = ({ children }) => {
  const { ChangeModalState, open } = useModal();

  return (
    <>
      <div onClick={ChangeModalState}>{children}</div>

      {open && (
        <ModalFrame
          closeModal={ChangeModalState}
          title={"클릭해서 아이템 선택"}
        >
          <AddItemForm />
        </ModalFrame>
      )}
    </>
  );
};

export default AddItemModal;
