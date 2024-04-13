"use client";
import React, { useState } from "react";
import ImageCircle from "@/atoms/ImageCircle";
import Frame from "@/molecules/ArticleFrame";
import Carousel from "@/util/Carousel";

interface ItemsCarouselProps {
  title: string;
  onItemClick: (title: string, id: string) => void;
}
const ItemsCarousel = ({ title, onItemClick }: ItemsCarouselProps) => {
  const slides = [
    {
      _id: "1",
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
    {
      _id: "2",
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
    {
      _id: "3",
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
    {
      _id: "4",
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState<string>();

  const handleItemClick = (_id: string) => {
    setSelectedIdx(_id);
    onItemClick(title, _id);
  };

  return (
    <Frame title={title} type="bold">
      <Carousel slideData={slides}>
        {slides.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                selectedIdx === item._id ? "border-2 border-black" : ""
              }`}
              onClick={() => handleItemClick(item._id)}
            >
              <ImageCircle
                type={"responsive-small"}
                imgSrc={item.imgSrc}
                alt={item.alt}
              />
            </div>
          );
        })}
      </Carousel>
    </Frame>
  );
};

export default ItemsCarousel;
function onItemClick(_id: string) {
  throw new Error("Function not implemented.");
}
