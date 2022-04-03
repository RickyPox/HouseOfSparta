import Head from 'next/head'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HouseOfSparta from '../components/HouseOfSparta'
import Attributes from '../components/Attributes'
import GameOverview from '../components/Game'
import Pillars from '../components/Pillars'
import NFTSpecs from '../components/NFTSpecs'
import Team from '../components/Team'
import Partners from '../components/Partners'
import Spartans3D from '../components/3DSpartans'
import Milestones from '../components/Milestones'


export default function Home() {

  return (
    <div>
      <Head>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>House of Sparta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className='drop-shadow-[0_35px_35px_rgba(0,0,0,1)] relative z-10'>
          <video className='relative w-screen' autoPlay muted loop src="/Trailer.mp4"></video>
      </div>
      <div className='relative overflow-hidden w-screen'>
        {/* Bg Images */}

            <img src='/minataur.png' 
            className='absolute 
            scale-[3] top-[800px] left-[300px] 
            xl:scale-[2] xl:left-[500px] xl:top-[800px] opacity-30 z-10' data-aos="fade-in">
            </img>

      
          <img src='/medusa.png' 
          className='absolute 
          scale-[3] top-[4800px] right-[300px] 
          xl:scale-[2] xl:right-[600px] xl:top-[4900px] opacity-30 z-10'>
          </img>

          <img src='/titan.png' className=' absolute 
          scale-[3] top-[8500px] left-[100px] 
          xl:scale-[1.5] xl:left-[200px] xl:top-[8800px] opacity-30 z-10'>
          </img>

          <img src='/echidna.png' className=' absolute 
          scale-[3] top-[10500px] -left-[300px] 
          xl:scale-[1.5] xl:-left-[300px] xl:top-[11000px] opacity-30 z-10'>
          </img>

          <img src='/manticore.png' className=' absolute 
          scale-[2] top-[12300px] left-[300px] 
          xl:scale-[1] xl:left-[600px] xl:top-[12050px] opacity-30 z-10'>
          </img>

        <HouseOfSparta></HouseOfSparta>
        <Milestones></Milestones>
        <Attributes></Attributes>
        <Spartans3D></Spartans3D>
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
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}