export const Footer = () => {
  return (
    <div className=" bg-black/20 backdrop-blur-2xl pb-10  p-5">
      <div className="space-x-3 flex flex-col sm:flex-row justify-center items-center text-center gap-3 ">
        <a
          href="https://wa.me/972597752547?text=Hi, I'm contacting you from your portfolio website!"
          className="w-fit bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition m-0"
          target="_blank" rel="noopener noreferrer"
        >
          Let’s Work Together
        </a>

        <button className="w-fit bg-white/10 text-white px-6 py-3  rounded-full hover:bg-white/20 transition">
          <a href="/Portfolio/portfolio_ahmedJh.zip" download>
            DownLoad Portfolio
          </a>
        </button>
      </div>
      <p className="absolute bottom-1 left-1/2 -translate-1/2 text-center w-full text-gray-400 text-sm ">
        © 2026 Ahmed Jheer. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
