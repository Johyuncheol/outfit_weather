import Span from "@/atoms/Span";
import { RootState } from "@/redux/const";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WeatherInfo = ({ data }: any) => {
  const address = useSelector((state: RootState) => state.addressReducer);
  const [weather, setWeather] = useState({
    POP: 0,
    PTY: 0,
    PCP: 0,
    SKY: 0,
    TMP: 0,
    TMN: 0,
    TMX: 0,
    WSD: 0,
    REH: 0,
  });

  useEffect(() => {
    data.forEach((item: any) => {
      switch (item.category) {
        case "POP":
          setWeather((prevState) => ({ ...prevState, POP: item.fcstValue }));
          break;
        case "PTY":
          setWeather((prevState) => ({ ...prevState, PTY: item.fcstValue }));
          break;
        case "PCP":
          setWeather((prevState) => ({ ...prevState, PCP: item.fcstValue }));
          break;
        case "SKY":
          setWeather((prevState) => ({ ...prevState, SKY: item.fcstValue }));
          break;
        case "TMP":
          setWeather((prevState) => ({ ...prevState, TMP: item.fcstValue }));
          break;
        case "TMN":
          setWeather((prevState) => ({ ...prevState, TMN: item.fcstValue }));
          break;
        case "TMX":
          setWeather((prevState) => ({ ...prevState, TMX: item.fcstValue }));
          break;
        case "WSD":
          setWeather((prevState) => ({ ...prevState, WSD: item.fcstValue }));
        case "REH":
          setWeather((prevState) => ({ ...prevState, REH: item.fcstValue }));
          break;
        default:
          break;
      }
    });
  }, [data]);

  return (
    <div className="grid grid-cols-[1fr] min-w-[375px] items-center gap-[2rem]">
      <div className="flex flex-col items-center justify-center">
        <Span type={"subTitle2"}>{address.address || "주소를 설정하세요"}</Span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Span type={"large"}>{weather.TMP}º</Span>
        <Span type={"subTitle"}>
          {weather.TMN}º / {weather.TMX}º
        </Span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-[2rem]  items-center justify-center">
          <Span type={"subTitle2"}>습도: {weather.REH}%</Span>
          <Span type={"subTitle2"}>강수확률: {weather.POP}% </Span>
          <Span type={"subTitle2"}>
            {weather.SKY === 1
              ? "맑음"
              : weather.SKY === 3
                ? "구름많음"
                : "흐림"}

            {weather.PTY === 1
              ? "/비"
              : weather.PTY === 2
                ? "/비/눈"
                : weather.PTY === 3
                  ? "/눈"
                  : weather.PTY === 4
                    ? "/소나기"
                    : ""}
          </Span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
