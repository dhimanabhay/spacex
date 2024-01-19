import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import cr1 from "./hs_img/hs_cr1.jpg";
import cr2 from "./hs_img/hs_cr2.jpg";
import cr3 from "./hs_img/hs_cr3.jpg";
import cr4 from "./hs_img/hs_cr4.jpg";
import hs_home from "./hs_img/hs_home.jpg";

const rocket_slider_data = [
  {
    id: "humanflight",
    name: "human spaceflight",
    description: "Making life multiplanetary",
    img_home: hs_home,
    table: [
      {
        img: cr1,
        title: "on-orbit",
        description: "view earth from 300 km up",
      },
      {
        img: cr2,
        title: "launch",
        description: "crew prepares for the takeoff",
      },
      {
        img: cr3,
        title: "splashdown",
        description: "crew prepares for the landing",
      },
      {
        img: cr4,
        title: "training",
        description: "crew prepares for the launch day",
      },
    ],
  },
];

export default function HumanFlight() {
  const selectedRocket = rocket_slider_data.find(
    (rocket) => rocket.id === "humanflight"
  );
  const [curr, setCurr] = useState(0);
  const slides = selectedRocket.table;
  const prev = () =>
    setCurr((curr) => (curr === 0 ? selectedRocket.table.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === selectedRocket.table.length - 1 ? 0 : curr + 1));

  const controls = useAnimation();

  const divStyle = {
    backgroundImage: `url(${selectedRocket.img_home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const imgVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0,
      },
    },
  };
  const textVariant = {
    initial: { opacity: 0, y: 120 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section>
      <div className="min-h-screen w-full">
        {selectedRocket ? (
          <motion.div
            key={selectedRocket.id}
            variants={imgVariant}
            initial="hidden"
            animate="show"
            transition={imgVariant.transition}
            style={divStyle}
            className="h-screen flex flex-col items-center justify-center"
          >
            <motion.p
              variants={textVariant}
              initial="initial"
              animate="animate"
              transition={textVariant.transition}
              className="font-[Arial] text-8xl uppercase font-[1000]"
            >
              {selectedRocket.name}
            </motion.p>
            <motion.p
              variants={textVariant}
              initial="initial"
              animate="animate"
              transition={textVariant.transition}
              className="uppercase"
            >
              {selectedRocket.description}
            </motion.p>
          </motion.div>
        ) : (
          <div>
            <p>Rocket not found</p>
          </div>
        )}
      </div>

      <div className="min-h-screen h-screen">
        <div className=" flex items-center justify-center w-full h-full ">
          <div
            className=" flex items-end h-full w-full transition-all ease-in-out 0.5s"
            style={{
              backgroundImage: `url(${selectedRocket.table[curr].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-row w-full justify-center px-10 py-6 text-white bg-black">
              <div className="text-sm">{selectedRocket.table[curr].description}</div>
            </div>
          </div>
        </div>

        <div className=" w-full relative">
          <div className="absolute flex justify-between w-full bottom-0 py-6 px-10">
            <button onClick={prev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="23"
                width="15"
                viewBox="0 0 320 512"
                fill="white"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>

            <button onClick={next}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="23"
                width="15"
                viewBox="0 0 320 512"
                fill="white"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
