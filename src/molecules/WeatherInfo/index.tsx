import Span from "@/atoms/Span";
import React from "react";

const WeatherInfo = () => {
  return (
    <div className="grid grid-cols-[0.5fr_1fr] min-w-[375px] items-center">
      <div className="flex flex-col items-center justify-center">
        <Span type={"large"}>3º</Span>
        <Span type={"title"}>-1º / 21º</Span>
      </div>
      <div className="flex flex-col">
        <Span type={"subTitle2"}>경북 칠곡군 왜관읍</Span>
        <Span type={"subTitle2"}>강수확률: 0% / 습도: 45%</Span>
        <Span type={"subTitle2"}> 하늘상태 / 강수형태</Span>
      </div>
    </div>
  );
};

export default WeatherInfo;
