import React, { useEffect, useState } from "react";
import ModalFrame from "@/molecules/Frame/ModalFrame";
import useModal from "@/hook/useModal";
import ItemsCarousel from "@/organism/Carousel/ItemsCarousel";
import { SubmitButton } from "@/atoms/Button";
import { getClothesAPI ,selectAPI } from "@/api/ClothesAPI";

interface SelectItemModalProps {
  children: React.ReactNode;
}
const SelectItemModal: React.FC<SelectItemModalProps> = ({ children }) => {
  const { ChangeModalState, open } = useModal();

  interface itemType {
    _id: string;
    category: string;
    imgSrc: string;
    name: string;
    subcategory: string;
    temp: string;
  }

  interface dataType {
    outer: itemType[];
    top: itemType[];
    inner: itemType[];
    bottom: itemType[];
  }

  const [items, setItems] = useState<dataType>();

  let selectedItems: Record<string, string> = {};

  const handleItemClick = (cateogry: string, id: string) => {
    selectedItems = { ...selectedItems, [cateogry]: id };
  };

  const fetchClothesData = async () => {
    const res = await getClothesAPI({});
    setItems(res);
  };

  const handleSubmit=async()=>{
    const res= await selectAPI(selectedItems)
  }

  useEffect(() => {
    if (open) {
      fetchClothesData();
    }
  }, [open]);

  return (
    <>
      <div onClick={ChangeModalState}>{children}</div>

      {open && items && (
        <ModalFrame
          closeModal={ChangeModalState}
          title={"클릭해서 아이템 선택"}
        >
          <ItemsCarousel
            title={"outer"}
            data={items.outer}
            onItemClick={handleItemClick}
          />
          <ItemsCarousel
            title={"top"}
            data={items.top}
            onItemClick={handleItemClick}
          />
          <ItemsCarousel
            title={"inner"}
            data={items.inner}
            onItemClick={handleItemClick}
          />
          <ItemsCarousel
            title={"bottom"}
            data={items.bottom}
            onItemClick={handleItemClick}
          />
          <SubmitButton
            onClick={handleSubmit}
          >
            선택하기
          </SubmitButton>
        </ModalFrame>
      )}
    </>
  );
};

export default SelectItemModal;
