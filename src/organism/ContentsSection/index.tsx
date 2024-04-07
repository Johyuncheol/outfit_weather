"use client";
import React, { useState } from "react";
import Frame from "@/molecules/Frame";
import ItemInfo from "@/molecules/ItemInfo";
import Carousel from "@/lib/Carousel";
import ImageGrid from "@/molecules/ImageGrid";
import useModal from "@/hook/useModal";
import DetailModal from "../Modal/DetailModal";
interface Item {
  mainItem: {
    id: string;
    name: string;
    category: string;
    imgSrc: string;
    alt: string;
    detail: string;
  };
  styled: {
    outer: {
      id: string;
      name: string;
      category: string;
      imgSrc: string;
      alt: string;
    };
    top: {
      id: string;
      name: string;
      category: string;
      imgSrc: string;
      alt: string;
    };
    bottom: {
      id: string;
      name: string;
      category: string;
      imgSrc: string;
      alt: string;
    };
    inner?: {
      id: string;
      name: string;
      category: string;
      imgSrc: string;
      alt: string;
    };
    shoes?: {
      id: string;
      name: string;
      category: string;
      imgSrc: string;
      alt: string;
    };
  }[];
}

const ContentsSection = () => {
  const data: Item[] = [
    {
      mainItem: {
        id: "아이디값",
        name: "메인아이템 이름",
        category: "울자켓",
        imgSrc: "/assets/image/spring.jpg",
        alt: "alt",
        detail: "디테일 입니다",
      },
      styled: [
        {
          outer: {
            id: "아이디값",
            name: "아우터이름",
            category: "패딩",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          top: {
            id: "아이디값",
            name: "상의이름",
            category: "롱 슬리브",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          bottom: {
            id: "아이디값",
            name: "바지이름",
            category: "청바지",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          inner: {
            id: "아이디값",
            name: "이너이름",
            category: "반팔티셔츠",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          shoes: {
            id: "아이디값",
            name: "신발이름",
            category: "신발",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
        },
        {
          outer: {
            id: "아이디값",
            name: "아우터이름",
            category: "코트",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          top: {
            id: "아이디값",
            name: "상의이름",
            category: "니트",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          bottom: {
            id: "아이디값",
            name: "바지이름",
            category: "면바지",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
        },
        {
          outer: {
            id: "아이디값",
            name: "아우터이름",
            category: "스타디움 자켓",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          top: {
            id: "아이디값",
            name: "상의이름",
            category: "맨투맨",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
          bottom: {
            id: "아이디값",
            name: "바지이름",
            category: "나일론바지",
            imgSrc: "/assets/image/spring.jpg",
            alt: "alt",
          },
        },
      ],
    },
  ];

  const { open, ChangeModalState } = useModal();
  const [ModalData, setModalData] = useState<any>();
  const HandleModal = (item: any) => {
    setModalData(item);
    ChangeModalState();
  };
  console.log(open);
  return (
    <Frame title={"Top3 Items"} type="bold">
      {open && <DetailModal data={ModalData} closeModal={ChangeModalState} />}

      {data.map((item, index) => (
        <div key={index}>
          <Frame title={`${index + 1}.${item.mainItem.name} 코디`}>
            <ItemInfo
              imgSrc={item.mainItem.imgSrc}
              alt={item.mainItem.alt}
              detail={item.mainItem.detail}
            />
          </Frame>

          <Frame title={"코디 정보"}>
            <Carousel slideData={item.styled}>
              {item.styled.map((styledItem, styledIndex) => (
                <div key={styledIndex} onClick={() => HandleModal(styledItem)}>
                  <ImageGrid data={styledItem} />
                </div>
              ))}
            </Carousel>
          </Frame>
        </div>
      ))}
    </Frame>
  );
};

export default ContentsSection;
