import Header from "@/organism/Header";
import WeatherSection from "@/organism/WeatherSection";
import MainItemsNav from "@/organism/MainItemsNav";
import ContentsSection from "@/organism/ContentsSection";
export default function Home() {

  return (
    <main>
      <Header />
      <WeatherSection />
      <MainItemsNav />
      <ContentsSection />
    </main>
  );
}
