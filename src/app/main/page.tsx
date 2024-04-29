import WeatherTemplate from "@/Template/Common/WeatherTemplate";
import Header from "@/Template/Layout/Header";
import MainContentTemplate from "@/Template/Main/MainContentTemplate";
import PrivateRouter from "@/Template/Layout/PrivateRouter";
const Main = () => {
  return (
    <PrivateRouter>
      <Header />
      <WeatherTemplate />
      <MainContentTemplate />
    </PrivateRouter>
  );
};

export default Main;
