import HomeComponent from './components/home/HomeComponent'
import home1 from './components/home/home_1.jpg'
import home2 from './components/home/home_2.jpg'
import home3 from './components/home/home_3.jpg'
import home4 from './components/home/home_4.mp4'

const home_list = [
    {
        img: home1,
        subTitle: "UPCOMING LAUNCH",
        title: "STARLINK MISSION",
        btnText: "WATCH",
    },
    {
        img: home2,
        subTitle: "RECENT LAUNCH",
        title: "STARLINK MISSION",
        btnText: "REWATCH",
    },
    {
        img: home3,
        subTitle: "RECENT LAUNCH",
        title: "OVZON 3 MISSION",
        btnText: "REWATCH",
    },
    {
        img: home4,
        subTitle: "RECENT LAUNCH",
        title: "STARSHIP SECOND TEST",
        btnText: "LEARN MORE",
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
