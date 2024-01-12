import { useInView } from "react-intersection-observer";

export default function RocketIntro({ id, rocket_intro_data }) {
  const selectedRocket = rocket_intro_data.find((rocket) => rocket.id === id);
  const [ref, inView] = useInView();

  const divStyle = {
    backgroundImage: `url(${selectedRocket.img_skeleton})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition:"background-image 0.5s ease-in-out",
    ...(inView && { backgroundImage: `url(${selectedRocket.img_cr1})` }),
  };

  return (
    <div style={divStyle} className="min-h-screen">

        <div className="flex flex-col justify-center w-1/3 h-screen pl-20 text-sm">
          <div className="flex flex-col justify-center h-full">
            {selectedRocket.description}
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/3 h-screen pl-20 text-sm">
          <div className="flex flex-col justify-center h-full">
            <div>{selectedRocket.id}</div>
            <div>Overview</div>
          </div>
          <div ref={ref}></div>
        </div>

    </div>
  );
}
