import Image from "next/image";






/*  contain : Image and my name , job and Contanct With Me */

export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-2  p-10 rounded-sm pt-30 ">
      {/* Hero Image */}
      <div className="relative md:h-70 md:w-70 h-50 w-50  rounded-full overflow-hidden shadow-2xl shadow-amber-50/20 mb-10">

        <Image fill src="/image3333.png" alt="" className="object-cover " />
      </div>

      {/* Info Card */}
      <div className=" rounded-3xl  space-y-3 text-center z-50">
        <h1 className="md:text-6xl text-2xl font-semibold text-white">Ahmad A. Jheer</h1>
        <h2 className="md:text-2xl text-xl font-semibold text-white/90">
          Frontend Developer | Next Js & React Js
        </h2>
        <p className="md:text-md text-sm  max-w-100 text-white/60">
          Passionate about creating interactive and dynamic web interfaces.
          Focused on Next.js and modern frontend technologies.
        </p>
        
      </div>
      </div>
      

  );
};

export default Hero;
