"use client";
import React, { useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  slideData: any[];
}
const CarouselFrame: React.FC<CarouselProps> = ({ children, slideData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <div
          className="flex transition ease "
          style={{
            transform: `translateX(-${currentSlide * (100 / slideData.length)}%)`,
          }}
        >
          {children}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r"
      >
        &#10095;
      </button>
    </div>
  );
};

export default CarouselFrame;
