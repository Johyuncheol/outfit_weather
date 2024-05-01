"use client";
import React, { useState } from "react";
import Frame from "@/molecules/Frame/ArticleFrame";
import ItemInfo from "@/molecules/ItemInfo";
import ImageGrid from "@/molecules/ImageGrid";
import useModal from "@/hook/useModal";
import DetailModal from "@/molecules/Modal/DetailModal";
import Carousel from "@/molecules/Carousel";

interface Item {
  mainItem: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
    detail: string;
  };
  styles: {
    outer: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
    top: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
    bottom: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
    inner: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
  }[];
}

interface ItemType {
  outer: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
  top: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
  bottom: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
  inner: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
}
const ContentsSection = ({ data }: { data: Item[] }) => {
  const { open, ChangeModalState } = useModal();
  const [ModalData, setModalData] = useState<any>();
  const HandleModal = (item: any) => {
    setModalData(item);
    ChangeModalState();
  };

  return (
    <Frame title={"추천 아이템 스타일"} type="bold">
      {open && <DetailModal data={ModalData} closeModal={ChangeModalState} />}
      {data &&
        data.map((data, index) => {
          return (
            <div key={index} id={`recommend${data.mainItem._id}`}>
              <Frame title={`${data.mainItem.name} 코디`}>
                <ItemInfo
                  imgSrc={data.mainItem.imgSrc}
                  alt={data.mainItem.name}
                  detail={data.mainItem.detail}
                />
              </Frame>

              <Carousel<ItemType>
                title={"코디 정보"}
                onItemClick={HandleModal}
                data={data.styles}
                renderFigure={(item) => <ImageGrid data={item} />}
              />
            </div>
          );
        })}
    </Frame>
  );
};

export default ContentsSection;
