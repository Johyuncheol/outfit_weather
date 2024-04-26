"use client";
import React, { useState } from "react";
import FigureImage from "@/atoms/FigureImage";
import Frame from "@/molecules/Frame/ArticleFrame";
import Carousel from "@/util/Carousel";
import Span from "@/atoms/Span";
interface ItemsCarouselProps {
  title: string;
  onItemClick: (category: string) => void;
  data: {
    _id: string;
    imgSrc: string;
    category: string;
  }[];
}
const CategoryCarousel = ({ title, onItemClick, data }: ItemsCarouselProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const handleItemClick = (index: number, category: string) => {
    setSelectedIdx(index);
    onItemClick(category);
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
                onClick={() => handleItemClick(index, item.category)}
              >
                <FigureImage
                  type={"circle-small"}
                  imgSrc={item.imgSrc}
                  alt={`${item.category} 이미지`}
                />
                <Span type={"subTitle2"} >{item.category}</Span>
              </div>
            );
          })}
      </Carousel>
    </Frame>
  );
};

export default CategoryCarousel;
