"use client";
import Frame from "@/molecules/Frame/ArticleFrame";
import React from "react";
import SelectItemModal from "@/molecules/Modal/SelectItemModal";
import SquareButton from "@/atoms/Button/SquareButton";
import AddItemModal from "@/molecules/Modal/AddItemModal";

const ClosetActionSection = () => {
  return (
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
  );
};

export default ClosetActionSection;
