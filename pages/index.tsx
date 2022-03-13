<<<<<<< HEAD

export default function Intro() {

  function Video(){
    const IntroVideo = document.getElementById("IntroVideo");
    const LoadVideo = document.getElementById("LoadVideo");
    IntroVideo.className="hidden"
    LoadVideo.className="block"
    document.getElementById("Btn").className="hidden"
    LoadVideo.addEventListener("ended",myHandler,false);

    function myHandler(e){
    window.location.href="/Home"
  }
  }

=======
import Head from 'next/head'
import H1 from '../components/H1'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HouseOfSparta from '../components/HouseOfSparta'
import Roadmap from '../components/Roadmap'
import Attributes from '../components/Attributes'
import WhyHouseOfSparta from '../components/WhyHouseOfSparta'
import GameOverview from '../components/Game'
import Pillars from '../components/Pillars'
import NFTSpecs from '../components/NFTSpecs'
import Team from '../components/Team'
import Partners from '../components/Partners'
import ScrollAnimation from 'react-animate-on-scroll'
import Spartans from '../components/Spartans'
>>>>>>> 11856e8f2c6bbebaab7da302c33b9fb71e72bc27


  return (
    <div className="overflow-hidden w-screen h-screen relative z-0 bg-black">
        <video className="w-screen h-screen md:h-auto border-0 " autoPlay muted loop id="IntroVideo" src="/VideoIntro.mp4"></video>
        <video className="w-screen h-screen md:h-auto border-0 hidden" autoPlay muted id="LoadVideo" src="/LOAD2.mp4"></video>
        <div className="absolute z-10 flex flex-col justify-center items-center top-1 left-1 right-1 bottom-1 mx-auto my-auto"  id="Btn">
          <h1 className="text-white font-[Uncial-Antiqua] text-[40px] lg:text-[48px] text-center">
            Grab your Weapon <br></br>
            Join The House of Sparta
          </h1>
          <img onClick={Video} className="w-[400px] mt-10 sword hover:scale-110 sword cursor-pointer" src="/DualSword.png" ></img>

<<<<<<< HEAD
=======
        {/* INTRO SECTION */}
          <div className='flex flex-col justify-center items-center px-[20px] py-[180px] relative'>
            <div>
              <H1 title="WELCOME TO THE LEGION"></H1>
            </div>
            <div className='mt-[40px]'>
              <video width="1100" controls poster='/videoposter.jpeg' src="/trailer.mp4"></video>
            </div>
            <div className='mt-[60px]'>
              <a href='#' className='md:py-[25px] md:px-[60px] px-[30px] py-[10px] rounded-[15px] bg-black/70 hover:bg-black/90 text-white font-[Roboto] font-bold text-[24px]'>View Litepaper</a>
            </div>
          </div>
          <div className='absolute -bottom-[165px]'>   
            <div className=' w-screen h-[165px] bg-gradient-to-b from-black/0 to-black z-10'></div>
            <div className=' w-screen h-[165px] bg-gradient-to-b from-black to-black/0 z-10'></div>
          </div>
      </div>
        
      <div className='py-[250px] relative overflow-hidden w-screen'>
        {/* Bg Images */}

            <img src='/minataur.png' 
            className='absolute 
            scale-[3] top-[800px] left-[300px] 
            xl:scale-[2] xl:left-[500px] xl:top-[800px] opacity-30 z-0' data-aos="fade-in">
            </img>

      
          <img src='/medusa.png' 
          className='absolute 
          scale-[3] top-[4800px] right-[300px] 
          xl:scale-[2] xl:right-[600px] xl:top-[3900px] opacity-30 z-0'>
          </img>

          <img src='/titan.png' className=' absolute 
          scale-[3] top-[7500px] left-[100px] 
          xl:scale-[1.5] xl:left-[200px] xl:top-[6800px] opacity-30 z-0'>
          </img>

          <img src='/echidna.png' className=' absolute 
          scale-[3] top-[9500px] -left-[100px] 
          xl:scale-[1.5] xl:-left-[300px] xl:top-[9000px] opacity-30 z-0'>
          </img>

          <img src='/manticore.png' className=' absolute 
          scale-[2] top-[11300px] left-[300px] 
          xl:scale-[1] xl:left-[600px] xl:top-[9500px] opacity-30 z-0'>
          </img>

        <img src='/centeur.png' className=' absolute 
        scale-[4] top-[13300px] right-[100px] 
        xl:scale-[1.5] xl:right-[400px] xl:top-[11000px] opacity-30 z-0 '>
        </img>

        <HouseOfSparta></HouseOfSparta>
        <Roadmap></Roadmap>
        <Attributes></Attributes>
        <WhyHouseOfSparta></WhyHouseOfSparta> 
        <GameOverview></GameOverview>
        <Spartans></Spartans>
        <Pillars></Pillars>
        <NFTSpecs></NFTSpecs>
        <FAQ></FAQ>
        <Team></Team>
        <Partners></Partners>
      </div>
      {/* Div Transition Gradient */}
      <div className='relative'>
        <div className="absolute -top-[160px]">
          <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
          <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
>>>>>>> 11856e8f2c6bbebaab7da302c33b9fb71e72bc27
        </div>
    </div>
  )
}