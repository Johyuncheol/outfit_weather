import React, { useEffect, useState } from "react";
import ItemsCarousel from "@/organism/Carousel/ItemsCarousel";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/const";
import { getRecommendAPI } from "@/api/ClothesAPI";

interface ItemType {
  _id: string;
  name: string;
  imgSrc: string;
}

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
const ItemNav = () => {
  const { temp } = useSelector((state: RootState) => state.tempReducer);

  const [mainItems, setMainItems] = useState<ITem[]>([]);

  // 특정 요소를 찾아서 이동하는 함수
  const scrollToElement = (title: string, id: string) => {
    // 요소 가져오기
    const element = document.getElementById(`recommend${id}`);

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
        try {
          const res = await getRecommendAPI(Number(21));
          if (res) {
            setMainItems(res.map((item: Item) => item.mainItem));
          }
        } catch (error: any) {
          if (error.message === "Unauthorized") {
            // router.push("/");
          } else {
            console.error("Error fetching data:", error);
          }
        }
      }
    };

    fetch();
  }, [temp]);

  return (
    <ItemsCarousel
      title={"추천아이템"}
      onItemClick={scrollToElement}
      data={mainItems}
    />
  );
};

export default ItemNav;
