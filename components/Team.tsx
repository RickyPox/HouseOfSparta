import H1 from "./H1"

export default function Team(){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col justify-end mt-[300px] space-y-20 relative z-10' id="Team">
          <div className='flex justify-center lg:justify-end'>
            <H1 title="Our Team"></H1>
          </div>
          <div className='flex flex-col justify-center lg:flex-row lg:justify-between space-y-20 lg:space-y-0'>
            <div className='flex flex-col space-y-5 items-center'>
              <img src='Team1.jpg' className='w-[300px] rounded-[30px]'></img>
              <p className='font-[Cinzel] font-bold text-[24px] text-white'>
                Reece Pinnock
              </p>
              <p className='font-[Roboto] text-[18px] text-white'>
              Head of Marketing
              </p>
            </div>
            <div className='flex flex-col space-y-5 items-center'>
              <img src='Team2.jpeg' className='w-[300px] rounded-[30px]'></img>
              <p className='font-[Cinzel] font-bold text-[24px] text-white'>
                Will Bunnis
              </p>
              <p className='font-[Roboto] text-[18px] text-white'>
              Head of Operations
              </p>
            </div>
            <div className='flex flex-col space-y-5 items-center'>
              <img src='Team3.png' className='w-[300px] rounded-[30px]'></img>
              <p className='font-[Cinzel] font-bold text-[24px] text-white'>
                Andrew baron
              </p>
              <p className='font-[Roboto] text-[18px] text-white text-center'>
              Head of Artwork & <br></br> Community Engagement
              </p>
            </div>
          </div>
        </div>

    )
}