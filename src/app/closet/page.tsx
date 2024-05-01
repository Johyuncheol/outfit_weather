"use client";
import React from "react";
import ClosetTemplate from "@/Template/ClosetTemplate";
import PrivateRouter from "@/organism/Layout/PrivateRouter";
import ReduxProvider from "@/redux/Provider";
import Header from "@/organism/Layout/Header";

const Page = () => {
  return (
    <ReduxProvider>
      <PrivateRouter>
        <Header />
        <ClosetTemplate />
      </PrivateRouter>
    </ReduxProvider>
  );
};

export default Page;
