"use client";
import React from "react";
import ImageCircle from "@/atoms/ImageCircle";
import Frame from "@/molecules/Frame";
import Carousel from "@/lib/Carousel";

const MainItemsNav = () => {
  const slides = [
    {
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
    {
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
    {
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
    {
      imgSrc: "/assets/image/spring.jpg",
      alt: "alt",
    },
  ];

  return (
    <Frame title={"추천순"} type="bold">
      <Carousel slideData={slides}>
        {slides.map((item, index) => {
          return (
            <ImageCircle
              key={index}
              type={"big"}
              imgSrc={item.imgSrc}
              alt={item.alt}
            />
          );
        })}
      </Carousel>
    </Frame>
  );
};

export default MainItemsNav;
