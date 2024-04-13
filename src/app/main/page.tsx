"use client";
import WeatherSection from "@/organism/WeatherSection";
import ItemsCarousel from "@/organism/ItemsCarousel";
import ContentsSection from "@/organism/ContentsSection";
import { Provider } from "react-redux";
import store from "../../redux/const";
import Header from "@/organism/Header";

const Main = () => {
  return (
    <Provider store={store}>
      <Header />
      <WeatherSection />
      <ItemsCarousel
        title={"추천아이템"}
        onItemClick={function (title: string, id: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ContentsSection />
    </Provider>
  );
};

export default Main;
