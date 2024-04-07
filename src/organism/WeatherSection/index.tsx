import React from "react";
import WeatherInfo from "@/molecules/WeatherInfo";

const WeatherSection = () => {
  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-[url('/assets/image/spring.jpg')] bg-cover opacity-50 filter blur-sm"></div>
      <div className="relative h-screen flex items-center min-w-[375px]  justify-center">
        <WeatherInfo />
      </div>
    </div>
  );
};

export default WeatherSection;
