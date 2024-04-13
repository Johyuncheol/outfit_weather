"use client";
import React, { useEffect, useState } from "react";
import WeatherInfo from "@/molecules/WeatherInfo";
import { GroupWeatherInfo } from "@/util/GroupWeatherInfo";
import { GetWeatherInfo } from "@/util/GetWeather";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/const";
import { GetYesterday } from "@/util/GetYesterday";
import { getWeatherAPI } from "@/api/WeatherApi";
import Image from "next/image";
import AuthModal from "../Modal/AuthModal";
import { SquareButton } from "@/atoms/Button";
import Span from "@/atoms/Span";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const WeatherSection = () => {
  const pathname = usePathname();
  const router = useRouter();

  const location = useSelector((state: RootState) => state.locationReducer);

  const [weather, setWeather] = useState({
    TodayWeather: null,
    TomorrowWeather: null,
    TwoDaysAfterWeather: null,
    nowWeather: null,
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
      <div className="absolute h-screen inset-0 bg-[url('/assets/image/spring.jpg')] bg-cover opacity-50 filter blur-sm"></div>
      <div className="relative h-screen flex items-center min-w-[375px]  justify-center">
        {weather.nowWeather && <WeatherInfo data={weather.nowWeather} />}
      </div>

      {pathname === "/" ? (
        <div className="absolute bottom-[10%] right-5">
          <AuthModal>
            <SquareButton>
              <Span type={"subTitle"}>시작하기</Span>
            </SquareButton>
          </AuthModal>
        </div>
      ) : (
        <>
          <div className="absolute bottom-[15%] right-5">
            <SquareButton onClick={() => router.push("/closet")}>
              <Span type={"subTitle"}>내 옷장으로</Span>
            </SquareButton>
          </div>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <Image
              src={"/assets/icon/arrow.svg"}
              alt={"아래쪽 화살표"}
              width={60}
              height={35}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherSection;
