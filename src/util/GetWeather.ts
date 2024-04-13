import { GetYesterday } from "./GetYesterday";
import { GetBaseTime } from "./GetBaseTime";

export const GetWeatherInfo = ({ data }: any) => {
  const Yesterday = GetYesterday();
  const TodayWeather = data[Yesterday + 1];
  const TomorrowWeather = data[Yesterday + 2];
  const TwoDaysAfterWeather = data[Yesterday + 3];

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
