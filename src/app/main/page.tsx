"use client";
import WeatherSection from "@/organism/WeatherSection";
import MainItemsNav from "@/organism/MainItemsNav";
import ContentsSection from "@/organism/ContentsSection";
import { Provider } from "react-redux";
import store from "../../redux/const";
import Header from "@/organism/Header";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <WeatherSection />
      <MainItemsNav />
      <ContentsSection />
    </Provider>
  );
}
