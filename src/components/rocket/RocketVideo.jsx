import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

import falcon9_video from "./falcon9/f9_video.jpg";
import falconheavy_video from "./falconheavy/falconheavy_video.jpg";
import dragon_video from "./dragon/dragon_video.jpg";
import starship_video from "./starship/starship_video.jpg";

const rocket_vid_data = [
  {
    id: "falcon9",
    text: "video",
    title: "falcon 9 in flight",
    vid: falcon9_video,
    vid_link: "https://youtu.be/Z4TXCZG_NEY?si=hT-qAEXWWxK5_3zB",
  },
  {
    id: "dragon",
    text: "video",
    title: "crew dragon interior",
    vid: dragon_video,
    vid_link: "https://youtu.be/78ATfCaBn6E?si=S0tu1NSjcQFGL68v",
  },
  {
    id: "falconheavy",
    text: "video",
    title: "falcon heavy first flight",
    vid: falconheavy_video,
    vid_link: "https://youtu.be/A0FZIwabctw?si=GRQIne6mYqbPd36v",
  },
  {
    id: "starship",
    text: "video",
    title: "off to mars",
    vid: starship_video,
    vid_link: "https://youtu.be/921VbEMAwwY?si=vNxQZYnJAQpfwMNP",
  },
];

export default function RocketVideo({ id }) {
  const selectedRocket = rocket_vid_data.find((rocket) => rocket.id === id);

  const [showVid, setShowVid] = useState(false);

  const toggleVideo = () => {
    setShowVid(!showVid);
  };

  useEffect(() => {
    setShowVid(false);
  }, [selectedRocket.id])

  const bgImage = {
    backgroundImage: `url(${selectedRocket.vid})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-screen min-h-screen w-full font-nunito">
      {showVid ? (
        <div
          onClick={toggleVideo}
          className="h-full flex items-center justify-center"
        >
          <ReactPlayer
            controls={true}
            width="80vw"
            height="90vh"
            url={selectedRocket.vid_link}
            playing={true}
          />
        </div>
      ) : (
        <div onClick={toggleVideo} className="flex h-full" style={bgImage}>
          {/* <svg
            className="relative left-1/2 top-1/2"
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="50"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
          </svg> */}

          <svg
            className="relative left-1/2 top-1/2"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="50"
            viewBox="0 0 384 512"
          >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
          <div className="flex flex-col justify-end pb-44 pl-44 uppercase ">
            <p className="text-sm">{selectedRocket.text}</p>
            <h1 className="w-fit flex items-center text-4xl font-bold">
              {selectedRocket.title}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
