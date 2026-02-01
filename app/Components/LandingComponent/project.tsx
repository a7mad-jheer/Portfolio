import Title from "../global/Title";
import Description from "../global/Description";
import CardProject from "../global/CardProject";
import { Section } from "@/config/navigation";

const CardInfoNext = [
  {
    id: 0,
    img: "/WhiteCollar.png",
    title: "WhitCollar Project",
    description:
      "WhiteCollar is a professional corporate website focused on clean layouts, clear content structure, and responsive design, built using Next.js and Tailwind CSS.",
    href: "https://whit-collar-35745s2up-ahmed-jheers-projects.vercel.app/",
  },
  {
    id: 1,
    img: "/NetGrid-image.png",
    title: "NetGrid Project",
    description:
      "NetGrid is a modern web platform built with Next.js and Tailwind CSS, designed to provide a clean, responsive, and user-friendly experience while showcasing interactive layouts and smooth navigation.",
    href: "https://netgrid-films-site.vercel.app/LandingPage",
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

const ProjectSection: Section[] = [
  { id: 0, title: "Next JS Projects", data: CardInfoNext },
  { id: 1, title: "Html & Css & JavaScript Projects", data: CardInfoHTMLJS },
  { id: 2, title: "JavaScript Projects", data: CardInfoJS },
];

export const Project = () => {
  return (
    <div className=" md:my-20 md:py-20 py-10  border-y-2 ">
      <Title text="My Projects" />

      {ProjectSection.map((project) => {
        return (
          <div key={project.id} className="md:mt-20">
            <Description text={project.title} />
            <CardProject CardData={project.data} />
          </div>
        );
      })}
    </div>
  );
};

export default Project;
