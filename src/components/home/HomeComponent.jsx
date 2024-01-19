import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomeComponent({ key, data }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const divStyle = {
    backgroundImage: `url(${data.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      {data.id === 4 ? (
        <div className=" min-h-screen w-full">
          <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          src={data.img}
        />
          <div className="absolute flex min-h-screen w-full items-end pb-40 pl-40">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="flex flex-col"
            >
              <div className="text-sm">{data.subTitle}</div>
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <div className=" py-4">
                <a href={data.link} target="_blank" rel="noreferrer"  className="border-2 mt-4 py-2 px-6 border-white">
                  {data.btnText}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen w-full" style={divStyle}>
        <div className="flex min-h-screen w-full items-end pb-40 pl-40">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col"
          >
            <div className="text-sm">{data.subTitle}</div>
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <div className=" py-4">
              <a href={data.link} target="_blank" rel="noreferrer" className="cursor-pointer border-2 mt-4 py-2 px-6 border-white">
                {data.btnText}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      )}

      
    </>
  );
}
