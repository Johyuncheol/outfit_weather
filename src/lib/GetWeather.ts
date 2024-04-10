import { GetToday } from "./GetToday";
import { GetBaseTime } from "./GetBaseTime";

export const GetWeatherInfo = ({ data }: any) => {
  const Today = GetToday();
  const TodayWeather = data[Today];
  const TomorrowWeather = data[Today + 1];
  const TwoDaysAfterWeather = data[Today + 2];

  const baseTime = GetBaseTime();
  const nowWeather = TodayWeather.filter(
    (item: { category: string; fcstTime: string }) => {
      return (
        item.fcstTime == baseTime ||
        item.category === "TMN" ||
        item.category === "TMX"
      );
    }
  );

  return {
    TodayWeather,
    TomorrowWeather,
    TwoDaysAfterWeather,
    nowWeather,
  };
};
