import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"
import H2 from "./H2"
export default function NFTSpecs(){
    return (
        <div className='flex flex-col justify-end mt-[300px] relative z-10' id="Specs">
          <div className='2xl:px-[300px] lg:px-[160px] px-[20px] '>
            <ScrollAnimation animateOnce animateIn="animate__rotateInUpLeft">
              <div className='flex justify-start'>
                <H1 title="NFT SPECS"></H1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__slideInDown">
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
              <div className='lg:w-6/12'>
                <H2 title='Prizes'></H2>
                <p className='font-[Roboto] text-[18px] text-white leading-[30px] mt-[25px]'>
                  Your Spartan doubles as your membership badge and grants access to member-only benefits, 
                  plans include airdrops of collectables, weapons, and armour as well as 10 mythical Gods up for grabs!
                </p>
              </div>  
              <div className='-mb-[100px]'>
                <img src='Prizes.png'></img>
              </div>
              
            </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateOnce animateIn="animate__slideInDown">
          <div className=' 2xl:px-[300px] lg:px-[160px] px-[20px] flex justify-between items-center w-screen bg-[#FF1900]'>
            <div className='lg:w-6/12 py-[20px]'>
              <h2 className='"font-[Roboto] text-[24px] font-medium text-black z-10"'> Raids</h2>
              <p className='font-[Roboto] text-[18px] text-white leading-[30px] mt-[25px]'>
                A rich and prosperous Sparta allows us to carry out more raids on other Blue Chip NFTs. 
                We will be plundering NFTs on Solana and distributing them to our loyal holders, the spoils of war will be plentiful. 
                Spartan raids will occur on a weekly basis from the mint date and holders can expect rewards within the first week and onwards.
              </p>
            </div>
          </div>
          </ScrollAnimation>
        </div>

    )
}