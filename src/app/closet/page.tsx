"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "@/redux/const";
import Header from "@/organism/Header";
import SelectItemModal from "@/organism/Modal/SelectItemModal";
import { SquareButton } from "@/atoms/Button";
import ItemsCarousel from "@/organism/ItemsCarousel";

const Page = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="mt-[10rem]">
        <ItemsCarousel title="아이템 카테고리" onItemClick={() => {}} />
        <div className="flex justify-end">
          <SelectItemModal>
            <SquareButton> 선택하기</SquareButton>
          </SelectItemModal>
        </div>
      </div>
    </Provider>
  );
};

export default Page;
