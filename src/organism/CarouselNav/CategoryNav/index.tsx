import React from "react";
import CategoryCarousel from "@/organism/Carousel/CategoryCarousel";

interface ItemType {
  _id: string;
  category: string;
  imgSrc: string;
}

const CategoryNav = ({
  data,
  title,
  onItemClick,
}: {
  data: ItemType[];
  title: string;
  onItemClick: (category: string) => void;
}) => {
  return (
    <CategoryCarousel title={title} onItemClick={onItemClick} data={data} />
  );
};

export default CategoryNav;
