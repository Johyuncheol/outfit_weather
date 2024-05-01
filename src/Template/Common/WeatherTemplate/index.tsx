"use client";
import React from "react";
import WeatherSection from "@/organism/WeatherSection";
import WeatherNavSection from "@/organism/WeatherNavSection";

// 리덕스 필요 
const WeatherTemplate = () => {
  return (
    <article>
      <WeatherSection />
      <WeatherNavSection />
    </article>
  );
};

export default WeatherTemplate;
