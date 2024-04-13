"use client";
import WeatherSection from "@/organism/WeatherSection";
import { Provider } from "react-redux";
import store from "../redux/const";
import Header from "@/organism/Header";

const Home = () => {
  return (
    <Provider store={store}>
      <Header />
      <WeatherSection />
    </Provider>
  );
};
export default Home;
