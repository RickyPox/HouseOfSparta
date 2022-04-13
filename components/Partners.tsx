import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"

export default function Partners(){
    return (
      <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col justify-end md:py-[100px] md:mt-[200px] py-[50px] mt-[50px] relative z-10'>
        <div className='flex flex-col space-y-20 justify-center items-center'>
          <H1 title="Partnered With"></H1>
          <ScrollAnimation animateOnce animateIn="animate__lightSpeedInRight">
            <img src='/iLogos.png' className='w-[500px]'></img>
          </ScrollAnimation>

          <ScrollAnimation animateOnce animateIn="animate__lightSpeedInLeft">
            <img src='/Fractal.png' className='w-[500px]'></img>
          </ScrollAnimation>
        </div>
      </div>

    )
}