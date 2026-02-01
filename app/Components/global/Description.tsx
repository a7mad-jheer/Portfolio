export const Description = ({ text , style}: { text: string,  style?:string }) => {
  return (
    <p className={`text-xl border-2 p-2 text-white font-bold text-center my-20  bg-black ${style}`} >
      {text}
    </p>
  );
};

export default Description;
