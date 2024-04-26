"use client";
import React, { useState } from "react";
import FigureImage from "@/atoms/FigureImage";
import Frame from "@/molecules/Frame/ArticleFrame";
import Carousel from "@/util/Carousel";

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
      <Carousel slideData={data}>
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  selectedIdx === index ? "border-2 border-black" : ""
                }`}
                onClick={() => handleItemClick(index, item._id)}
              >
                <FigureImage
                  type={"circle-small"}
                  imgSrc={item.imgSrc}
                  alt={`${item.name} 이미지`}
                />
              </div>
            );
          })}
      </Carousel>
    </Frame>
  );
};

export default ItemsCarousel;
