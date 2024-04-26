"use client";
import React from "react";
import ContentsSection from "@/organism/ContentsSection";
import ItemNav from "@/organism/CarouselNav/ItemNav";
import ReduxProvider from "@/redux/Provider";

const MainContentTemplate = () => {
  return (
    <ReduxProvider>
      <ItemNav />
      <ContentsSection />
    </ReduxProvider>
  );
};

export default MainContentTemplate;
