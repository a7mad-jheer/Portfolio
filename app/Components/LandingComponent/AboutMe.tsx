import { Title } from "../global/Title";

const AboutMeText = [
    {id:0 , text: "I’m a Frontend Developer passionate about building modern web interfaces. I focus on creating clean, responsive, and user-friendly experiences using React and Next.js."},
    {id:1 , text: "I enjoy turning ideas into simple and efficient solutions. Attention to detail, performance, and usability is my priority in every project I build."},
    {id:2 , text: "I’m always eager to learn new technologies and improve my skills. If you’re looking for a developer to bring your ideas to life, let’s work together!"},
]
export const AboutMe = () => {
return (
    <div className="relative md:my-20 md:py-20 py-10 px-5 border-y-2">
        <Title text="About ME"/>

        <div className="z-15 flex flex-col md:flex-row justify-center gap-2 md:my-20 my-10">
                {AboutMeText.map((item) => {
                    return (
                        <p key={item.id} className="text-md text-white md:max-w-1/3 mx-auto bg-black/20 backdrop-blur-2xl py-5 px-3 text-center">
                            {item.text}
                </p>
                    )
                })}
                
                
        </div>

        <p className="absolute bottom-0 left-1/2  -translate-x-1/2 text-white/60 text-xs text-center">Clean code • Responsive design • Performance-focused</p>
    </div>
)
}

export default AboutMe;
