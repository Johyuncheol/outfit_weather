import WeatherTemplate from "@/Template/Common/WeatherTemplate";
import Header from "@/Template/Layout/Header";
import MainContentTemplate from "@/Template/Main/MainContentTemplate";

const Main = () => {
  return (
    <>
      <Header />
      <WeatherTemplate />
      <MainContentTemplate />
    </>
  );
};

export default Main;
