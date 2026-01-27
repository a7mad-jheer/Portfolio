import Image from "next/image";
import Title from "../global/Title";
import Description from "../global/Description";
import Link from "next/link";

const CardInfoNext = [
  {
    id: 0,
    img: "/WhiteCollar.png",
    title: "WhitCollar Project",
    description:
      "WhiteCollar is a professional corporate website focused on clean layouts, clear content structure, and responsive design, built using Next.js and Tailwind CSS.",
    href: "",
  },
  {
    id: 1,
    img: "/NetGrid-image.png",
    title: "NetGrid Project",
    description:
      "NetGrid is a modern web platform built with Next.js and Tailwind CSS, designed to provide a clean, responsive, and user-friendly experience while showcasing interactive layouts and smooth navigation.",
    href: "",
  },

  {
    id: 2,
    img: "/TodoList.png",
    title: "To-Do App Project",
    description:
      "A simple and efficient Todo App built with Next.js and Tailwind CSS, designed to help users manage their tasks effectively with a clean and user-friendly interface.",
    href: "https://to-do-list-delta-six-53.vercel.app/",
  },
];

const CardInfoHTMLJS = [
  {
    id: 0,
    img: "/PersonalProject1.png",
    title: "Personal-Dashboard",
    description:
      "A simple and efficient Todo App built with Next.js and Tailwind CSS, designed to help users manage their tasks effectively with a clean and user-friendly interface.",
    href: "https://a7mad-jheer.github.io/personal-dashboard/",
  },

  {
    id: 1,
    img: "/Codevia-Medical.png",
    title: "Codevia-Medical",
    description:
      "A simple and efficient Todo App built with Next.js and Tailwind CSS, designed to help users manage their tasks effectively with a clean and user-friendly interface.",
    href: "https://a7mad-jheer.github.io/Codevia-Medical/",
  },
];

const CardInfoJS = [
  {
    id: 0,
    img: "/CodeSpaceInvades.png",
    title: "Code Space Invades",
    description:
      "A simple and efficient Todo App built with Next.js and Tailwind CSS, designed to help users manage their tasks effectively with a clean and user-friendly interface.",
    href: "https://a7mad-jheer.github.io/Space-Invaders/",
  },

  {
    id: 1,
    img: "/CodeDoodleJump1.png",
    title: "Code Doodle Jump",
    description:
      "A simple and efficient Todo App built with Next.js and Tailwind CSS, designed to help users manage their tasks effectively with a clean and user-friendly interface.",
    href: "https://a7mad-jheer.github.io/Code-Doodle-/",
  },
  {
    id: 2,
    img: "/BreackBreaker.png",
    title: "Breack Breaker",
    description:
      "A simple and efficient Todo App built with Next.js and Tailwind CSS, designed to help users manage their tasks effectively with a clean and user-friendly interface.",
    href: "https://a7mad-jheer.github.io/Brick-Breaker/",
  },
];

export const Project = () => {
  return (
    <div className="relative md:my-20 md:py-20 py-10 px-5   border-y-2">
      <Title text="My Projects" />
      <div className="md:mt-20">
        <Description text="Next JS Projects" />
        <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl ">
          {CardInfoNext.map((card) => {
            return (
              <div
                key={card.id}
                className="bg-black/20 backdrop-blur-2xl md:w-1/3 "
              >
                <div className="relative w-full h-100 ">
                  <Image  src={card.img} alt="" className="object-cover object-top" fill />
                </div>

                <div className="text-white/60 p-2 space-y-2">
                  <h1 className="text-center text-3xl">{card.title}</h1>
                  <p className="text-center">{card.description}</p>
                </div>

                <div className="text-center py-5">
                  <Link
                    className="backdrop-blur-2xl bg-black/60 px-3 py-2 rounded-md hover:bg-black/10 text-white text-sm "
                    href={card.href}
                  >
                    Go To site
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <Description text="Html & Css & JavaScript Projects" />
        <div className="flex flex-col md:flex-row md:gap-5 gap-10 items-center justify-center rounded-2xl mt-10">
          {CardInfoHTMLJS.map((card) => {
            return (
              <div
                key={card.id}
                className="bg-black/20 backdrop-blur-2xl md:w-1/3"
              >
                <div className="relative w-full h-100 ">
                  <Image src={card.img} alt="" className="object-cover  object-top" fill />
                </div>

                <div className="text-white/60 p-2 space-y-2">
                  <h1 className="text-center text-3xl">{card.title}</h1>
                  <p className="text-center">{card.description}</p>
                </div>

                <div className="text-center py-5">
                  <Link
                    className="backdrop-blur-2xl bg-black/60 px-3 py-2 rounded-md hover:bg-black/10 text-white text-sm "
                    href={card.href}
                  >
                    Go To site
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <Description text="JavaScript Projects" />
        <div className="flex flex-col md:flex-row md:gap-5 gap-10 items-center justify-center rounded-2xl mt-10">
          {CardInfoJS.map((card) => {
            return (
              <div
                key={card.id}
                className="bg-black/20 backdrop-blur-2xl md:w-1/3"
              >
                <div className="relative w-full h-100 ">
                  <Image src={card.img} alt="" className="object-cover" fill />
                </div>

                <div className="text-white/60 p-2 space-y-2">
                  <h1 className="text-center text-3xl">{card.title}</h1>
                  <p className="text-center">{card.description}</p>
                </div>

                <div className="text-center py-5">
                  <Link
                    className="backdrop-blur-2xl bg-black/60 px-3 py-2 rounded-md hover:bg-black/10 text-white text-sm "
                    href={card.href}
                  >
                    Go To site
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
