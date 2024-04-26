"use client";
import React, { useEffect, useState } from "react";
import ImageModal from "@/organism/Modal/ImageModal";

const FirstBanner = () => {
  const images = [
    "/assets/image/bg1.svg",
    "/assets/image/bg2.svg",
    "/assets/image/bg3.svg",
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);

    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // 5초 후 닫힘

    return () => clearTimeout(timeoutId);
  }, []); // useEffect를 마운트될 때만 실행

  if (!isVisible) {
    return null; // 모달이 보이지 않을 때는 null을 반환하여 렌더링하지 않음
  }

  return <ImageModal randomImage={randomImage} />;
};

export default FirstBanner;
