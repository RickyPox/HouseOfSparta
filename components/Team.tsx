import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"

export default function Team(){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col justify-end pt-[100px] space-y-20 relative z-10' id="Team">
          <ScrollAnimation animateOnce animateIn="animate__bounceIn">
            <div className='flex justify-center lg:justify-end'>
              <H1 title="Founding Team"></H1>
            </div>
          </ScrollAnimation>
          <div className='flex flex-col justify-center lg:flex-row lg:justify-between space-y-20 lg:space-y-0'>
            <ScrollAnimation animateOnce animateIn="animate__backInDown">
              <div className='flex flex-col space-y-5 items-center'>
                <img src='/Team1.jpg' className='w-[300px] rounded-[30px]'></img>
                <p className='font-[Cinzel] font-regular text-[24px] text-white'>
                  Reece Pinnock
                </p>
                <p className=' text-[18px] text-white'>
                CEO
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__backInDown">
            <div className='flex flex-col space-y-5 items-center'>
              <img src='/Team3.png' className='w-[300px] rounded-[30px]'></img>
              <p className='font-[Cinzel] font-regular text-[24px] text-white'>
                Andrew baron
              </p>
              <p className=' text-[18px] text-white text-center'>
              Community and Marketing Director
              </p>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__backInUp">
            <div className='flex flex-col space-y-5 items-center'>
              <img src='/Team2.jpeg' className='w-[300px] rounded-[30px]'></img>
              <p className='font-[Cinzel] font-regular text-[24px] text-white'>
                Will
              </p>
              <p className=' text-[18px] text-white'>
              Head of Growth
              </p>
            </div>
            </ScrollAnimation>
          </div>
        </div>

    )
}