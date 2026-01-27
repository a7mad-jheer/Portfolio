"use client"
import { CiCircleList } from "react-icons/ci";
import {NavBar} from "../layout/page"
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";

const NavItems = [
    {id: 1 , icon: <IoIosMailUnread /> , },
    {id: 2 , icon: <FaFacebook />  },
    {id: 3 , icon: <AiFillInstagram /> ,  },
    {id: 4 , icon: <IoLogoWhatsapp /> ,   },
    {id: 5 , icon: <FaLinkedin /> ,       },
    {id: 6 , icon: <CiCircleList /> ,     }
]



export const Header = ({active} : {active:string }) => {
    return(
        <div className="fixed grid grid-cols-12 -top-5 right-0 z-100  w-full mt-6 text-center items-center bg-black/20 backdrop-blur-2xl xl:px-15 xl:py-5 p-5 ">

            <div className="col-span-4 ">
                <NavBar active={active}/>
            </div>
            
            <h1 className="text-lg md:text-3xl xl:text-6xl col-span-4  font-bold text-white m-0 text-center">
                Portfolio
            </h1>

            <div className="col-span-4">
            <div className="flex flex-wrap gap-2 justify-between items-center  z-10 ">     
            {NavItems.map(
                (item) => {
                    return ( 
                        <a key={item.id} className="hover:text-white  text-white/60 cursor-point text-2xl lg:text-4xl">
                            {item.icon}
                        </a>
                    )
                }
            )}
            
            </div>
        </div>


        </div>
    )
}

export default Header;