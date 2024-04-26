"use client";
import React from "react";
import ReduxProvider from "@/redux/Provider";
import HeaderSection from "@/organism/HeaderSection";

const Header = () => {
  return (
    <ReduxProvider>
      <HeaderSection />
    </ReduxProvider>
  );
};

export default Header;
