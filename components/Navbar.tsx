/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Sparta', href: '#HouseSparta' },
  { name: 'Roadmap', href: '#Roadmap' },
  { name: 'Attributes', href: '#Attributes' },
  { name: 'Why Sparta?', href: '#WhySparta' },
  { name: 'Game', href: '#Game' },
  { name: 'Pillars', href: '#Pillars' },
  { name: 'Specs', href: '#Specs' },
  { name: 'Faq', href: '#Faq' },
  { name: 'Team & Partners', href: '#Team' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')  
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="w-screen px-2 lg:px-6 xl:px-40">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <img
                    className="block xl:hidden"
                    src="/Logo.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden xl:block"
                    src="/Logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        'text-white rounded-md font-[Cinzel] p-[10px] font-bold text-[14px] hover:bg-black/90 hover:scale-[1.2] transition-all ease-in-out duration-150 '
                        )}

                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='lg:flex space-x-5 hidden'>
                <a href="https://discord.gg/houseofsparta" target="_blank">        
                        <img src="Discord.svg"></img>
                    </a>
                    <a href="https://twitter.com/Houseofsparta_" target="_blank">
                        <img src="Twitter.svg"></img>
                    </a>    
                    <a href="https://www.instagram.com/houseofsparta_/">
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
                        ' text-white block px-3 py-2 rounded-md  font-[Cinzel] font-bold text-[14px]'
                  )}

                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className='flex px-3 space-x-5 py-2'>
              <a href="https://discord.gg/houseofsparta" target="_blank">        
                        <img src="Discord.svg"></img>
                    </a>
                    <a href="https://twitter.com/Houseofsparta_" target="_blank">
                        <img src="Twitter.svg"></img>
                    </a>    
                    <a href="https://www.instagram.com/houseofsparta_/">
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