import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"
export default function NFTSpecs(){
    return (
      <div className='flex flex-col justify-end pt-[100px]  relative' id="Specs">
        <video src="/Specs.mp4" autoPlay muted loop className="absolute z-0 h-full w-full object-cover"></video>
        <div className="absolute -top-[165px]">
          <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
          <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
        </div>
        <div className="absolute -bottom-[165px]">
          <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
          <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
        </div>
        <div>
        <ScrollAnimation animateOnce animateIn="animate__rotateInUpLeft">
          <div className='flex justify-center pt-[30px]'>
            <H1 title="House of Sparta NFT’s"></H1>
          </div>
        </ScrollAnimation>
        </div>
        
        <div className="p-[40px] px-[20px] 2xl:px-[300px] lg:px-[160px] z-10">
        <ScrollAnimation animateOnce animateIn="animate__zoomIn">
          <div className="grid grid-cols-4 mt-5 ">
            <div className="m-5">
              <img src="/SpartanNFT1.png"></img>
            </div>
            <div className="m-5">
              <img src="/SpartanNFT2.png"></img>
            </div>
            <div className="m-5">
              <img src="/SpartanNFT3.png"></img>
            </div>
            <div className="m-5">
              <img src="/SpartanNFT4.png"></img>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="m-5">
              <img src="/SpartanNFT5.png"></img>
            </div>
            <div className="m-5">
              <img src="/SpartanNFT6.png"></img>
            </div>
            <div className="m-5">
              <img src="/SpartanNFT7.png"></img>
            </div>
            <div className="m-5">
              <img src="/SpartanNFT8.png"></img>
            </div>
          </div>
          <div>
            <h1 className="font-[Cinzel] font-regular text-white text-[28px] text-center">Spartan NFT Utility</h1>
            <p className="Font-[HkGrotesk] text-[18px] leading-[50px] mt-[20px] font-regular text-white text-center">
            Holding a Spartan NFT will afford you a plethora of utility, ranging from early access to the Web-Based mini game, Staking ability & access to exclusive free Airdrops.
            </p>
          </div>
          </ScrollAnimation>
        </div>

      </div>
      

    )
}