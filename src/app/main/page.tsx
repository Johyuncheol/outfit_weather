"use client";
import WeatherTemplate from "@/Template/Common/WeatherTemplate";
import Header from "@/organism/Layout/Header";
import MainContentTemplate from "@/Template/Main/MainContentTemplate";
import PrivateRouter from "@/organism/Layout/PrivateRouter";
import ReduxProvider from "@/redux/Provider";

const Main = () => {
  return (
    <ReduxProvider>
      <PrivateRouter>
        <Header />
        <WeatherTemplate />
        <MainContentTemplate />
      </PrivateRouter>
    </ReduxProvider>
  );
};

export default Main;
