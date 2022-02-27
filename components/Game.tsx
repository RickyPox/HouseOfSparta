import H1 from "./H1"

export default function GameOverview(){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col mt-[300px] space-y-20' id="Game">
          <div className='relative flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center'> 
            <H1 title='GAME OVERVIEW'></H1>
            <div className='h-[2px] lg:w-1/2 bg-white'></div>
          </div>
          <div className='flex flex-col space-y-2 overflow-hidden'>
            <div className='flex relative z-10 justify-around space-x-2 '>
              <img src='/game1.png' className='w-7/12'></img>
              <img src='/game2.png' className='w-5/12'></img>
            </div>
            <div className='flex relative z-10 justify-around '>
              <img src='/game3.png' className='w-full'></img>
            </div>
            <div className='flex relative z-10 justify-around space-x-2 '>
              <img src='/game4.png' className='w-6/12'></img>
              <img src='/game5.jpeg' className='w-6/12'></img>
            </div>
            <div className='flex relative z-10 justify-around space-x-2 '>
              <img src='/game6.png' className='w-7/12'></img>
              <img src='/game7.png' className='w-5/12'></img>
            </div>
            <div className='flex relative z-10 justify-around '>
              <img src='/game8.jpeg' className='w-full'></img>
            </div>
          </div>
        </div>

    )
}