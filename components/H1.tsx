export default function H1({
    title,
    right,
}:{
    title: string,
    right: boolean
})   
{
    return(
        <h1 className={"font-[Cinzel] text-[40px] lg:text-[48px] text-white z-10" + (right ? " text-center lg:text-right" : " text-center lg:text-left") }>{title}</h1>
    )
}
H1.defaultProps = {
    right: false,
  }