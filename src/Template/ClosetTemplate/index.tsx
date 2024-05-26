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

interface ProcessedData {
  [key: string]: Item[][];
}

const ClosetTemplate = () => {
  const reRender = useSelector((state: RootState) => state.rerenderReducer);

  const [categoryItemDate, setCategoryItemDate] = useState<ProcessedData>({});
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [ItemData, setItemData] = useState<Record<string, any>>({});
  const [category, setCategory] = useState("all");

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const router = useRouter();

  // 서버로 부터 데이터를 받아오는 부분
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
  }, [router, reRender]);

  //페이지 변경 함수
  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //카테고리 변경함수
  const handleCategory = (item: Item) => {
    setCategory(item.name);
    setCurrentPage(1);

    setTotalPages(categoryItemDate[item.name].length);
  };


  // 받아온 데이터의 객체의 키값을 키로 설정
  // 해당키의 값을 페이지당 아이템수로 잘라서 페이지 번호에 맞는 배열인덱스에 저장
  // ex) {아우터:[[1페이지데이터],[2페이지데이터]]}
  useEffect(() => {
    const processedData: ProcessedData = {};

    for (let key in ItemData) {
      if (!processedData[key]) {
        processedData[key] = [];
      }
      const categoryItems = ItemData[key];
      const processedTotalPages = Math.ceil(
        categoryItems.length / itemsPerPage
      );
      setTotalPages(processedTotalPages);

      for (let j = 0; j < processedTotalPages; j++) {
        const startIndex = j * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        processedData[key].push(categoryItems.slice(startIndex, endIndex));
      }
    }

    if (processedData[category]) {
      setCategoryItemDate(processedData);
      console.log(processedData[category][currentPage - 1]);
    }
  }, [ItemData, itemsPerPage]);


  // 페이지당 아이템 수 설정시 1페이지로 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // 페이지당 아이템 수 설정 함수
  const handleInputChange = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLSelectElement>;
  }) => {
    event.preventDefault();
    const { name, value } = event.target;

    setItemsPerPage(Number(value));
  };

  //모달 open 상태 및 상태변경함수
  const { open, ChangeModalState } = useModal();
  //모달 내용 데이터
  const [ModalData, setModalData] = useState<any>();
  //모달 설정 함수
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

      <Frame title={`${category} 아이템`} type="bold">
        <AtomicPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          data={categoryItemDate[category]?.[currentPage - 1] || []}
          onClickItem={HandleModal}
        />
      </Frame>
    </article>
  );
};

export default ClosetTemplate;
