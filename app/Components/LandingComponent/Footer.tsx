export const Footer = () => {
  return (
    <div className="relative mt-6 text-center bg-black/20 backdrop-blur-2xl md:p-15  py-15">
      <div className="space-x-3 ">
        <a
          href="https://wa.me/972597752547?text=Hi, I'm contacting you from your portfolio website!"
          className="bg-white/10 text-white px-6 py-3  rounded-full hover:bg-white/20 transition"
          target="_blank" rel="noopener noreferrer"
        >
          Let’s Work Together
        </a>

        <button className="bg-white/10 text-white px-6 py-3  rounded-full hover:bg-white/20 transition">
          <a href="/Portfolio/portfolio_ahmedJh.zip" download>
            DownLoad Portfolio
          </a>
        </button>
      </div>
      <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-400 text-sm w-fit ">
        © 2026 Ahmed Jheer. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
