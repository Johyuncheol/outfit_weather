"use client";
import React, { useState } from "react";
import FigureImage from "@/atoms/FigureImage";
import Frame from "@/molecules/Frame/ArticleFrame";
import CarouselFrame from "@/molecules/Frame/CarouselFrame";
import Span from "@/atoms/Span";

interface ItemsCarouselProps {
  title: string;
  onItemClick: (title: string, id: string) => void;
  data: {
    _id: string;
    imgSrc: string;
    name: string;
  }[];
}
const ItemsCarousel = ({ title, onItemClick, data }: ItemsCarouselProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number>();

  const handleItemClick = (index: number, _id: string) => {
    setSelectedIdx(index);
    onItemClick(title, _id);
  };

  return (
    <Frame title={title} type="bold">
      <CarouselFrame slideData={data}>
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer  flex flex-col items-center ${
                  selectedIdx === index ? "bg-slate-400" : ""
                }`}
                onClick={() => handleItemClick(index, item._id)}
              >
                <FigureImage
                  type={"circle-small"}
                  imgSrc={item.imgSrc}
                  alt={`${item.name} 이미지`}
                />
                <div className="truncate w-[10rem]">
                  <Span type={"subTitle3"}>{item.name}</Span>
                </div>
              </div>
            );
          })}
      </CarouselFrame>
    </Frame>
  );
};

export default ItemsCarousel;
