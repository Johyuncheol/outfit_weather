import React, { useEffect, useState } from "react";
import WeatherInfo from "@/molecules/WeatherInfo";
import { GetWeatherInfo } from "@/util/GetWeather";
import { GroupWeatherInfo } from "@/util/GroupWeatherInfo";
import { getWeatherAPI } from "@/api/WeatherApi";
import { GetYesterday } from "@/util/GetYesterday";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/const";

interface weatherItemType {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}
const WeatherSection = () => {
  const location = useSelector((state: RootState) => state.locationReducer);

  const [weather, setWeather] = useState<{
    TodayWeather: weatherItemType[];
    TomorrowWeather: weatherItemType[];
    TwoDaysAfterWeather: weatherItemType[];
    nowWeather: weatherItemType[];
  }>({
    TodayWeather: [],
    TomorrowWeather: [],
    TwoDaysAfterWeather: [],
    nowWeather: [],
  });

  // 페이지나 컴포넌트에서

  useEffect(() => {
    const yesterday = GetYesterday();
    const fetchData = async () => {
      try {
        const response = await getWeatherAPI({ yesterday, location });

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
  }, [location]);

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-[url('/assets/image/closet.jpg')] bg-cover opacity-40 filter blur-sm"></div>
      <div className="relative h-screen flex items-center min-w-[375px]  justify-center">
        {weather && <WeatherInfo data={weather.nowWeather} />}
      </div>
    </div>
  );
};

export default WeatherSection;
