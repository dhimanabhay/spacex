import { useEffect, useState } from "react";
import falcon9_first from "./falcon9/falcon9_first.jpg";
import falcon9_second from "./falcon9/falcon9_second.jpg";
import falconheavy_first from "./falconheavy/falconheavy_first.jpg";
import falconheavy_second from "./falconheavy/falconheavy_second.jpg";
import dragon_first from "./dragon/dragon_first.jpg";
import dragon_second from "./dragon/dragon_second.jpg";
import starship_first from "./starship/starship_first.jpg";
import starship_second from "./starship/starship_second.jpg";

const rocket_engine_data = [
  {
    id: "falcon9",
    engine: "merlin",
    first: {
      name: "sea level",
      description:
        "Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.",
      img: falcon9_first,
      table: {
        propellant: "lox",
        thrust: "845 kn",
      },
    },
    second: {
      name: "vaccuum",
      description:
        "Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.",
      img: falcon9_second,
      table: { propellant: "lox", thrust: "981 kn" },
    },
  },

  {
    id: "falconheavy",
    engine: "merlin",
    first: {
      name: "sea level",
      img: falconheavy_first,
      description:
        "Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.",
      table: { propellant: "lox", thrust: "845 kn" },
    },
    second: {
      name: "vaccuum",
      img: falconheavy_second,
      description:
        "Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.",
      table: { propellant: "lox", thrust: "981 kn" },
    },
  },

  {
    id: "dragon",
    engine: "draco",
    first: {
      name: "draco",
      img: dragon_first,
      description:
        "The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.",
      table: { "number of engines": "16", "thrust in vaccuum": "400 kn" },
    },

    second: {
      name: "superdraco",
      img: dragon_second,
      description:
        "An array of eight SuperDraco engines provide fault-tolerant propulsion for Dragon’s launch escape system. In the unlikely event of an emergency, the eight SuperDraco engines can power Dragon half a mile away from the launch vehicle in less than eight seconds.",
      table: { "number of engines": "8", "escape thrust": "73 kN" },
    },
  },

  {
    id: "starship",
    engine: "raptor",
    first: {
      name: "raptor",
      img: starship_first,
      description:
        "The Raptor engine is a reusable methane-oxygen staged-combustion engine that powers the Starship system and has twice the thrust of the Falcon 9 Merlin engine. Starship will be powered by six engines, three Raptor engines, and three Raptor Vacuum (RVac) engines, which are designed for use in the vacuum of space. Super Heavy will be powered by 33 Raptor engines, with 13 in the center and the remaining 20 around the perimeter of the booster’s aft end.",
      table: { diameter: "1.3 m", height: "3.1 m", thrust: "230 tf" },
    },
    second: {
      name: "raptor vacuum",
      img: starship_second,
      description:
        "Raptor Vacuum (RVac) is a similar design to the Raptor engine, but features a larger exhaust section and a larger expansion nozzle to maximize the engine’s efficiency in space. Three RVacs will power Starship in addition to three Raptor engines.",
      table: { diameter: "2.3 m", height: "4.6 m", thrust: "258 tf" },
    },
  },
];

export default function RocketEngine({ id }) {
  //setRocket
  const selectedRocket = rocket_engine_data.find((rocket) => rocket.id === id);

  //setEngine
  const [selectedEngine, setEngine] = useState(selectedRocket.engine);

  //setType
  const [selectedType, setType] = useState(selectedRocket.first);

  useEffect(() => {
    setEngine(selectedRocket.engine);
    setType(selectedRocket.first);
  }, [selectedRocket]);

  const changeType = (type) => {
    type === "first"
      ? setType(selectedRocket.first)
      : setType(selectedRocket.second);
  };

  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.1s ease-in-out",
    ...(selectedType === selectedRocket.first ? { backgroundImage: `url(${selectedRocket.first.img})`} : {backgroundImage: `url(${selectedRocket.second.img})`}),
  }; 

  return (
    <section className="min-h-screen" style={divStyle}>
      <div className="h-full w-full pl-44 pt-44" >
        <div className="w-1/3 min-w-[300px]">
          <div>
            <p className="text-xs uppercase">engines</p>
            <p className="text-4xl font-bold uppercase">{selectedEngine}</p>
          </div>
          <div>
            <div className="flex gap-3 py-10 text-xs uppercase ">
              <p
                style={{
                  fontSize:
                    selectedType === selectedRocket.first ? "1rem" : "0.8rem",
                  color:
                    selectedType === selectedRocket.first
                      ? "white"
                      : "rgb(107 114 128)",
                  cursor: "pointer",
                }}
                onClick={() => changeType("first")}
              >
                {selectedRocket.first.name}
              </p>
              <p className="text-gray-500">|</p>
              <p
                style={{
                  fontSize:
                    selectedType === selectedRocket.second ? "1rem" : "0.8rem",
                  color:
                    selectedType === selectedRocket.second
                      ? "white"
                      : "rgb(107 114 128)",
                  cursor: "pointer",
                }}
                onClick={() => changeType("second")}
              >
                {selectedRocket.second.name}
              </p>
            </div>
            <div>
              <p className="font-extralight text-sm leading-5 ">
                {selectedType.description}
              </p>
            </div>

            <div className="pt-5">
              <table className="w-full">
                <tbody className=" w-full">
                  {Object.entries(selectedType.table).map(([key, value]) => (
                    <tr key={key} className="flex w-full gap-1 text-sm">
                      <td className="w-1/2 border-b-[1px] uppercase py-3 border-gray-500">
                        {key}
                      </td>
                      <td className="text-right w-1/2 border-b-[1px] py-3 border-gray-500">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
