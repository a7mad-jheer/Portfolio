import { Title } from "../global/Title";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contactitems = [
  { id: 0, icon: <FaPhoneSquareAlt size={35} /> },
  { id: 1, icon: <MdEmail size={35} /> },
  { id: 2, icon: <FaFacebookSquare size={35} /> },
  { id: 3, icon: <FaSquareInstagram size={35} /> },
  { id: 4, icon: <FaLinkedin size={35} /> },
  { id: 5, icon: <FaGithubSquare size={35} /> },
];

export const Contact = () => {
  return (
    <div className="relative md:my-20 md:py-0 py-10 ">
      <Title text="Contact Me" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <form className="bg-white/20 backdrop-blur-2xl w-100 md:my-20 my-5 md:p-10 p-5 flex flex-col items-center gap-5 rounded-2xl shadow-2xl">
          <h1 className="text-2xl text-white font-semibold">Send a Message</h1>
          <input
            type="text"
            placeholder="Exapmle@gmail.com"
            className="bg-white py-3 px-1 w-full outline-none"
          />
          <textarea
            placeholder="Enter Your Message..."
            className="resize-none  h-30 bg-white py-3 px-1 w-full outline-none"
          />
          <button
            type="submit"
            className="bg-gray-200/10 px-3 py-2 cursor-pointer rounded-xl text-lg mt-5 hover:bg-white/20 w-full text-white shadow-2xl"
          >
            Send
          </button>
        </form>

        <div className="flex md:flex-col md:gap-7 gap-2 md:mt-5">
          {Contactitems.map((link) => {
            return (
              <Link key={link.id} href="#" className="text-white text-6xl">
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
