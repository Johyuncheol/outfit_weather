import React from "react";
import ItemsCarousel from "@/organism/Carousel/ItemsCarousel";

interface ItemType {
  _id: string;
  name: string;
  imgSrc: string;
}

const ItemNav = ({
  data,
  onItemClick,
}: {
  data: ItemType[];
  onItemClick: (title: string, id: string) => void;
}) => {
  return (
    <ItemsCarousel title={"추천아이템"} onItemClick={onItemClick} data={data} />
  );
};

export default ItemNav;
