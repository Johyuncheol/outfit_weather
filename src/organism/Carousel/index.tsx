"use client";
import React, { useState } from "react";
import Frame from "@/molecules/Frame/ArticleFrame";
import CarouselFrame from "@/molecules/Frame/CarouselFrame";

interface CarouselProps<T> {
  title: string;
  onItemClick: (item: T) => void;
  data: T[];
  renderFigure: (item: T) => React.ReactNode;
}

const Carousel = <T extends {}>({
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
                className={`cursor-pointer  ${
                  selectedIdx === index ? "bg-slate-400" : ""
                }`}
                onClick={() => handleItemClick(index, item)}
              >
                {renderFigure(item)}
              </div>
            );
          })}
      </CarouselFrame>
    </Frame>
  );
};

export default Carousel;
