import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"


export default function Milestones(){


    return(
        <div>
            <div className=" pt-[100px] mt-[200px] flex flex-col justify-center items-center relative space-y-[100px] bg-[url('/RoadmapBg.png')] bg-cover bg-no-repeat"  id="Roadmap">
                <div className="absolute -top-[165px]">
                    <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
                    <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
                </div>
                <div className="absolute -bottom-[165px]">
                    <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
                    <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
                </div>
                <ScrollAnimation animateOnce animateIn="animate__fadeIn" className="z-20">
                    <div className="flex justify-between items-center 2xl:px-[300px] lg:px-[160px] px-[20px]">
                        <div className="w-1/2">
                            <H1 title="Roadmap"></H1>
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[Cinzel] font-regular text-[20px] lg:text-[20px] text-white z-10">DISCOVER A ROADMAP UNLIKE ANY OTHER – FOCUSED ON COMMUNITY, UTILITY, AND INNOVATION.</h1>
                        </div>
                    </div>
                </ScrollAnimation>
                    {/* <!-- component --> */}
                <div className="relative wrap p-10 h-full w-full z-20">
                    <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                        <div className="w-[2px] absolute roadmapLine h-full left-[50%]"></div>
                    </ScrollAnimation>
                    <div className="container mx-auto w-full h-full">
                        {/* Phase 0 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
                        <div className="mb-8 flex justify-between w-full h-[300px]">  
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-[#FF1900] shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semiregular text-lg font-[Cinzel] text-white">&#10004;</h1>
                            </div>                    
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black milestone ">
                                <h1 className="text-white font-[Cinzel] font-regular text-[30px] mb-[30px]">Phase 1 Q4 2021</h1>
                                <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] ">                                       
                                &#10004; Concept art <br></br>
                                &#10004; Game concepts <br></br>
                                &#10004; Website <br></br>
                                &#10004; Roadmap 
                                </p>
                            </div>                            
                        </div>
                        </ScrollAnimation>

                        {/* Phase 1 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
                        <div className="mb-8 flex flex-row-reverse justify-between w-full h-[300px] ">
                            <div className="order-1 w-5/12"></div>  
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-[#FF1900]   shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semiregular text-lg font-[Cinzel] text-white">&#10004;</h1>
                            </div>                           
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black milestone text-right ">
                                <h1 className="text-white font-[Cinzel] font-regular text-[30px] mb-[30px]">Phase 2 Q1 2022</h1>
                                <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] ">                                       
                                &#10004; Project Litepaper <br></br>
                                &#10004; 4,600 Spartan Army NFT Launch on Fractal - Sold Out <br></br>
                                &#10004; Unveil Gaming Studio Partner iLogos <br></br>
                                &#10004; Mythical Beasts Community Airdrop <br></br>
                                &#10004; Greek Gods Community Airdrop
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        {/* Phase 2 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
                        <div className="mb-8 flex justify-between w-full h-[300px]">  
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-gray-500 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semiregular text-lg font-[Cinzel] text-white">3</h1>
                            </div>
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black  milestone ">
                                <h1 className="text-white font-[Cinzel] font-regular text-[30px] mb-[30px]">Phase 3 Q2 2022 </h1>
                                <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] ">                                       
                                    - Seed Fundraising Round  <br></br>
                                    - Electrum NFT Staking Go-Live  <br></br>
                                    - Expand Core Team
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        {/* Phase 3 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
                        <div className="mb-8 flex flex-row-reverse justify-between w-full h-[300px] ">
                            <div className="order-1 w-5/12"></div>  
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-gray-500 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semiregular text-lg font-[Cinzel] text-white">4</h1>
                            </div>
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black  milestone text-right ">
                                <h1 className="text-white font-[Cinzel] font-regular text-[30px] mb-[30px]">Phase 4 Q3/Q4 2022</h1>
                                <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] ">                                       
                                - Drachma IDO <br></br>
                                - 4,600 Persian Army NFT Launch on Fractal <br></br>
                                - Launch of Web Based Mini Game via Fractal
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>

                        {/* Phase 4 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
                        <div className="mb-8 flex justify-between w-full h-[300px]">  
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-gray-500 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semiregular text-lg font-[Cinzel] text-white">5</h1>
                            </div>
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black  milestone ">
                                <h1 className="text-white font-[Cinzel] font-regular text-[30px] mb-[30px]">Phase 5 - 2023+ </h1>
                                <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] ">                                       
                                    - Continual Development on Web Game <br></br>
                                    - Full Scale PVP / PVE Downloadable Game
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}