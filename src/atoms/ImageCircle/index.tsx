import React from "react";
import Image from "next/image";

interface ImageCircleProps {
  type: "small" | "middle" | "big";
  imgSrc: string;
  alt: string;
}
const ImageCircle: React.FC<ImageCircleProps> = ({ type, imgSrc, alt }) => {
  let size;
  switch (type) {
    case "small":
      size = "w-[80px] h-[80px]";
      break;
    case "middle":
      size = "w-[100px] h-[100px]";
      break;
    case "big":
      size = "w-[150px] h-[150px]";
      break;
  }

  return (
    <div className={`border rounded-full ${size} relative overflow-hidden`}>
      <Image src={imgSrc} alt={alt} fill />;
    </div>
  );
};

export default ImageCircle;
