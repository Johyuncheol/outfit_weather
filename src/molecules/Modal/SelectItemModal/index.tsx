import React, { useEffect, useState } from "react";
import ModalFrame from "@/molecules/Frame/ModalFrame";
import useModal from "@/hook/useModal";
import Carousel from "@/molecules/Carousel";
import { SubmitButton } from "@/atoms/Button";
import { getClothesAPI, selectAPI } from "@/api/ClothesAPI";
import { useRouter } from "next/navigation";
import FigureCard from "@/molecules/FigureCard";

interface SelectItemModalProps {
  children: React.ReactNode;
}
const SelectItemModal: React.FC<SelectItemModalProps> = ({ children }) => {
  const { ChangeModalState, open } = useModal();
  const router = useRouter();

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

  const handleItemClick = (item: itemType) => {
    selectedItems = { ...selectedItems, [item.category]: item._id };
  };

  const fetchClothesData = async () => {
    const res = await getClothesAPI({});
    setItems(res);
  };

  const handleSubmit = async () => {
    const res = await selectAPI(selectedItems);
    if (res === 401) {
      alert("로그인이 필요합니다");
      router.push("/");
    }
  };

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
          <Carousel<itemType>
            title={"outer"}
            data={items.outer}
            onItemClick={handleItemClick}
            renderFigure={(item) => (
              <FigureCard type={"circle-small"} data={item} />
            )}
          />

          <Carousel<itemType>
            title={"top"}
            data={items.top}
            onItemClick={handleItemClick}
            renderFigure={(item) => (
              <FigureCard type={"circle-small"} data={item} />
            )}
          />
          <Carousel<itemType>
            title={"inner"}
            data={items.inner}
            onItemClick={handleItemClick}
            renderFigure={(item) => (
              <FigureCard type={"circle-small"} data={item} />
            )}
          />
          <Carousel<itemType>
            title={"bottom"}
            data={items.bottom}
            onItemClick={handleItemClick}
            renderFigure={(item) => (
              <FigureCard type={"circle-small"} data={item} />
            )}
          />
          <SubmitButton onClick={handleSubmit}>선택하기</SubmitButton>
        </ModalFrame>
      )}
    </>
  );
};

export default SelectItemModal;
