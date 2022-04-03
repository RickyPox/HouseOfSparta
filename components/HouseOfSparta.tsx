import H1 from "./H1"
import ScrollAnimation from 'react-animate-on-scroll'

export default function HouseOfSparta(){
    return (
      <div className='2xl:px-[300px] lg:px-[160px] px-[20px] pt-[100px]  flex flex-col lg:flex-row lg:justify-between lg:items-start justify-center items-center' id="HouseSparta">    
        
          <div className='lg:w-3/6 z-10'  >
            <ScrollAnimation animateOnce animateIn="animate__fadeInLeftBig">
              <H1 title="Introducing House of Sparta "></H1>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
              <p className='font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[40px]'>
              Selected by Fractal (Justin Kan/David Wurtz/Robin Chan) to be their premier launchpad incubated project, 
              House of Sparta bridges the gap between web3 gaming & the enormously popular RTS AAA gaming sector, 
              which has birthed industry leading titles such as Total War, Age of Empires & Star Craft.
              </p>
              <p className='font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[40px]'>
              House of Sparta is a <span className="text-[#FF1900]">multiplayer real time strategy</span> game built in partnership with iLogos Game Studios, where players utilise battlefield tactics, 
              inter-player diplomacy, cooperation & resilience to command their army to  victory. 
              Players will use their NFT warrior to rule a province and compete against other players to achieve territorial expansion.
              </p>
              {/* <div className="mt-[60px]">
                <a href='#' className='md:py-[25px] md:px-[60px] px-[30px] py-[10px] rounded-[15px] bg-black/70 hover:bg-black/90 text-white font-[HkGrotesk] font-regular text-[24px]'>View Litepaper</a>
              </div> */}
            </ScrollAnimation>
          </div>
        <div className='z-10'>
          <img className='lg:w-[130px] w-[100px] rotate-45 absolute 2xl:left-[1130px] lg:left-[430px] left-0 right-[150px] mx-auto spear' src='/spear.png'></img>
          <img className='lg:w-[130px] w-[100px] -rotate-45 absolute 2xl:left-[1300px] lg:left-[600px] left-[150px] right-0 mx-auto spear' src='/spear.png'></img>
        </div>
      </div>

    )
}