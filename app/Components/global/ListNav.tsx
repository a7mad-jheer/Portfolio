"use client"
import { NavItem } from "@/config/navigation";
import { GoArrowRight } from "react-icons/go";



export const ListNav = ({data , setState , list} : {data:NavItem[] , setState :(value : boolean) => void , list:boolean}  ) => {
  return (
   <>
   {data.map((item:NavItem) => {
    return (
        <div
      key={item.id}
      className={` text-white/40 p-5 flex items-center justify-between font-semibold hover:bg-black hover:text-white`}
    >
      <a href={`${item.href}`}  className="flex gap-2 items-center" onClick={()=>setState(!list)}>
        <span className="text-2xl">{item.icon}</span>
        <span className="text-xl">{item.name}</span>
      </a >
      <div>
        <span className="text-3xl ">
          <GoArrowRight />
        </span>
      </div>
    </div>
    )
   })}
   </>
  );
};
