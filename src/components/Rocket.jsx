import { useParams } from "react-router-dom";
import RocketHero from "./rocket/RocketHero";
import RocketCount from "./rocket/RocketCount";
import falcon9_home from "./rocket/falcon9/falcon9_home.jpg";
import falconheavy_home from "./rocket/falconheavy/falconheavy_home.jpg";
import dragon_home from "./rocket/dragon/dragon_home.jpg";
import starship_home from "./rocket/starship/starship_home.jpg";
import RocketIntro from "./rocket/RocketIntro";

const rocket_data = [
  {
    id: "falcon9",
    name: "falcon 9",
    description: "first orbital class rocket capable of reflight",
    img_home: falcon9_home,
  },
  {
    id: "falconheavy",
    name: "falcon heavy",
    description: "over 5 million lbs of thrust",
    img_home: falconheavy_home,
  },
  {
    id: "dragon",
    name: "dragon",
    description: "sending humans and cargo into space",
    img_home: dragon_home,
  },
  {
    id: "starship",
    name: "starship",
    description: "service to earth orbit, moon, mars and beyond",
    img_home: starship_home,
  },
];

const rocket_count_data = [
  {
    id: "falcon9",
    launch: "287",
    land: "245",
    reflight: "219",
  },
  {
    id: "falconheavy",
    launch: "9",
    land: "17",
    reflight: "14",
  },
  {
    id: "dragon",
    launch: "43",
    land: "39",
    reflight: "22",
  },
  {
    id: "starship",
    launch: "0",
    land: "0",
    reflight: "0",
  },
];
export default function Rocket() {
  const { rocketType } = useParams();

  return (
    <div className="min-h-[100vh]">
        <RocketHero id={rocketType} rocket_data={rocket_data}/>
        <RocketCount id={rocketType} rocket_count_data={rocket_count_data} />
        <RocketIntro />
    </div>
  );
}
