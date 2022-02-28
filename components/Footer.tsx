import ScrollAnimation from "react-animate-on-scroll"

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

export default function Footer(){
    return (
        <div className='py-[20px] flex flex-col lg:justify-start justify-center items-center lg:items-start 2xl:px-[300px] lg:px-[160px] px-[20px] bg-black relative z-10'>  
            <div className="flex-shrink-0 flex">
                <img
                    className="block"
                    src="/Logo.png"
                    alt="HouseOfSparta"
                />
            </div>
            <div className=" hidden lg:block w-full py-[50px] border-b-[1px] border-white">
                <div className="flex space-x-10">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        'text-white rounded-md p-[10px] font-[Cinzel] font-bold text-[14px] hover:bg-[#FF1900]/10 hover:scale-[1.2] transition-all ease-in-out duration-150'
                        )}
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
            </div>
            
            <div className=" lg:w-full flex flex-col lg:flex-row lg:justify-between justify-center items-center py-[20px] space-y-10 lg:space-y-0">
                <div>
                <p className="font-[Roboto] font-light text-[14px] text-white">
                    © 2022 House Of Sparta.  All Rights Reserved
                </p>
                </div>
                <div className="flex flex-row justify-end space-x-10 w-1/2 lg:w-2/12]"> 
                    <a className="hover:bg-[#FF1900]/10 hover:scale-[1.2] transition-all ease-in-out duration-150 rounded-md p-[10px]" href="https://discord.gg/houseofsparta" target="_blank">        
                        <img src="Discord.svg"></img>
                    </a>
                    <a className="hover:bg-[#FF1900]/10 hover:scale-[1.2] transition-all ease-in-out duration-150 rounded-md p-[10px]" href="https://twitter.com/Houseofsparta_" target="_blank">
                        <img src="Twitter.svg"></img>
                    </a>    
                    <a className="hover:bg-[#FF1900]/10 hover:scale-[1.2] transition-all ease-in-out duration-150 rounded-md p-[10px]" href="https://www.instagram.com/houseofsparta_/">
                        <img src="Instagram.svg"></img>
                    </a>
                </div>
            </div>
            </div>

    )
}