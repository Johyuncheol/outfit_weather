"use client"
import Header from "@/organism/Layout/Header";
import ReduxProvider from "@/redux/Provider";
import WeatherTemplate from "@/Template/Common/WeatherTemplate";
import FirstBanner from "@/Template/FirstBanner";

const Home = () => {
  return (
    <ReduxProvider>
      <FirstBanner />
      <Header />
      <WeatherTemplate />
    </ReduxProvider>
  );
};

export default Home;
