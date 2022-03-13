import H1 from "./H1"
import ScrollAnimation from 'react-animate-on-scroll'
export default function Attributes(){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] flex flex-col justify-center items-center pt-[300px] z-10 relative space-y-[200px]' id="Attributes">
          <ScrollAnimation animateOnce animateIn="animate__zoomInDown">
            <H1 title="Commander Attributes"></H1>
          </ScrollAnimation>
        <div className='flex flex-col align-middle justify-center items-center'>
        <ScrollAnimation animateOnce animateIn="animate__zoomIn">  
          <div className='slider w-[400px] relative right-0 bottom-0 mx-auto h-[500px]'>
            {/* SLIDER */}
            <div className='w-[400px] absolute slider-item4 flex flex-col items-center'>
              <img src='/Spartan4.png'></img>
              <p className='font-[Roboto] text-[18px] text-white leading-[30px]'>Spartan Ice Warrior</p>
              <p className='font-[Roboto] font-regular text-[18px] text-white leading-[30px]'>Skin</p>
            </div>
            <div className='w-[400px] absolute slider-item5 flex flex-col items-center'>
              <img src='/Spartan5.png'></img>
              <p className='font-[Roboto] text-[18px] text-white leading-[30px]'>Immortal Spartan</p>
              <p className='font-[Roboto] font-regular text-[18px] text-white leading-[30px]'>Warrior Armour</p>
              
            </div>
            <div className='w-[400px] absolute slider-item1 flex flex-col items-center'>
              <img src='/Spartan1.png'></img>
              <p className='font-[Roboto] text-[18px] text-white leading-[30px]'>Standard Spartan</p>
              <p className='font-[Roboto] font-regular text-[18px] text-white leading-[30px]'>Warrior Uniform</p>
            </div>
            <div className='w-[400px] absolute slider-item2 flex flex-col items-center'>
              <img src='/Spartan2.png'></img>
              <p className='font-[Roboto] text-[18px] text-white leading-[30px]'>Elite Spartan Warrior</p>
              <p className='font-[Roboto] font-regular text-[18px] text-white leading-[30px]'>Helmet</p>
            </div>
            <div className='w-[400px] absolute slider-item3 flex flex-col items-center'>
              <img src='/Spartan3.png'></img>
              <p className='font-[Roboto] text-[18px] text-white leading-[30px]'>Commander Spartan</p>
              <p className='font-[Roboto] font-regular text-[18px] text-white leading-[30px]'>Warrior Armour</p>
            </div>
          </div>
          </ScrollAnimation>
          {/* SLIDER END*/}
          <div className='flex w-[400px] justify-between items-center mb-[75px]'>
            <p className='font-[Cinzel] font-bold text-item1'>Common</p>
            <div className='w-[12px] h-[12px] rounded-full text-item2'></div>
            <div className='w-[12px] h-[12px] rounded-full text-item3'></div>
            <div className='w-[12px] h-[12px] rounded-full text-item4'></div>
            <p className='font-[Cinzel] font-bold text-item5'>Rare</p>   
          </div>
          <div>
          <a href='Rarity.png' target="_blank" className='py-[25px] px-[60px] rounded-[15px] bg-black/70 hover:bg-black/90 text-white font-[Roboto] font-bold text-[24px]'>See full rarity</a>
          </div>
        </div>
      </div>

    )
}