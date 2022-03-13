
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

        </div>
    </div>
  )
}