import React from "react";
import FigureImage from "@/atoms/FigureImage";
import Span from "@/atoms/Span";

interface FigureDataType {
  imgSrc: string;
  name: string;
}
interface FigureCardProps<T> {
  data: T;
  type:
    | "Square-small"
    | "Square"
    | "Square-big"
    | "circle-big"
    | "circle-small"
    | "circle";
}
const FigureCard = <T extends FigureDataType>({
  data,
  type,
}: FigureCardProps<T>) => {
  return (
    <div className="flex flex-col items-center">
      <FigureImage type={type} imgSrc={data.imgSrc} alt={data.name} />
      <div className="truncate w-[10rem]">
        <Span type={"subTitle3"}>{data.name}</Span>
      </div>
    </div>
  );
};

export default FigureCard;
