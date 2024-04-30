"use client";
import React, { useState } from "react";
import Frame from "@/molecules/Frame/ArticleFrame";
import CarouselFrame from "@/molecules/Frame/CarouselFrame";
import Span from "@/atoms/Span";

interface Item {
  _id: string;
  imgSrc: string;
  name: string;
}

interface CarouselProps<T> {
  title: string;
  onItemClick: (item: T) => void;
  data: T[];
  renderFigure: (item: T) => React.ReactNode;
}

const Carousel = <T extends Item>({
  title,
  onItemClick,
  data,
  renderFigure,
}: CarouselProps<T>) => {
  const [selectedIdx, setSelectedIdx] = useState<number>();

  const handleItemClick = (index: number, item: T) => {
    setSelectedIdx(index);
    onItemClick(item);
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
                onClick={() => handleItemClick(index, item)}
              >
                {renderFigure(item)}
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

export default Carousel;
