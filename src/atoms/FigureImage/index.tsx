import React from "react";
import Image from "next/image";

interface ImageCircleProps {
  type:
    | "Square-small"
    | "Square"
    | "Square-big"
    | "circle-big"
    | "circle-small"
    | "circle";
  imgSrc: string;
  alt: string;
}
const FigureImage: React.FC<ImageCircleProps> = ({ type, imgSrc, alt }) => {
  let classname;
  switch (type) {
    case "Square-big":
      classname = "border x relative overflow-hidden w-[150px] h-[150px]";
      break;
    case "Square-small":
      classname =
        "border  relative overflow-hidden w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px]";
      break;
    case "Square":
      classname =
        "border  relative overflow-hidden w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]";
      break;
    case "circle-big":
      classname =
        "border rounded-full relative overflow-hidden w-[150px] h-[150px]";
      break;
    case "circle-small":
      classname =
        "border rounded-full relative overflow-hidden w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] ";
      break;
    case "circle":
      classname =
        "border rounded-full relative overflow-hidden w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]";
      break;
  }

  return (
    <div className={`${classname} `}>
      <Image src={imgSrc} alt={alt} fill />;
    </div>
  );
};

export default FigureImage;
