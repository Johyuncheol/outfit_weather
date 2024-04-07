import React from "react";
import Span from "@/atoms/Span";
import HeaderOptions from "@/molecules/HeaderOptions";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-[50] bg-slate-100 flex p-5 items-center justify-between min-w-[375px]">
      <Span type={"title"}>OutfitWeather</Span>
      <HeaderOptions />
    </header>
  );
};

export default Header;
