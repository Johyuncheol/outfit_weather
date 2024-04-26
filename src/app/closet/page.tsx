import React from "react";
import Header from "@/Template/Layout/Header";
import ClosetActionSection from "@/Template/Closet/ClosetActionSection.tsx";
import CategoryItemView from "@/Template/Closet/CategoryItemView";

const Page = () => {
  return (
    <>
      <Header />
      <div className="mt-[10rem]">
        <ClosetActionSection />
        <CategoryItemView />
      </div>
    </>
  );
};

export default Page;
