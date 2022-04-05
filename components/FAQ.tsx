/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import ScrollAnimation from 'react-animate-on-scroll'
import H1 from './H1'


export default function FAQ() {
  return (
    <div className=' flex flex-col justify-end pt-[100px] bg-[url("/FaqBg.png")] bg-cover bg-no-repeat relative' id="Faq">
      <div className="absolute -top-[165px]">
                    <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
                    <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
                </div>
                <div className="absolute -bottom-[165px]">
                    <div className="bg-gradient-to-b from-black/0 to-black h-[165px] w-screen"></div>
                    <div className="bg-gradient-to-b from-black to-black/0 h-[165px] w-screen"></div>
                </div>
      <div className='z-20 2xl:px-[300px] lg:px-[160px] px-[20px] pb-[100px]'>
      <div className='flex justify-start'>
        <H1 title="FAQ"></H1>
      </div>
      <div>
        <div>
          <div>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
              <dl className="mt-6 bg-black/90 px-6 rounded-lg">
                  <Disclosure as="div" className="py-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg py-[15px]">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                            <span className="font-[Cinzel] text-[24px] font-black text-white">
                            When do you launch?
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <img src="/right-arrow.png" className='rotate-90 w-[20px]'></img>
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12 answer">
                          <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">
                            We are planning to launch Feb 1st.
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
              </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig'>
            <dl className="mt-6 bg-black/90 px-6 rounded-lg">
                <Disclosure as="div" className="py-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                          How many NFTs will there be?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                          <img src="/right-arrow.png" className='rotate-90 w-[20px]'></img>
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">
                        Initially 4600 Spartans will be available to mint on Solana
                        </p>
                        <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">              
                        Later down the line, 4600 Persians will be available to mint
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
            <dl className="mt-6 bg-black/90 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Will there be royalties?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                          <img src="/right-arrow.png" className='rotate-90 w-[20px]'></img>
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">
                        Royalties will go to the community treasury, which will be used directly for collectible airdrops, floor burns, lotteries raids, and project development.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
            <dl className="mt-6 bg-black/90 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Is there an advantage in game if i buy an NFT?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                          <img src="/right-arrow.png" className='rotate-90 w-[20px]'></img>
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">
                          Yes, you will start the game with a larger province and army with greater attributes
                        </p>

                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig'>
            <dl className="mt-6 bg-black/90 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Where can I buy a Spartan NFT?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                          <img src="/right-arrow.png" className='rotate-90 w-[20px]'></img>
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">
                          We were the first ever launch on fractal, you can also head over to their site to pick up Spartans and airdrops on secondary – <a href='https://www.fractal.is/houseofsparta' className='text-[#FF1900]' target="_blank">https://www.fractal.is/houseofsparta</a>
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
            <dl className="mt-6 bg-black/90 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Do Spartan NFTs have utility?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                          <img src="/right-arrow.png" className='rotate-90 w-[20px]'></img>
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">
                        Absolutely, they entitle you to raids and airdrops that are currently ongoing! They will also grant you access to the game and a later ability to stake your NFTs.  
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig'>
            <dl className="mt-6 bg-black/90 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            How will NFTs be used in game?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                          <img src="/right-arrow.png" className='rotate-90 w-[20px]'></img>
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[HkGrotesk] text-[18px] text-white leading-[30px] mt-[20px]">
                          Holding a Spartan or a Persian in your wallet will grant you access to the game. The rarer your NFT the better your starting position in the game will be. Airdrops will also confer small increases in passive abilities in game.   
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}