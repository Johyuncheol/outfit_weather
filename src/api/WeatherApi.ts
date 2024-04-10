interface getWeatherAPIProps {
  Today: number;
  location: {
    x: number | null;
    y: number | null;
  };
}

export const getWeatherAPI = async ({
  Today,
  location,
}: getWeatherAPIProps) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?serviceKey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&numOfRows=870&pageNo=1&dataType=JSON&base_date=${Today}&base_time=0200&nx=${location.x}&ny=${location.y}`
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
