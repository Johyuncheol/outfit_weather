import { AddLocalStorage, GetLocalStorage } from "@/util/HandleLocalStorage";
import { GetBaseTime } from "@/util/GetBaseTime";
import { GroupWeatherInfo } from "@/util/GroupWeatherInfo";
import { GetWeatherInfo } from "@/util/GetWeatherInfo";

interface getWeatherAPIProps {
  yesterday: number;
  location: {
    x: number | null;
    y: number | null;
  };
}

export const getWeatherAPI = async ({
  yesterday,
  location,
}: getWeatherAPIProps) => {
  try {
    const baseTime = GetBaseTime();
    const timeStamp = GetLocalStorage("weatherTimeStamp");
    const weatherData = GetLocalStorage("weatherData");

    // baseTime을 timestamp로 저장하는데 같으면 로컬스토리지의 데이터를 사용
    if (timeStamp && weatherData && baseTime === timeStamp) {
      return weatherData;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?serviceKey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&numOfRows=870&pageNo=1&dataType=JSON&base_date=${yesterday}&base_time=0200&nx=${location.x}&ny=${location.y}`
    );

    const resData = await response.json();
    // 날짜별 그룹화
    const GroupWeather = GroupWeatherInfo({
      data: resData.response.body.items.item,
    });

    const res = GetWeatherInfo({ data: GroupWeather });
    // 구분된 날씨 정보 가져오기
    AddLocalStorage("weatherTimeStamp", baseTime);
    AddLocalStorage("weatherData", res);

    return res;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
