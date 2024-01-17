import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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

export default function RocketCount({ id }) {
  const selectedRocket = rocket_count_data.find((rocket) => rocket.id === id);
  const [ref, inView] = useInView();

  const [count, setCount] = useState({
    launch: 0,
    land: 0,
    reflight: 0,
  });

  const controls = useAnimation();
  useEffect(() => {
    setCount({
      launch: 0,
      land: 0,
      reflight: 0,
    });
  }, [selectedRocket.id])

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCount((prevCount) => ({
          launch:
            prevCount.launch < selectedRocket.launch
              ? prevCount.launch + 1
              : selectedRocket.launch,
          land:
            prevCount.land < selectedRocket.land
              ? prevCount.land + 1
              : selectedRocket.land,
          reflight:
            prevCount.reflight < selectedRocket.reflight
              ? prevCount.reflight + 1
              : selectedRocket.reflight,
        }));
      }, 4);

      if (
        count.launch === selectedRocket.launch &&
        count.land === selectedRocket.land &&
        count.reflight === selectedRocket.reflight
      ) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
    if(!inView) {

      setTimeout(() => {
        setCount({
          launch: 0,
          land: 0,
          reflight: 0,
        });
      }, 500);
    }

  }, [selectedRocket, count.land, count.launch, count.reflight, inView]);

  if (selectedRocket.launch === "0") {
    return null;
  }
  
  return (
    <div  className="w-full flex items-center py-20 justify-center">
      <motion.div animate={controls} className="flex items-center justify-center w-1/2 gap-20">
        <div className="flex flex-col items-center">
          <p  className="text-[7rem] ">{count.launch}</p>
          <p ref={ref} className="pb-10 -mt-5">TOTAL LAUNCHES</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[7rem]" >{count.land}</p>
          <p className="pb-10 -mt-5">TOTAL LANDINGS</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[7rem]">{count.reflight}</p>
          <p className="pb-10 -mt-5">TOTAL REFLIGHTS</p>
        </div>
      </motion.div>
    </div>
  );
}
