"use client";
import React, { useEffect, useState } from "react";
import WeatherInfo from "@/molecules/WeatherInfo";
import { GroupWeatherInfo } from "@/lib/GroupWeatherInfo";
import { GetWeatherInfo } from "@/lib/GetWeather";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/const";
import { GetToday } from "@/lib/GetToday";
import { getWeatherAPI } from "@/api/WeatherApi";

const WeatherSection = () => {
  const location = useSelector((state: RootState) => state.locationReducer);
  const [weather, setWeather] = useState({
    TodayWeather: null,
    TomorrowWeather: null,
    TwoDaysAfterWeather: null,
    nowWeather: null,
  });

  const Today = GetToday();
  // 페이지나 컴포넌트에서

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWeatherAPI({ Today, location });

        // 날짜별 그룹화
        const GroupWeather = GroupWeatherInfo({
          data: response.response.body.items.item,
        });

        // 구분된 날씨 정보 가져오기
        const {
          TodayWeather,
          TomorrowWeather,
          TwoDaysAfterWeather,
          nowWeather,
        } = GetWeatherInfo({ data: GroupWeather });

        // 설정
        setWeather({
          TodayWeather,
          TomorrowWeather,
          TwoDaysAfterWeather,
          nowWeather,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-[url('/assets/image/spring.jpg')] bg-cover opacity-50 filter blur-sm"></div>
      <div className="relative h-screen flex items-center min-w-[375px]  justify-center">
        {weather.nowWeather && <WeatherInfo data={weather.nowWeather} />}
      </div>
    </div>
  );
};

export default WeatherSection;
