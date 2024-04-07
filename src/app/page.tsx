import WeatherSection from "@/organism/WeatherSection";
import LoginForm from "./Login";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <WeatherSection />
      <LoginForm />
    </main>
  );
}
