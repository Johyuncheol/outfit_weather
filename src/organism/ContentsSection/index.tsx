"use client";
import React, { useEffect, useState } from "react";
import Frame from "@/molecules/Frame/ArticleFrame";
import ItemInfo from "@/molecules/ItemInfo";
import Carousel from "@/util/Carousel";
import ImageGrid from "@/molecules/ImageGrid";
import useModal from "@/hook/useModal";
import DetailModal from "@/organism/Modal/DetailModal";
import { getRecommendAPI } from "@/api/ClothesAPI";

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

const ContentsSection = () => {
  const { open, ChangeModalState } = useModal();
  const [ModalData, setModalData] = useState<any>();
  const HandleModal = (item: any) => {
    setModalData(item);
    ChangeModalState();
  };

  const [recommend, setRecommend] = useState<Item[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getRecommendAPI(Number(21));
        if (res) {
          setRecommend(res);
        }
      } catch (error: any) {
        if (error.message === "Unauthorized") {
          // router.push("/");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetch();
  }, []);

  return (
    <Frame title={"추천 아이템 스타일"} type="bold">
      {open && <DetailModal data={ModalData} closeModal={ChangeModalState} />}
      {recommend &&
        recommend.map((data, index) => {
          return (
            <div key={index} id={`recommend${data.mainItem._id}`}>
              <Frame title={`${data.mainItem.name} 코디`}>
                <ItemInfo
                  imgSrc={data.mainItem.imgSrc}
                  alt={data.mainItem.name}
                  detail={data.mainItem.detail}
                />
              </Frame>
              <Frame title={"코디 정보"}>
                <Carousel slideData={data.styles}>
                  {data.styles.map((styledItem, styledIndex) => (
                    <div
                      key={styledIndex}
                      onClick={() => HandleModal(styledItem)}
                    >
                      <ImageGrid data={styledItem} />
                    </div>
                  ))}
                </Carousel>
              </Frame>
            </div>
          );
        })}
    </Frame>
  );
};

export default ContentsSection;
