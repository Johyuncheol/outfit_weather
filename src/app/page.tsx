"use client";
import WeatherSection from "@/organism/WeatherSection";
import LoginForm from "./Login";
import { Provider } from "react-redux";
import store from "../redux/const";
import Header from "@/organism/Header";
export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <Provider store={store}>
        <Header />
        <WeatherSection />
        <LoginForm />
      </Provider>
    </main>
  );
}
