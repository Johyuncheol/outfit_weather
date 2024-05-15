"use client";
import React, { useCallback, useState } from "react";
import Frame from "@/molecules/Frame/ArticleFrame";
import useModal from "@/hook/useModal";
import DetailModal from "@/molecules/Modal/DetailModal";
import ContentsCard from "@/molecules/ContentsCard";

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

const ContentsSection = ({ data }: { data: Item[] }) => {
  const { open, ChangeModalState } = useModal();
  const [ModalData, setModalData] = useState<any>();
  
  const HandleModal =useCallback((item: any) => {
    setModalData(item);
    ChangeModalState();
  },[]);

  return (
    <Frame title={"추천 아이템 스타일"} type="bold">
      {open && <DetailModal data={ModalData} closeModal={ChangeModalState} />}
      {data &&
        data.map((item, index) => (
          <ContentsCard key={index} data={item} HandleModal={HandleModal} />
        ))}
    </Frame>
  );
};

export default ContentsSection;
