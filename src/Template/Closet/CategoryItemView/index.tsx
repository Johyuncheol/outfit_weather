"use client";
import CategoryCarousel from "@/organism/Carousel/FigureCarousel";
import React, { useEffect, useState } from "react";
import NumOfItemsNav from "../NumOfItemsNav";
import Frame from "@/molecules/Frame/ArticleFrame";
import AtomicPagination from "@/organism/PageNation";
import { useRouter } from "next/navigation";
import { getClothesAPI } from "@/api/ClothesAPI";
import ItemInfoModal from "@/organism/Modal/ItemInfo";
import useModal from "@/hook/useModal";
import FigureImage from "@/atoms/FigureImage";

interface Item {
  _id: string;
  imgSrc: string;
  name: string;
}

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

  const handleCategory = (item: Item) => {
    setCategory(item.name);
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

  const { open, ChangeModalState } = useModal();
  const [ModalData, setModalData] = useState<any>();
  const HandleModal = (item: any) => {
    setModalData(item);
    ChangeModalState();
  };

  return (
    <div>
      {open && <ItemInfoModal data={ModalData} closeModal={ChangeModalState} />}

      <CategoryCarousel<Item>
        title={"카테고리"}
        onItemClick={handleCategory}
        data={exData}
        renderFigure={(item) => (
          <FigureImage
            type={"circle-small"}
            imgSrc={item.imgSrc}
            alt={item.name}
          />
        )}
      />

      <NumOfItemsNav handleInputChange={handleInputChange} />

      <Frame title={"아이템"} type="bold">
        <AtomicPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          data={paginatedData}
          onClickItem={HandleModal}
        />
      </Frame>
    </div>
  );
};

export default CategoryItemView;

export const exData = [
  {
    imgSrc: "/assets/image/ALL.svg",
    _id: "!23",
    name: "all",
  },
  {
    imgSrc: "/assets/image/outer.jpg",
    _id: "!23",
    name: "outer",
  },
  {
    imgSrc: "/assets/image/top.jpg",
    _id: "!23",
    name: "top",
  },
  {
    imgSrc: "/assets/image/inner.jpg",
    _id: "!23",
    name: "inner",
  },
  {
    imgSrc: "/assets/image/pants.jpg",
    _id: "!23",
    name: "bottom",
  },
];
