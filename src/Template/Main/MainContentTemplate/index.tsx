"use client";
import React, { useEffect, useState } from "react";
import ContentsSection from "@/organism/ContentsSection";
import Carousel from "@/molecules/Carousel";
import { GetLocalStorage } from "@/util/HandleLocalStorage";
import { getRecommendAPI } from "@/api/ClothesAPI";
import FigureCard from "@/molecules/FigureCard";
import { RootState } from "@/redux/const";
import { useSelector } from "react-redux";

// 리덕스 필요

interface ITem {
  _id: string;
  name: string;
  category: string;
  imgSrc: string;
  detail: string;
}

interface Item {
  mainItem: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
    detail: string;
  };
  styles: {
    outer: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
    top: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
    bottom: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
    inner: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
    };
  }[];
}

const MainContentTemplate = () => {
  const { temp } = useSelector((state: RootState) => state.tempReducer);

  const [recommend, setRecommend] = useState<Item[]>([]);
  const [mainItems, setMainItems] = useState<ITem[]>([]);

  // 특정 요소를 찾아서 이동하는 함수
  const scrollToElement = (item: ITem) => {
    // 요소 가져오기
    const element = document.getElementById(`recommend${item._id}`);

    if (element) {
      // 요소의 위치 정보 가져오기
      const rect = element.getBoundingClientRect();

      // 뷰포트의 스크롤 위치 조정
      window.scrollTo({
        top: rect.top + window.pageYOffset,
        behavior: "smooth", // 부드러운 스크롤 적용
      });
    }
  };

  useEffect(() => {
    const fetch = async () => {
      if (temp) {
        const res = await getRecommendAPI(Number(temp));
        if (res && res !== 401) {
          setMainItems(res.map((item: Item) => item.mainItem));
          setRecommend(res);
        }
      }
    };
    fetch();
  }, [temp]);

  return (
    <article>
      <Carousel<ITem>
        data={mainItems}
        onItemClick={scrollToElement}
        title={"추천 아이템"}
        renderFigure={(item) => (
          <FigureCard type={"circle-small"} data={item} />
        )}
      />
      <ContentsSection data={recommend} />
    </article>
  );
};

export default MainContentTemplate;
