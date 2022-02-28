import H2 from "./H2"

export default function RoadmapPhase({
    title,
    text,
    img,
    current,
}:{
    title: string;
    text: string;
    img: string;
    current: boolean;
}){
    return(
        <div className='flex flex-col lg:flex-row items-center lg:space-x-10  space-y-10 lg:space-y-0'>
              <img src={img} className={'w-[90px] img-box ' + (current ? "lg:scale-150 scale-100" : "scale-100")}></img>
              <div className={"phase-description bg-black/90 py-10 px-10 rounded-xl " + (current ? "lg:opacity-100 opacity-100" : "lg:opacity-0 opacity-100")}>
                <H2 title={title}></H2>
                <p className='font-[Roboto] text-[18px] text-white leading-[30px] mt-[10px]'>
                 {text}
                </p>
              </div>
            </div>
    )
}

RoadmapPhase.defaultProps = {
    current: false,
  }