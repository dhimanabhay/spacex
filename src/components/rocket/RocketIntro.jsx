import { useInView } from "react-intersection-observer";
import falcon9_skeleton from "./falcon9/falcon9_skeleton.jpg";
import falcon9_cr1 from "./falcon9/falcon9_cr1.jpg";
import falconheavy_skeleton from "./falconheavy/falconheavy_skeleton.jpg";
import falconheavy_cr1 from "./falconheavy/falconheavy_cr1.jpg";
import dragon_skeleton from "./dragon/dragon_skeleton.jpg";
import dragon_cr1 from "./dragon/dragon_cr1.jpg";
import starship_skeleton from "./starship/starship_skeleton.jpg";
import starship_cr1 from "./starship/starship_cr1.jpg";
import f9_vid from "./falcon9/f9.mp4";

const rocket_intro_data = [
  {
    id: "falcon9",
    description:
      "Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.",
    img_skeleton: falcon9_skeleton,
    img_cr1: falcon9_cr1,
  },
  {
    id: "falconheavy",
    description:
      "Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. As one of the world’s most powerful operational rockets, Falcon Heavy can lift nearly 64 metric tons (141,000 lbs) to orbit.",
    img_skeleton: falconheavy_skeleton,
    img_cr1: falconheavy_cr1,
  },
  {
    id: "dragon",
    description:
      "The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.",
    img_skeleton: dragon_skeleton,
    img_cr1: dragon_cr1,
  },
  {
    id: "starship",
    description:
      "SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship is the world’s most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable.",
    img_skeleton: starship_skeleton,
    img_cr1: starship_cr1,
  },
];

const rocket_cr_data = [
  {
    id: "falcon9",
    height: "70 m",
    diameter: "3.7 m",
    mass: "549,054 kg",
    "payload to leo": "22,800 kg",
    "payload to gto": "8,300 kg",
    "payload to mars": "4,020 kg",
  },

  {
    id: "dragon",
    height: "8.1 m",
    diameter: "4 m",
    "capsule volume": "9.3 m³",
    "trunk volume": "37 m³",
    "launch payload mass": "6000 kg",
    "return payload mass": "3000 kg",
  },

  {
    id: "falconheavy",
    height: "70 m",
    width: "12.2 m",
    mass: "1,420,788 kg",
    "payload to leo": "63,800 kg",
    "payload to gto": "26,700 kg",
    "payload to mars": "16,800 kg",
  },

  {
    id: "starship",
    height: "121 m",
    diameter: "9 m",
    "payload capacity": "100 - 150 t (reusable)",
  },
];

export default function RocketIntro({ id }) {
  const selectedRocket = rocket_intro_data.find((rocket) => rocket.id === id);
  const selected_cr_Rocket = rocket_cr_data.find((rocket) => rocket.id === id);
  const [ref, inView] = useInView();
  const [vidref, invidView] = useInView();

  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "background-image 0.5s ease-in",
    backgroundImage: !inView ?  `url(${selectedRocket.img_skeleton})` : "",
    ...(inView
      ? { backgroundImage: `url(${selectedRocket.img_cr1})` }
      : { backgroundImage: `url(${selectedRocket.img_skeleton})` }),
  };

  const filterIdProperty = (obj) => {
    const { id, ...filteredObject } = obj;
    return filteredObject;
  };

  return (
    <div className="min-h-screen" style={divStyle}>
      {invidView&& (
        <video
        src={f9_vid}
        autoPlay
        loop
        muted
        className="h-1/2 w-full object-cover absolute bottom-0"
        ></video>
      )}
      <div className="flex flex-col justify-center w-1/3 h-screen pl-20 text-sm">
        <div className="flex flex-col justify-center h-full">
          {selectedRocket.description}
          <div></div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full h-screen pl-20 text-sm">
        <div className="flex flex-col justify-center h-full max-w-[500px]">
          <div className="text-lg uppercase">{selectedRocket.id}</div>
          <div className="text-6xl font-extrabold -ml-1">Overview</div>

          <div className="min-w-[75%] mt-10">
            <table ref={ref} className="w-full">
              <tbody className=" w-full">
                {Object.entries(filterIdProperty(selected_cr_Rocket)).map(
                  ([key, value]) => (
                    <tr key={key} className="flex w-full gap-1 ">
                      <td className=" w-1/2 border-b-[1px] py-5 border-gray-500 ">
                        {key.toUpperCase()}
                      </td>
                      <td className="text-right w-1/2 border-b-[1px] py-5 border-gray-500 ">
                        {value}
                      </td>
                    </tr>
                  )
                )}
                <div ref={vidref}></div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
