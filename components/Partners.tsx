import H1 from "./H1"

export default function Partners(){
    return (
      <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col justify-end mt-[300px] relative z-10'>
        <div className='flex justify-center lg:justify-end'>
          <div className='flex flex-col space-y-10'>
          <h1 className='font-[Uncial-Antiqua] text-white text-[24px] text-center lg:text-right'>Identity Verification By</h1>
          <img src='/Civic.png' className='w-[500px]'></img>
          </div>
        </div>
      
          <div className='flex flex-col space-y-10 justify-center items-center lg:items-start mt-[200px]'>
          <h1 className='font-[Uncial-Antiqua] text-white md:text-[36px] text-[30px] text-center lg:text-left'> TECHNOLOGICAL PARTNER</h1>
          <img src='/Queppelin.png' className=' w-[300px] md:w-[500px]'></img>
          </div>

        <div className='flex flex-col justify-start mt-[200px]'>
          <div className='space-y-10 lg:w-8/12'>
            <H1 title='WE’VE WORKED WITH SOME OF THE BIGGEST BRANDS'></H1>
          </div>
        <div className='flex flex-col md:grid md:grid-rows-2 md:justify-items-center items-center mt-[80px] '></div>
          <div className='flex flex-col md:grid md:grid-cols-3 md:justify-items-center items-center space-y-20 md:space-y-0'>
            <img src='Bmw.png'></img>
            <img src='Facebook.png'></img>
            <img src='Unilever.png'></img>
          </div>
          <div className='flex flex-col md:grid md:grid-cols-2 md:justify-items-center items-center mt-[80px] space-y-20 md:space-y-0'>
            <img src='Google.png'></img>
            <img src='Nissan.png'></img>
          </div>
        </div>
        <div className='flex flex-col justify-start mt-[200px]'>
          <p className='font-[Roboto] italic text-[#FF1900] font-[24px]'>as seen on</p>
          <img src='Notfin.png' className='w-[440px]'></img>
        </div>
      </div>

    )
}