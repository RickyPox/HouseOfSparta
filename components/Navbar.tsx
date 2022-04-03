/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
const navigation = [
  { name: 'Sparta', href: '#HouseSparta' },
  { name: 'Roadmap', href: '#Roadmap' },
  { name: 'Attributes', href: '#Attributes' },
  { name: '3D Models', href: '#Models' },
  { name: 'Pillars', href: '#Pillars' },
  { name: 'Specs', href: '#Specs' },
  { name: 'Faq', href: '#Faq' },
  { name: 'Team & Partners', href: '#Team' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')  
}


export default function Navbar() {
  
  
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()   
    window.addEventListener("scroll", changeBackground)
  })

  return (
    
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={"w-screen px-2 lg:px-6 xl:px-40 lg:fixed z-40 navbar " + (navbar ? "bg-[#141414]" : "bg-transparent")} >
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 right-[10px] flex items-center lg:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black/90 focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between ">
                <div className="flex-shrink-0 flex items-center">
                  <a href="#"><img
                    className="block"
                    src="/Logo.png"
                    alt="HouseOfSparta"
                  /></a>

                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex xl:space-x-10 text-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        'text-white rounded-md font-[Cinzel] p-[10px] font-regular text-[14px] hover:bg-black/90 hover:scale-[1.2] transition-all ease-in-out duration-150 '
                        )}

                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='lg:flex space-x-5 hidden'>
                <a className='hover:bg-black/90 hover:scale-[1.2] rounded-md p-[10px] transition-all ease-in-out duration-150' href="https://discord.gg/houseofsparta" target="_blank">        
                        <img src="Discord.svg"></img>
                    </a>
                    <a className='hover:bg-black/90 hover:scale-[1.2] rounded-md p-[10px] transition-all ease-in-out duration-150' href="https://twitter.com/Houseofsparta_" target="_blank">
                        <img src="Twitter.svg"></img>
                    </a>    
                    <a className='hover:bg-black/90 hover:scale-[1.2] rounded-md p-[10px] transition-all ease-in-out duration-150' href="https://www.instagram.com/houseofsparta_/" target="_blank">
                        <img src="Instagram.svg"></img>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                        ' text-white block px-3 py-2 rounded-md  font-[Cinzel] font-regular text-[14px] hover:bg-black/90 transition-all ease-in-out duration-150'
                  )}

                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className='flex px-3 space-x-5 py-2'>
              <a className='hover:bg-black/90 hover:scale-[1.2] rounded-md p-[10px] transition-all ease-in-out duration-150' href="https://discord.gg/houseofsparta" target="_blank">        
                        <img src="Discord.svg"></img>
                    </a>
                    <a className='hover:bg-black/90 hover:scale-[1.2] rounded-md p-[10px] transition-all ease-in-out duration-150' href="https://twitter.com/Houseofsparta_" target="_blank">
                        <img src="Twitter.svg"></img>
                    </a>    
                    <a className='hover:bg-black/90 hover:scale-[1.2] rounded-md p-[10px] transition-all ease-in-out duration-150' href="https://www.instagram.com/houseofsparta_/" target="_blank">
                        <img src="Instagram.svg"></img>
                    </a>
                </div>
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
