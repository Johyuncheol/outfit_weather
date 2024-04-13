import React from "react";
import Image from "next/image";

interface ImageCircleProps {
  type: "small" | "middle" | "big" | "responsive-small" | "responsive";
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
    case "responsive-small":
      size =
        "w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px]";
      break;
    case "responsive":
      size = "w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]";
      break;
  }

  return (
    <div className={`border rounded-full ${size} relative overflow-hidden`}>
      <Image src={imgSrc} alt={alt} fill />;
    </div>
  );
};

export default ImageCircle;
