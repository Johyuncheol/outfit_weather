"use client";
import React from "react";
import WeatherSection from "@/organism/WeatherSection";
import WeatherNavSection from "@/organism/WeatherNavSection";
import ReduxProvider from "@/redux/Provider";

const WeatherTemplate = () => {
  return (
    <ReduxProvider>
      <WeatherSection />
      <WeatherNavSection />
    </ReduxProvider>
  );
};

export default WeatherTemplate;
