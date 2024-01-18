import { useParams, useLocation } from "react-router-dom";
import RocketHero from "./rocket/RocketHero";
import RocketCount from "./rocket/RocketCount";
import RocketIntro from "./rocket/RocketIntro";
import { useEffect } from "react";
import RocketVideo from "./rocket/RocketVideo";
import RocketEngine from "./rocket/RocketEngine";
import RocketSlider from "./rocket/RocketSlider";

export default function Rocket() {
  const { rocketType } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100vh]">
        <RocketHero id={rocketType} />
        <RocketCount id={rocketType} />
        <RocketIntro id={rocketType} />
        <RocketVideo id={rocketType} />
        <RocketEngine id={rocketType} />
        <RocketSlider id={rocketType} />
    </div>
  );
}