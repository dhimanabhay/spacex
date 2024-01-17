import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

//home photos
import falcon9_home from "./falcon9/falcon9_home.jpg";
import falconheavy_home from "./falconheavy/falconheavy_home.jpg";
import dragon_home from "./dragon/dragon_home.jpg";
import starship_home from "./starship/starship_home.jpg";

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

export default function RocketHero({ id }) {
  const selectedRocket = rocket_data.find((rocket) => rocket.id === id);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 300) {
        controls.start({ opacity: 0 });
      } else {
        controls.start({ opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  
  return (
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
  );
}