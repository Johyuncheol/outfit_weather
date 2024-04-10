"use client";
import React from "react";
import Span from "@/atoms/Span";
import MapModal from "../Modal/MapModal";
import useModal from "@/hook/useModal";
import GeoButton from "@/molecules/GeoButton";
import LoginButton from "@/molecules//LoginButton";

const Header = () => {
  const { open, ChangeModalState } = useModal();

  return (
    <header className="fixed top-0 w-full z-[50] bg-slate-100 flex p-5 items-center justify-between min-w-[375px]">
      <Span type={"title"}>OutfitWeather</Span>
      <div className="flex gap-4">
        <GeoButton />
        <LoginButton />
      </div>
      {open && <MapModal closeModal={ChangeModalState} />}
    </header>
  );
};

export default Header;
