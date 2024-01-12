import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


export default function RocketHero({ id, rocket_data }) {
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
