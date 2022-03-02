import { useState } from "react"


export default function Spartans(){

    const [currImage, setCurrImage] = useState(1)
    const [currImage2, setCurrImage2] = useState(1)
    const [currImage3, setCurrImage3] = useState(1)
    const [currImage4, setCurrImage4] = useState(1)
    const [currImage5, setCurrImage5] = useState(1)
    const [currImage6, setCurrImage6] = useState(1)

    const onClickHandlerPlus = () => {
        if (currImage < 7 ) {
            setCurrImage(currImage + 1)
        }else{
            setCurrImage (1)
        }
    }

    const onClickHandlerMinus = () => {
        if (currImage > 1 ) {
            setCurrImage(currImage - 1)
        }else{
            setCurrImage (7)
        }
    }
    const onClickHandlerPlus2 = () => {
        if (currImage2 < 7 ) {
            setCurrImage2(currImage2 + 1)
        }else{
            setCurrImage2 (1)
        }
    }

    const onClickHandlerMinus2 = () => {
        if (currImage2 > 1 ) {
            setCurrImage2(currImage2 - 1)
        }else{
            setCurrImage2 (7)
        }
    }
    const onClickHandlerPlus3 = () => {
        if (currImage3 < 7 ) {
            setCurrImage3(currImage3 + 1)
        }else{
            setCurrImage3 (1)
        }
    }

    const onClickHandlerMinus3 = () => {
        if (currImage3 > 1 ) {
            setCurrImage3(currImage3 - 1)
        }else{
            setCurrImage3 (7)
        }
    }
    const onClickHandlerPlus4 = () => {
        if (currImage4 < 7 ) {
            setCurrImage4(currImage4 + 1)
        }else{
            setCurrImage4 (1)
        }
    }

    const onClickHandlerMinus4 = () => {
        if (currImage4 > 1 ) {
            setCurrImage4(currImage4 - 1)
        }else{
            setCurrImage4 (7)
        }
    }
    const onClickHandlerPlus5 = () => {
        if (currImage5 < 7 ) {
            setCurrImage5(currImage5 + 1)
        }else{
            setCurrImage5 (1)
        }
    }

    const onClickHandlerMinus5 = () => {
        if (currImage5 > 1 ) {
            setCurrImage5(currImage5 - 1)
        }else{
            setCurrImage5 (7)
        }
    }

    return(
        <div className="flex flex-col justify-center relative z-10 items-center space-y-20">
            <div className="flex items-center justify-center">
                <a onClick={onClickHandlerMinus}><img className="w-[40px] rotate-180 cursor-pointer" src="/right-arrow.png"  id="left"></img></a>
                <img className="w-1/2" src={"/360/6/" + currImage + ".png"}/>
                <a onClick={onClickHandlerPlus}><img className="w-[40px] cursor-pointer" src="/right-arrow.png"  id="right"></img></a>
            </div>

            <div className="flex items-center justify-center">
                <a onClick={onClickHandlerMinus2}><img className="w-[40px] rotate-180 cursor-pointer" src="/right-arrow.png"  id="left"></img></a>
                <img className="w-1/2" src={"/360/5/" + currImage2 + ".png"}/>
                <a onClick={onClickHandlerPlus2}><img className="w-[40px] cursor-pointer" src="/right-arrow.png"  id="right"></img></a>
            </div>

            <div className="flex items-center justify-center">
                <a onClick={onClickHandlerMinus3}><img className="w-[40px] rotate-180 cursor-pointer" src="/right-arrow.png"  id="left"></img></a>
                <img className="w-1/2" src={"/360/4/" + currImage3 + ".png"}/>
                <a onClick={onClickHandlerPlus3}><img className="w-[40px] cursor-pointer" src="/right-arrow.png"  id="right"></img></a>
            </div>

            <div className="flex items-center justify-center">
                <a onClick={onClickHandlerMinus4}><img className="w-[40px] rotate-180 cursor-pointer" src="/right-arrow.png"  id="left"></img></a>
                <img className="w-1/2" src={"/360/3/" + currImage4 + ".png"}/>
                <a onClick={onClickHandlerPlus4}><img className="w-[40px] cursor-pointer" src="/right-arrow.png"  id="right"></img></a>
            </div>

            <div className="flex items-center justify-center">
                <a onClick={onClickHandlerMinus5}><img className="w-[40px] rotate-180 cursor-pointer" src="/right-arrow.png"  id="left"></img></a>
                <img className="w-1/2" src={"/360/2/" + currImage5 + ".png"}/>
                <a onClick={onClickHandlerPlus5}><img className="w-[40px] cursor-pointer" src="/right-arrow.png"  id="right"></img></a>
            </div>

        </div>
    )
}