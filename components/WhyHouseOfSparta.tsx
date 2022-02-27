import H1 from "./H1"
import H2 from "./H2"

export default function WhyHouseOfSparta(){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col space-y-20 mt-[300px]' id="WhySparta">
            <div className='flex items-center justify-center relative z-10'>
              <H1 title='WHY HOUSE OF SPARTA?'></H1>
            </div>
            <div className='flex lg:flex-row flex-col lg:justify-between justify-center relative z-10 space-y-20 lg:space-y-0'>

              <div className='flex flex-col items-center  space-y-5 lg:space-y-10 lg:w-1/3'>
                <img src='/money-bag.png' className='w-[60px] img-box'></img>
                <div className='phase-description flex flex-col items-center opacity-1 lg:opacity-0 bg-black/90 py-10 px-10 rounded-xl'>
                  <H2 title="Play to Earn"></H2>
                  <p className='font-[Roboto] text-[18px] text-white leading-[30px] md:px-[40px] px-[10px] text-center mt-[10px]'>
                    In this new disruptive model of gaming we reward players for their time and commitment to the game.
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center  space-y-5 lg:space-y-10 lg:w-1/3'>
                <img src='/people.png' className='w-[100px] img-box'></img>
                <div className='phase-description flex flex-col items-center opacity-1 lg:opacity-0 bg-black/90 py-10 px-10 rounded-xl'>
                  <H2 title="Community Led"></H2>
                  <p className='font-[Roboto] text-[18px] text-white leading-[30px] md:px-[40px] px-[10px] text-center mt-[10px]'>
                    Owning a House of Sparta NFT grants users access to voting rights to how this game is developed. A game built by the community, for the community.
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center  space-y-5 lg:space-y-10 lg:w-1/3'>
                <img src='/globe.png' className='w-[70px] img-box'></img>
                <div className='phase-description flex flex-col items-center opacity-1 lg:opacity-0 bg-black/90 py-10 px-10 rounded-xl'>
                  <H2 title="Integrated Gaming Experience"></H2>
                  <p className='font-[Roboto] text-[18px] text-white leading-[30px] md:px-[40px] px-[10px] text-center mt-[10px]'>
                  House of Sparta is envisioned to be one of the most revolutionary NFT gaming ecosystems. Check-out the Litepaper page for the upcoming game features.
                  </p>
                </div>
              </div>
            </div>
          </div>

    )
}