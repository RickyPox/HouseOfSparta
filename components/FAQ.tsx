/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import ScrollAnimation from 'react-animate-on-scroll'
import H1 from './H1'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function FAQ() {
  return (
    <div className='2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col justify-end pt-[300px] relative z-10' id="Faq">
      <div className='flex justify-start'>
        <H1 title="FAQ"></H1>
      </div>
      <div>
        <div>
          <div>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
              <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                  <Disclosure as="div" className="py-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg py-[15px]">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                            <span className="font-[Cinzel] text-[24px] font-black text-white">
                            When do you launch?
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12 answer">
                          <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                            We are planning to launch Feb 1st.
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
              </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                          How many Nfts will there be?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                        Initially 4600 Spartans will be available to mint on Solana. 
                        </p>
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                        Later down the line, 4600 Persians will be available to mint.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            How much will it cost to mint one?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          OG mint price – 1.2 SOL. 
                        </p>
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          Fractal WL – 1.35 SOL. 
                        </p>
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          Public Sale – 1.5 SOL.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Will there be a white list or pre sale?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          Yes, there will be 500 OG members of the “generals corner” in our discord who will be able to mint for a reduced cost.
                        </p>
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          There will also be 25 FREE mint spaces for the most active members of our community.
                        </p>
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                        Furthermore, ALL fractal members will be eligible for the Fractal WL sale.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            How do I get a free mint?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          Keep an eye on our discord and Twitter competitions!
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Will they be different rarities?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          Yes, each trait/attribute will have different rarities. We will be uploading a rarity chart for each collection shortly after the mint date.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Will there be royalties?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                        Royalties will go to the community treasury, which will be used directly for collectible airdrops, floor burns, lotteries raids, and project development.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Is there an advantage in game if i buy an NFT?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                          Yes, you will start the game with a larger province and army with greater attributes.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </dl>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn='animate__fadeInLeftBig'>
            <dl className="mt-6 bg-black/50 px-6 rounded-lg">
                <Disclosure as="div" className="py-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg py-[15px]">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-[Cinzel] text-[24px] font-black text-white">
                            Are you donating to charity?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 answer ">
                        <p className="font-[Roboto] text-[18px] text-white leading-[30px] mt-[20px]">
                        Yes, 2% of the mint. We will be picking charities based off suggestions from our community.
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
  )
}