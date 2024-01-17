export default function Page404() {
    return (
      <>
        <main className="grid min-h-[100vh] place-items-center bg-black text-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-4xl font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <span
                
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </span>
            </div>
          </div>
        </main>
      </>
    )
  }
  



// //home photos
// import falcon9_home from "./rocket/falcon9/falcon9_home.jpg";
// import falconheavy_home from "./rocket/falconheavy/falconheavy_home.jpg";
// import dragon_home from "./rocket/dragon/dragon_home.jpg";
// import starship_home from "./rocket/starship/starship_home.jpg";

// //intro photos
// import falcon9_skeleton from "./rocket/falcon9/falcon9_skeleton.jpg"
// import falcon9_cr1 from "./rocket/falcon9/falcon9_cr1.mp4"

// import falconheavy_skeleton from "./rocket/falconheavy/falconheavy_skeleton.jpg"
// import falconheavy_cr1 from "./rocket/falconheavy/falconheavy_cr1.mp4"

// import dragon_skeleton from "./rocket/dragon/dragon_skeleton.jpg"
// import dragon_cr1 from "./rocket/dragon/dragon_cr1.mp4"

// import starship_skeleton from "./rocket/starship/starship_skeleton.jpg"
// import starship_cr1 from "./rocket/starship/starship_cr1.mp4"


// const rocket_data = [
//   {
//     id: "falcon9",
//     name: "falcon 9",
//     description: "first orbital class rocket capable of reflight",
//     img_home: falcon9_home,
//   },
//   {
//     id: "falconheavy",
//     name: "falcon heavy",
//     description: "over 5 million lbs of thrust",
//     img_home: falconheavy_home,
//   },
//   {
//     id: "dragon",
//     name: "dragon",
//     description: "sending humans and cargo into space",
//     img_home: dragon_home,
//   },
//   {
//     id: "starship",
//     name: "starship",
//     description: "service to earth orbit, moon, mars and beyond",
//     img_home: starship_home,
//   },
// ];

// const rocket_count_data = [
//   {
//     id: "falcon9",
//     launch: "287",
//     land: "245",
//     reflight: "219",
//   },
//   {
//     id: "falconheavy",
//     launch: "9",
//     land: "17",
//     reflight: "14",
//   },
//   {
//     id: "dragon",
//     launch: "43",
//     land: "39",
//     reflight: "22",
//   },
//   {
//     id: "starship",
//     launch: "0",
//     land: "0",
//     reflight: "0",
//   },
// ];

// const rocket_intro_data = [
//   {
//     id: "falcon9",
//     description: "Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.",
//     img_skeleton: falcon9_skeleton,
//     img_cr1: falcon9_cr1,
//   },
//   {
//     id: "falconheavy",
//     description: "Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. As one of the world’s most powerful operational rockets, Falcon Heavy can lift nearly 64 metric tons (141,000 lbs) to orbit.",
//     img_skeleton: falconheavy_skeleton,
//     img_cr1: falconheavy_cr1,
//   },
//   {
//     id: "dragon",
//     description: "The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.",
//     img_skeleton: dragon_skeleton,
//     img_cr1: dragon_cr1,
//   },
//   {
//     id: "starship",
//     description: "",
//     img_skeleton: starship_skeleton,
//     img_cr1: starship_cr1,
//   },
// ];
