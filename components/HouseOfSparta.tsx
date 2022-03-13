import H1 from "./H1"
import ScrollAnimation from 'react-animate-on-scroll'

export default function HouseOfSparta(){
    return (
      <div className='2xl:px-[300px] lg:px-[160px] px-[20px] pt-[300px]  flex flex-col lg:flex-row lg:justify-between lg:items-start justify-center items-center' id="HouseSparta">    
        
          <div className='lg:w-1/2 z-10'  >
            <ScrollAnimation animateOnce animateIn="animate__fadeInLeftBig">
              <H1  title='House of Sparta'></H1>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
              <p className='font-[Roboto] text-[18px] text-white leading-[30px] mt-[40px]'>
                Welcome to the House of Sparta, a community-led play-to-earn gaming project that uses cinematic quality <span className='text-[#FF1900]'>3D NFTs</span>, where <span className='text-[#FF1900]'>YOU</span> will decide the fate of our heroes.
              </p>
              <p className='font-[Roboto] text-[18px] text-white leading-[30px] mt-[40px]'>
                In this real-time strategy game. Players will grow their province, battle other opponents with mighty armies, and team up with other provinces to become the greatest kingdom in the land..
              </p>
              <div className="mt-[60px]">
                <a href='#' className='md:py-[25px] md:px-[60px] px-[30px] py-[10px] rounded-[15px] bg-black/70 hover:bg-black/90 text-white font-[Roboto] font-bold text-[24px]'>View Litepaper</a>
              </div>
            </ScrollAnimation>
          </div>
          
        

        <div className='z-10'>
          <img className='lg:w-[130px] w-[100px] rotate-45 absolute 2xl:left-[1130px] lg:left-[430px] left-0 right-[150px] mx-auto spear' src='/spear.png'></img>
          <img className='lg:w-[130px] w-[100px] -rotate-45 absolute 2xl:left-[1300px] lg:left-[600px] left-[150px] right-0 mx-auto spear' src='/spear.png'></img>
        </div>
      </div>

    )
}