import Span from "@/atoms/Span";
import { RootState } from "@/redux/const";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetLocalStorage } from "@/util/HandleLocalStorage";
import { useDispatch } from "react-redux";
import { setAddress } from "@/redux/modules/adress";
import { setTemp } from "@/redux/modules/weather";

const WeatherInfo = ({ data }: any) => {
  const dispatch = useDispatch();

  const address = useSelector((state: RootState) => state.addressReducer);
  const [weather, setWeather] = useState<Record<string, number>>({});

  useEffect(() => {
    const newWeather: Record<string, number> = {};

    data.forEach((item: any) => {
      newWeather[item.category] = item.fcstValue;
    });

    setWeather(newWeather);
  }, [data]);

  useEffect(() => {
    if (Object.keys(weather).length === 0) {
      return;
    }
    const averageTemp = Math.ceil(
      (Number(weather.TMX) + Number(weather.TMN)) / 2
    );

    dispatch(setTemp(averageTemp));
  }, [weather]);

  useEffect(() => {
    dispatch(setAddress(GetLocalStorage("address")));
  }, [address, dispatch]);

  return (
    <div className="grid grid-cols-[1fr] min-w-[375px] items-center gap-[2rem]">
      <div className="flex flex-col items-center justify-center">
        <Span type={"subTitle2"}>{address.address || "주소를 설정하세요"}</Span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Span type={"large"}>{weather.TMP || "00"}º</Span>
        <Span type={"subTitle"}>
          {weather.TMN || "00"}º / {weather.TMX || "00"}º
        </Span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-[2rem]  items-center justify-center">
          <Span type={"subTitle2"}>습도: {weather.REH || "00"}%</Span>
          <Span type={"subTitle2"}>강수확률: {weather.POP || "0"}% </Span>
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
