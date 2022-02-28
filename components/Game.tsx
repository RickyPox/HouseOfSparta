import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"

export default function GameOverview(){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col mt-[300px] space-y-20' id="Game">
          <ScrollAnimation animateOnce animateIn="animate__lightSpeedInRight">
          <div className='relative flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center'> 
            <H1 title='GAME OVERVIEW'></H1>
            <div className='h-[2px] lg:w-1/2 bg-white'></div>
          </div>
          </ScrollAnimation>
          <div className='flex flex-col space-y-2 overflow-hidden'>
            <div className='flex relative z-10 justify-around items-center space-x-2'>
              <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
                <img src='/game1.png' className='w-full'></img>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
                <img src='/game2.png' className='w-full'></img>
              </ScrollAnimation>
            </div>
            <div className='flex relative z-10 justify-around '>
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
              <img src='/game3.png' className='w-full'></img>
            </ScrollAnimation>
            </div>
            <div className='flex relative z-10 justify-around items-center space-x-2 '>
            <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
              <img src='/game4.png' className='w-full'></img>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__fadeInRight"> 
              <img src='/game5.jpeg' className='w-full'></img>
            </ScrollAnimation>   
            </div>
            <div className='flex relative z-10 justify-around items-center space-x-2 '>
            <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
              <img src='/game6.png' className='w-full'></img>
            </ScrollAnimation> 
            <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
              <img src='/game7.png' className='w-full'></img>
            </ScrollAnimation>     
            </div>
            <div className='block relative z-10 items-center'>
            <ScrollAnimation animateOnce animateIn="animate__bounceIn">
              <img src='/game8.jpeg' className='w-full'></img>
            </ScrollAnimation>
            </div>
          </div>
        </div>

    )
}