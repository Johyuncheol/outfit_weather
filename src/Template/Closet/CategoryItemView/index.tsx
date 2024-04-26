"use client";
import CategoryNav from "@/organism/CarouselNav/CategoryNav";
import React, { useEffect, useState } from "react";
import NumOfItemsNav from "../NumOfItemsNav";
import Frame from "@/molecules/Frame/ArticleFrame";
import AtomicPagination from "@/organism/PageNation";
import { useRouter } from "next/navigation";
import { getClothesAPI } from "@/api/ClothesAPI";

const CategoryItemView = () => {
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [ItemData, setItemData] = useState<Record<string, any>>({});
  const [category, setCategory] = useState("all");

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getClothesAPI({});
        if (res) {
          setItemData(res);
        }
      } catch (error: any) {
        if (error.message === "Unauthorized") {
          router.push("/");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetch();
  }, [category, router]);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCategory = (category: string) => {
    setCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (category === "all") {
      const allItem = Object.values(ItemData).flat();
      const slicedData = allItem.slice(startIndex, endIndex);
      setTotalPages(Math.ceil(allItem?.length / itemsPerPage));
      setPaginatedData(slicedData);
    } else {
      const slicedData = ItemData[category].slice(startIndex, endIndex);
      setTotalPages(Math.ceil(ItemData[category]?.length / itemsPerPage));
      setPaginatedData(slicedData);
    }
  }, [ItemData, category, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const handleInputChange = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLSelectElement>;
  }) => {
    event.preventDefault();
    const { name, value } = event.target;

    setItemsPerPage(Number(value));
  };

  return (
    <div>
      <CategoryNav
        data={exData}
        title={"카테고리"}
        onItemClick={handleCategory}
      />
      <NumOfItemsNav handleInputChange={handleInputChange} />

      <Frame title={"아이템"} type="bold">
        <AtomicPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          data={paginatedData}
        />
      </Frame>
    </div>
  );
};

export default CategoryItemView;

export const exData = [
  {
    imgSrc:
      "https://weather-outfit-image.s3.amazonaws.com/6619043c4ad9ca1d71dd1528/바지.png",
    _id: "!23",
    category: "all",
  },
  {
    imgSrc:
      "https://weather-outfit-image.s3.amazonaws.com/6619043c4ad9ca1d71dd1528/바지.png",
    _id: "!23",
    category: "outer",
  },
  {
    imgSrc:
      "https://weather-outfit-image.s3.amazonaws.com/6619043c4ad9ca1d71dd1528/바지.png",
    _id: "!23",
    category: "top",
  },
  {
    imgSrc:
      "https://weather-outfit-image.s3.amazonaws.com/6619043c4ad9ca1d71dd1528/바지.png",
    _id: "!23",
    category: "inner",
  },
  {
    imgSrc:
      "https://weather-outfit-image.s3.amazonaws.com/6619043c4ad9ca1d71dd1528/바지.png",
    _id: "!23",
    category: "bottom",
  },
];
