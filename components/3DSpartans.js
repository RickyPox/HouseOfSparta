<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
import { useState } from "react"
import H1 from "./H1"



export default function Spartans3D(){

    const [currImage, setCurrImage] = useState(1)
const onClickHandlerPlus = () => {
    if (currImage < 3 ) {
        setCurrImage(currImage + 1)
    }else{
        setCurrImage (1)
    }
}

const onClickHandlerMinus = () => {
    if (currImage == 3 ) {
        setCurrImage(2)
    }else if (currImage == 2){
        setCurrImage(1)
    }else{
        setCurrImage(3)
    }
}

    return(
        <div className="2xl:px-[300px] lg:px-[160px] px-[20px] flex flex-col justify-center relative z-10 items-center pt-[300px]" id="Models">
            <H1 title="SPARTAN MODELS"></H1>
            <div className="flex justify-center items-center">
                <a onClick={onClickHandlerMinus}><img className="w-[40px] rotate-180 cursor-pointer" src="/right-arrow.png"  id="left"></img></a>
                    <model-viewer  src={"/3D/" + currImage + ".glb"} alt="3D Spartan Model" shadow-intensity="1" loading="eager" camera-controls auto-rotate></model-viewer>
                <a onClick={onClickHandlerPlus}><img className="w-[40px] cursor-pointer" src="/right-arrow.png"  id="right"></img></a>
            </div>
        </div>
    )
}