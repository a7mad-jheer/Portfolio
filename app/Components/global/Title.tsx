export const Title = ({text} : {text:string}) => {
    return (
        <div className= "relative text-white md:text-6xl text-3xl font-semibold text-center md:mb-5" >{text}
            {/* <div className={"absolute top-1/2 right-50 -translate-y-1/2 md:w-30 h-30 rounded-full bg-blue-950/20 backdrop-blur-2xl"}>
            </div>
            <div className={"absolute top-1/2 left-50 -translate-y-1/2 md:w-30 h-30 rounded-full bg-blue-950/20 backdrop-blur-2xl"}>
            </div> */}
        </div>
    )
}

export default Title;