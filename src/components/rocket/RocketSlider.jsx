import { useState } from "react";

const falcon9_images = Array.from({ length: 11 }, (_, index) => {
  const imageName = `f9_slider${index + 1}.jpg`;
  return require(`./falcon9/slider/${imageName}`);
});

const falconheavy_images = Array.from({ length: 10 }, (_, index) => {
  const imageName = `fh_slider${index + 1}.jpg`;
  return require(`./falconheavy/slider/${imageName}`);
});

const dragon_images = Array.from({ length: 5 }, (_, index) => {
  const imageName = `dragon_slider${index + 1}.jpg`;
  return require(`./dragon/slider/${imageName}`);
});

const starship_images = Array.from({ length: 5 }, (_, index) => {
  const imageName = `starship_slider${index + 1}.jpg`;
  return require(`./starship/slider/${imageName}`);
});


const rocket_slider_data = [
  {
    id: "falcon9",
    table: [
      {
        img: falcon9_images[0],
        description:
          "Falcon 9 launches Dragon to the International Space Station from Launch Complex 39A",
      },
      {
        img: falcon9_images[1],
        description:
          "Falcon 9 first and second stages after separating in flight",
      },
      {
        img: falcon9_images[2],
        description: "Falcon 9 lifts of with its Iridium-5 payload",
      },
      {
        img: falcon9_images[3],
        description: "Falcon 9 lands on the droneship",
      },
      {
        img: falcon9_images[4],
        description: "Close-up of Falcon 9's Merlin engines during liftoff",
      },
      {
        img: falcon9_images[5],
        description:
          "Falcon 9 leaves a trail of light as it lifts off from Vandenberg Air Force Base",
      },
      {
        img: falcon9_images[6],
        description:
          "Falcon 9 lifts of with Dragon for an i n-flight test of the Crew Dragon abort system",
      },
      {
        img: falcon9_images[7],
        description: "Falcon 9 lifts of with its Iridium-8 payload",
      },
      {
        img: falcon9_images[8],
        description:
          "Falcon 9 with its Radarsat payload at sunset before launch",
      },
      {
        img: falcon9_images[9],
        description: "Falcon 9 lands at Cape Canaveral",
      },
      {
        img: falcon9_images[10],
        description: "Falcon 9 vertical with its Iridium payload at moonrise",
      },
    ],
  },

  {
    id: "falconheavy",
    table: [
      {
        img: falconheavy_images[0],
        description:
          "Falcon Heavy vertical at Kennedy Space Center",
      },
      {
        img: falconheavy_images[1],
        description:
          "Falcon Heavy takes off from Pad 39A at Kennedy Space Center",
      },
      {
        img: falconheavy_images[2],
        description: "Falcon Heavy carries Arabsat-6A to orbit",
      },
      {
        img: falconheavy_images[3],
        description: "Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaveral",
      },
      {
        img: falconheavy_images[4],
        description: "Falcon Heavy lifts off from Pad 39A at Kennedy Space Center",
      },
      {
        img: falconheavy_images[5],
        description:
          "Falcon Heavy lifts off from Pad 39A at Kennedy Space Center",
      },
      {
        img: falconheavy_images[6],
        description:
          "All 27 Merlin engines lit on Falcon Heavy",
      },
      {
        img: falconheavy_images[7],
        description: "Falcon Heavy lifts off from Pad 39A at Kennedy Space Center",
      },
      {
        img: falconheavy_images[8],
        description:
          "Falcon Heavy lifts off from Pad 39A at Kennedy Space Center",
      },
      {
        img: falconheavy_images[9],
        description: "Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaveral",
      },
    ],
  },

  {
    id: "dragon",
    table: [
      {
        img: dragon_images[0],
        description:
          "Dragon on pad at Launch Complex 39A",
      },
      {
        img: dragon_images[1],
        description:
          "Dragon and Falcon 9 ready for launch at Launch Complex 39A",
      },
      {
        img: dragon_images[2],
        description: "Dragon approaching the International Space Station",
      },
      {
        img: dragon_images[3],
        description: "CRS-22 approaching the International Space Station",
      },
      {
        img: dragon_images[4],
        description: "Dragon is seen against the Earth's atmosphere",
      },
    ],
  },

  {
    id: "starship",
    table: [
      {
        img: starship_images[0],
        description:
          "Most powerful launch system ever",
      },
      {
        img: starship_images[1],
        description:
          "Payload to mars and beyond",
      },
      {
        img: starship_images[2],
        description: "Moon bases and storage",
      },
      {
        img: starship_images[3],
        description: "Building cities on mars",
      },
      {
        img: starship_images[4],
        description: "Earth-to-Earth transportation under 30 mins",
      },
    ],
  },
];

export default function RocketSlider({ id }) {
  const selectedRocket = rocket_slider_data.find((rocket) => rocket.id === id);

  const [curr, setCurr] = useState(0);
  const slides = selectedRocket.table;
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <section>
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
              <div className="text-sm">
                {selectedRocket.table[curr].description}
              </div>
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
