import React from "react";
import Header from "@/Template/Layout/Header";
import ClosetActionSection from "@/Template/Closet/ClosetActionSection.tsx";
import CategoryItemView from "@/Template/Closet/CategoryItemView";
import PrivateRouter from "@/Template/Layout/PrivateRouter";

const Page = () => {
  return (
    <PrivateRouter>
      <Header />
      <div className="mt-[10rem]">
        <ClosetActionSection />
        <CategoryItemView />
      </div>
    </PrivateRouter>
  );
};

export default Page;
