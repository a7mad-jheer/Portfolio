"use client"
import { IoHome } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaAngleDoubleDown , FaCommentDots , FaAngleDoubleUp , FaUserAlt } from "react-icons/fa";

const NavItems = [
    {id: 0 , icon : <FaAngleDoubleUp /> , href : "top"  },
    {id: 1 , icon: <IoHome /> , href : "hero" },
    {id: 2 , icon: <GrProjects /> , href : "project"  },
    {id: 3 , icon: <GiSkills /> , href : "skills"  },
    {id: 4 , icon: <FaUserAlt /> , href : "about"  },
    {id: 5 , icon: <FaCommentDots /> , href : "contact"  },
    {id: 6 , icon: <FaAngleDoubleDown /> , href : "bottom"  }
]

export const NavBar = ({active} : {active : string}) => {


    return (
        <div className=" h-full">
            <div className="flex flex-wrap gap-2 justify-between items-center z-10">     
            {NavItems.map(
                (item) => {
                    return (
                        <a key={item.id}  href={`#${item.href}`} className={` text-2xl lg:text-4xl hover:text-white ${active === item.href  ? "text-white" : "text-white/60"} cursor-pointer`}>
                            {item.icon}
                        </a>
                    )
                }
            )}
            
            </div>
        </div>
    )
}

export default NavBar;
//        <div className="fixed w-100 md:w-20 md:h-100 h-10   md:top-1/2 top-5 md:left-20 left-1/2 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-white/10 backdrop-blur-2xl z-100">

//            <div className="h-full flex md:flex-col gap-3 items-center justify-around text-white/20 md:text-4xl text-3xl">
//                        <a key={item.id} href={`#${item.href}`} className={`hover:text-white ${active === item.href  ? "md:text-white text-black/80" : "text-white/20"} transition-colors duration-300 text-lg`}>
