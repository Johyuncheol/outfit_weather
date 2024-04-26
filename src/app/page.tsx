import Header from "@/Template/Layout/Header";
import WeatherTemplate from "@/Template/Common/WeatherTemplate";
import FirstBanner from "@/Template/FirstBanner";

const Home = () => {
  return (
    <>
      <FirstBanner />
      <Header />
      <WeatherTemplate />
    </>
  );
};

export default Home;
