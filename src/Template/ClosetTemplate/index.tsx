"use client";
import Carousel from "@/molecules/Carousel";
import React, { useEffect, useState } from "react";
import NumOfItemsNav from "@/molecules/NumOfItemsNav";
import Frame from "@/molecules/Frame/ArticleFrame";
import AtomicPagination from "@/molecules/PageNation";
import { useRouter } from "next/navigation";
import { getClothesAPI } from "@/api/ClothesAPI";
import ItemInfoModal from "@/molecules/Modal/ItemInfo";
import useModal from "@/hook/useModal";
import FigureCard from "@/molecules/FigureCard";
import ClosetActionSection from "@/organism/ClosetActionSection.tsx";
import { CategoryData } from "./static/CategoryData";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/const";

interface Item {
  _id: string;
  imgSrc: string;
  name: string;
}

// 리덕스 필요
const ClosetTemplate = () => {
  const reRender = useSelector((state: RootState) => state.rerenderReducer);

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
  }, [category, router, reRender]);

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
    <article>
      <div className="mt-[10rem]">
        <ClosetActionSection />
      </div>

      {open && <ItemInfoModal data={ModalData} closeModal={ChangeModalState} />}

      <Carousel<Item>
        title={"카테고리"}
        onItemClick={handleCategory}
        data={CategoryData}
        renderFigure={(item) => (
          <FigureCard type={"circle-small"} data={item} />
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
    </article>
  );
};

export default ClosetTemplate;
