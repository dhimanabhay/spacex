import HomeComponent from './components/home/HomeComponent'
import home1 from './components/home/home_1.jpg'
import home2 from './components/home/home_2.jpg'
import home3 from './components/home/home_3.jpg'
import home4 from './components/home/home_4.mp4'

const home_list = [
    {
        id: 1,
        img: home1,
        subTitle: "CURRENT MISSION",
        title: "AX-3 MISSION",
        btnText: "REWATCH",
        link: "https://www.youtube.com/live/1nXlbgjIoP4?si=7NvmOJAUpITVzbrQ",
    },
    {
        id: 2,
        img: home2,
        subTitle: "RECENT LAUNCH",
        title: "STARLINK MISSION",
        btnText: "REWATCH",
        link: "https://youtu.be/AdxtHqN88LM?si=PvRd79Ay4LdvCw_P",
    },
    {
        id: 3,
        img: home3,
        subTitle: "RECENT LAUNCH",
        title: "OVZON 3 MISSION",
        btnText: "REWATCH",
        link: "https://www.youtube.com/live/7I90uPUb7eI?si=-t_d4cPHdLphNktk",
    },
    {
        id: 4,
        img: home4,
        subTitle: "RECENT LAUNCH",
        title: "STARSHIP SECOND TEST",
        btnText: "LEARN MORE",
        link: "https://youtu.be/sSgozq8B-7A?si=-oYLJPTqLaRrgK5b",
    },
]

export default function Home() {
  return (
    <div className=''>
        {home_list.map((item, index) => (
            <HomeComponent
                key={index}
                data={item}
            />
        ))}
    </div>
  )
}
