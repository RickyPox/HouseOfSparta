import ScrollAnimation from "react-animate-on-scroll"
import H1 from "./H1"


export default function Milestones(){


    return(
        <div>
            <div className=" pt-[300px] flex flex-col justify-center items-center z-10 relative space-y-[100px]"  id="Roadmap">
                <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                    <H1 title="Roadmap & Utility"></H1>
                </ScrollAnimation>
                    {/* <!-- component --> */}
                <div className="relative wrap p-10 h-full w-full">
                    <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                        <div className="w-[2px] absolute roadmapLine h-full left-[50%]"></div>
                    </ScrollAnimation>
                    <div className="container mx-auto w-full h-full">
                        {/* Phase 0 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
                        <div className="mb-8 flex justify-between w-full h-[300px]">  
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-[#FF1900] shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg font-[Cinzel] text-white">&#10004;</h1>
                            </div>                    
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black milestone ">
                                <h1 className="text-white font-[Cinzel] font-bold text-[30px] mb-[30px]">Phase 0 Q3-4 2021</h1>
                                <p className="font-[Roboto] text-[18px] text-white leading-[30px] ">                                       
                                    - Concept art <br></br>
                                    - Game concepts <br></br>
                                    - Website <br></br>
                                    - Roadmap 
                                </p>
                            </div>                            
                        </div>
                        </ScrollAnimation>

                        {/* Phase 1 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
                        <div className="mb-8 flex flex-row-reverse justify-between w-full h-[300px] ">
                            <div className="order-1 w-5/12"></div>  
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-[#FF1900]   shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg font-[Cinzel] text-white">&#10004;</h1>
                            </div>                           
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black milestone text-right ">
                                <h1 className="text-white font-[Cinzel] font-bold text-[30px] mb-[30px]">Phase 1 Q1 2022</h1>
                                <p className="font-[Roboto] text-[18px] text-white leading-[30px] ">                                       
                                - 1st NFT offering <br></br>
                                - Litepaper <br></br>
                                - Marketplace listings 
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        {/* Phase 2 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
                        <div className="mb-8 flex justify-between w-full h-[300px]">  
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-gray-500 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg font-[Cinzel] text-white">3</h1>
                            </div>
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black  milestone ">
                                <h1 className="text-white font-[Cinzel] font-bold text-[30px] mb-[30px]">Phase 2 Q2 2022 </h1>
                                <p className="font-[Roboto] text-[18px] text-white leading-[30px] ">                                       
                                    - Mythical creature / Gods airdrops <br></br>
                                    - Game studio announced <br></br>
                                    - VC investment <br></br>
                                    - Grow the team <br></br>
                                    - 2nd NFT offering 
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        {/* Phase 3 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
                        <div className="mb-8 flex flex-row-reverse justify-between w-full h-[300px] ">
                            <div className="order-1 w-5/12"></div>  
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-gray-500 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg font-[Cinzel] text-white">4</h1>
                            </div>
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black  milestone text-right ">
                                <h1 className="text-white font-[Cinzel] font-bold text-[30px] mb-[30px]">Phase 3 Q3 2022</h1>
                                <p className="font-[Roboto] text-[18px] text-white leading-[30px] ">                                       
                                - MVP released  <br></br>
                                - Token release  <br></br>
                                - NFT staking 
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>

                        {/* Phase 4 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
                        <div className="mb-8 flex justify-between w-full h-[300px]">  
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-gray-500 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg font-[Cinzel] text-white">5</h1>
                            </div>
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black  milestone ">
                                <h1 className="text-white font-[Cinzel] font-bold text-[30px] mb-[30px]">Phase 4 Q4 2022  </h1>
                                <p className="font-[Roboto] text-[18px] text-white leading-[30px] ">                                       
                                    - PVP game modes released <br></br>
                                    - Land sales  <br></br>
                                    - Continue development of game play / mechanics  <br></br>
                                    - Map updates 
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>

                        {/* Phase 5 */}
                        <ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
                        <div className="mb-8 flex flex-row-reverse justify-between w-full h-[300px] ">
                            <div className="order-1 w-5/12"></div>  
                            <div className="z-20 flex items-center order-1 bg-black border-[3px] border-gray-500 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg font-[Cinzel] text-white">6</h1>
                            </div>
                            <div className="order-1 bg-black/50 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-125 hover:z-30 hover:bg-black  milestone text-right ">
                                <h1 className="text-white font-[Cinzel] font-bold text-[30px] mb-[30px]">Phase 5 2023 and beyond </h1>
                                <p className="font-[Roboto] text-[18px] text-white leading-[30px] ">                                       
                                - Season 2 of PVP/PVE   <br></br>
                                - 2nd round of investment  <br></br>
                                - Begin development of mobile version 
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