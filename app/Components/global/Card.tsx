export const Card = ({items} : {items : {id:number , name:string , color:string}[]}) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center md:items-center">
        {items.map((item) => {
            return (
      <div
      key={item.id}
        className={`backdrop-blur-2xl ${item.color} rounded-4xl px-5 md:py-10 py-3 text-center duration-400  xl:w-1/4 md:w-fit w-full`}>
        <h2 className=" md:text-3xl text-xl font-semibold">{item.name}</h2>
      </div>
            )
        }   )}
    </div>

  );
};

export default Card;
