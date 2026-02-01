import Link from "next/link";
import Image from "next/image";
import { CardInfo } from "@/config/navigation";

export const CardProject = ({ CardData }: { CardData: CardInfo[] }) => {
  return (

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 rounded-2xl bg-transparent ">
        {CardData.map((data) => {
          return (
            <div
              key={data.id}
              className="relative backdrop-blur-2xl md:w-1/3  group [perspective:1000px]  "
            >
              <div
                className="transition-transform group-hover:[transform:rotateX(40deg)] transform-style-preserve-3d duration-300"
              >
                <div className="relative w-full h-72 z-10">
                  <Image
                    src={data.img}
                    alt=""
                    className="object-cover object-top"
                    fill
                  />
                </div>

                <div className="text-white/60 p-2 space-y-2 bg-black/20">
                  <h1 className="text-center text-3xl">{data.title}</h1>
                  <p className="text-center">{data.description}</p>
                </div>
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center  z-0 ">
                <Link
                  className=" text-white/70 text-xl font-semibold "
                  href={data.href}
                >
                  Go To site
                </Link>
              </div>
            </div>
          );
        })}
      </div>

  );
};

export default CardProject;
