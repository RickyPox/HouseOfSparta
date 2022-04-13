import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"
import H2 from "./H2"
export default function Pillars(){
    return (
        <div className='flex flex-col justify-end pt-[100px] relative' id="Pillars">
          <video src="/ember.mp4" autoPlay muted loop className="absolute z-0 h-full w-full object-cover"></video>
        <div className="absolute -top-[165px]">
          <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
          <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
        </div>
        <div className="absolute -bottom-[165px]">
          <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
          <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
        </div>
        <div className="2xl:px-[300px] lg:px-[160px] px-[20px] z-10">
          <div className='flex justify-center '>
            <ScrollAnimation animateOnce animateIn="animate__bounceInRight">
              <H1 title="THE FOUR PILLARS OF GAMEPLAY"></H1>
            </ScrollAnimation>
          </div>
          <div className='flex flex-col items-center justify-center relative z-10 mt-[50px] space-y-20'>
          <ScrollAnimation animateOnce animateIn="animate__zoomIn">
            <div className='flex flex-col lg:flex-row lg:justify-between space-y-20 lg:space-y-0 lg:space-x-10 items-center lg:items-start'>
              
              <div className='lg:w-1/2'>
                <img src='/Landscape.png' className='w-[150px] mb-[25px]'></img>
                <H2 title='Growth'></H2>
                <p className=' text-[18px] text-white leading-[30px] mt-[25px]'>
                Grow your province and increase its prosperity to increase its ranking in the Kingdom. 
                Explore lands around your province. Construct new resource generating buildings and acquire new land by winning battles.
                </p>
              </div>


              <div className='lg:w-1/2'>
                <img src='/Conquer.png' className='w-[70px] mb-[25px]'></img>
                <H2 title='Conquer Mode'></H2>
                <p className=' text-[18px] text-white leading-[30px] mt-[25px]'>
                  Play PvE in our Conquer mode, where you and your legion will face fierce adversaries and lay claim to new regions and resources as you make your way through the lands.
                </p>
              </div>
              
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__zoomIn">
            <div className='flex flex-col lg:flex-row lg:justify-between space-y-20 lg:space-y-0 lg:space-x-10'>
              <div className='lg:w-1/2'>
                <img src='/Battle.png' className='w-[80px] mb-[25px]'></img>
                <H2 title='Battle Mode'></H2>
                <p className=' text-[18px] text-white leading-[30px] mt-[25px]'>
                  Real-Time Strategy PvP battle mode set around the lands of Ancient Greece. Attack, defend or meet on a neutral battlefield. The winner takes the spoils of war…
                </p>
              </div>
              <div className='lg:w-1/2'>
                <img src='/Kingdom.png' className='w-[145px] mb-[25px]'></img>
                <H2 title='Kingdom DAO'></H2>
                <p className=' text-[18px] text-white leading-[30px] mt-[25px]'>
                Through the implementation of Decentralized Autonomous Kingdoms (DAK), provinces may join forces to share the resources and manpower. 
                Opposing Kingdoms may wage war to become the greatest empire in the land.
                </p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          </div>
        </div>

    )
}