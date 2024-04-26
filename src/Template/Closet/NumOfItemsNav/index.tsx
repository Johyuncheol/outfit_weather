"use client";
import SelectBox from "@/atoms/SelectBox";
import Frame from "@/molecules/Frame/ArticleFrame";
import React from "react";
import { options } from "./static/options";

const NumOfItemsNav = ({
  handleInputChange,
}: {
  handleInputChange: ({ event }: { event: React.ChangeEvent<HTMLSelectElement> }) => void;
}) => {
  return (
    <Frame title={"보기설정"} type="bold">
      <SelectBox
        id="category"
        options={options}
        onChange={handleInputChange}
        required
      />
    </Frame>
  );
};

export default NumOfItemsNav;
