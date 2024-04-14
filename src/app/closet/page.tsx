"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/const";
import Header from "@/organism/Header";
import SelectItemModal from "@/organism/Modal/SelectItemModal";
import { SquareButton } from "@/atoms/Button";
import ItemsCarousel from "@/organism/ItemsCarousel";
import Frame from "@/molecules/ArticleFrame";
import AddItemModal from "@/organism/Modal/AddItemModal";

const Page = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="mt-[10rem]">
        <Frame title={"CLOSET PAGE"} type="bold">
          <div className="flex flex-col items-end gap-[1rem]">
            <SelectItemModal>
              <SquareButton> 조합 선택하기</SquareButton>
            </SelectItemModal>
            <AddItemModal>
              <SquareButton> 아이템 추가하기</SquareButton>
            </AddItemModal>
          </div>
        </Frame>

        <ItemsCarousel title="아이템 카테고리" onItemClick={() => {}} />

      </div>
    </Provider>
  );
};

export default Page;
