import { GetBaseTime } from "./GetBaseTime";

export const GetWeatherInfo = ({ data }: any) => {
  const dataArray = Object.keys(data).map(key => data[key]);

  const TodayWeather = dataArray[1];
  const TomorrowWeather = dataArray[2];
  const TwoDaysAfterWeather = dataArray[3];

  const baseTime = GetBaseTime();
  const nowWeather = TodayWeather.filter(
    (item: { fcstDate: string; category: string; fcstTime: string }) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate()); // 현재 날짜에서 하루를 빼서 어제 날짜를 가져옴

      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");

      const formattedDateNumber = `${year}${month}${day}`;

      return (
        item.fcstTime == baseTime ||
        (item.fcstDate === formattedDateNumber && item.category === "TMN") ||
        (item.fcstDate === formattedDateNumber && item.category === "TMX")
      );
    }
  );

  console.log(nowWeather)
  return {
    TodayWeather,
    TomorrowWeather,
    TwoDaysAfterWeather,
    nowWeather,
  };
};
