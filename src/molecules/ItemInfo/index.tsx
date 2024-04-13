import ImageCircle from "@/atoms/ImageCircle";
import React from "react";

interface ItemInfoProps {
  imgSrc: string;
  alt: string;
  detail: string;
}

const ItemInfo: React.FC<ItemInfoProps> = ({ imgSrc, alt, detail }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center">
        <ImageCircle type={"responsive"} imgSrc={imgSrc} alt={alt} />
      </div>
      <pre>{detail}</pre>
    </div>
  );
};

export default ItemInfo;
