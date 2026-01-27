import Image from "next/image";






/*  contain : Image and my name , job and Contanct With Me */

export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg- w-full h-full  mb-10 p-5 rounded-sm pt-60 ">
      {/* Hero Image */}
      <div className="relative md:h-70 md:w-70 h-35 w-35  rounded-full overflow-hidden shadow-2xl">

        <Image fill src="/image.jpg" alt="" className="object-cover " />
      </div>

      {/* Info Card */}
      <div className="shadow-2xl  text-white/60  rounded-3xl  space-y-3 text-center z-50">
        <h1 className="md:text-6xl text-2xl font-semibold">Ahmad A. Jheer</h1>
        <h2 className="md:text-2xl text-xl font-semibold">
          Frontend Developer | Next Js & React Js
        </h2>
        <p className="md:text-md text-sm  max-w-100">
          Passionate about creating interactive and dynamic web interfaces.
          Focused on Next.js and modern frontend technologies.
        </p>
        
      </div>
      </div>
      

  );
};

export default Hero;
