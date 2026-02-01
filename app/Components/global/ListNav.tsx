import { NavItem } from "@/config/navigation";
import { GoArrowRight } from "react-icons/go";

type ListNavProps = {
    data : NavItem[]
}

export const ListNav = ({data} : ListNavProps) => {
  return (
   <>
   {data.map((item:NavItem) => {
    return (
        <div
      key={item.id}
      className={` text-white/40 p-5 flex items-center justify-between font-semibold hover:bg-black hover:text-white`}
    >
      <a href={item.href} target="_blank" rel="noopener noreferrer"   className="flex gap-2 items-center">
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
