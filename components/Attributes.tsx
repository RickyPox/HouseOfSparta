import H1 from "./H1";
import ScrollAnimation from 'react-animate-on-scroll'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Attributes(){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col justify-center items-center py-[100px] relative bg-[url("/AttributesBg.png")] bg-cover bg-no-repeat ' id="Attributes">
          
        <div className="absolute -top-[165px]">
          <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
          <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
        </div>
        <div className="absolute -bottom-[165px]">
          <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
          <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
        </div>
        <div className="z-10">
          <ScrollAnimation animateOnce animateIn="animate__zoomInDown">
            <H1 title="Commander Attributes"></H1>
          </ScrollAnimation>
          </div>
        <div className='flex flex-col align-middle justify-center items-center'>
        <ScrollAnimation animateOnce animateIn="animate__zoomIn">  
          <div className='slider w-[400px] relative right-0 bottom-0 mx-auto h-[500px] mt-[200px] z-10'>
            {/* SLIDER */}
            <div className='w-[400px] absolute slider-item4 flex flex-col items-center'>
              <img src='/Spartan4.png'></img>
              <p className=' text-[18px] text-white leading-[30px]'>Spartan Ice Warrior</p>
              <p className=' font-regular text-[18px] text-white leading-[30px]'>Skin</p>
            </div>
            <div className='w-[400px] absolute slider-item5 flex flex-col items-center'>
              <img src='/Spartan5.png'></img>
              <p className=' text-[18px] text-white leading-[30px]'>Immortal Spartan</p>
              <p className=' font-regular text-[18px] text-white leading-[30px]'>Warrior Armour</p>
              
            </div>
            <div className='w-[400px] absolute slider-item1 flex flex-col items-center'>
              <img src='/Spartan1.png'></img>
              <p className=' text-[18px] text-white leading-[30px]'>Standard Spartan</p>
              <p className=' font-regular text-[18px] text-white leading-[30px]'>Warrior Uniform</p>
            </div>
            <div className='w-[400px] absolute slider-item2 flex flex-col items-center'>
              <img src='/Spartan2.png'></img>
              <p className=' text-[18px] text-white leading-[30px]'>Elite Spartan Warrior</p>
              <p className=' font-regular text-[18px] text-white leading-[30px]'>Helmet</p>
            </div>
            <div className='w-[400px] absolute slider-item3 flex flex-col items-center'>
              <img src='/Spartan3.png'></img>
              <p className=' text-[18px] text-white leading-[30px]'>Commander Spartan</p>
              <p className=' font-regular text-[18px] text-white leading-[30px]'>Warrior Armour</p>
            </div>
          </div>  
          {/* SLIDER END*/}
          <div className='flex w-[400px] px-[20px] justify-between items-center mb-[75px] z-10'>
            <p className='font-[Cinzel] font-regular text-item1'>Common</p>
            <div className='w-[12px] h-[12px] rounded-full text-item2'></div>
            <div className='w-[12px] h-[12px] rounded-full text-item3'></div>
            <div className='w-[12px] h-[12px] rounded-full text-item4'></div>
            <p className='font-[Cinzel] font-regular text-item5'>Rare</p>   
          </div>
          <div className="z-10 flex items-center justify-center">
          <a href='/Rarity.jpg' target="_blank" className=' py-[25px] px-[60px] rounded-[15px] bg-[#69000070] hover:bg-[#69000090] text-white  font-regular text-[24px]'>See full rarity</a>
          </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation animateOnce animateIn="animate__zoomIn">
        <div className="flex flex-col z-20">
        <Carousel className="mt-[200px] z-20" autoPlay infiniteLoop showStatus>
                  <div>
                      <img src="/SpartanCard1.png" alt="image1"/>
                  </div>
                  <div>
                      <img src="/SpartanCard2.png" alt="image2" />
                  </div>
                  <div>
                      <img src="/SpartanCard3.png" alt="image3"/>
                  </div>
              </Carousel>
              <p className=' font-regular text-[18px] text-white leading-[30px] z-20'>*Please note that the above attributes are for demonstration purposes only and are not representative of true in-game attributes</p>
        </div>
      </ScrollAnimation>
      </div>

    )
}