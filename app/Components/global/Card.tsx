export const Card = ({items} : {items : {id:number , name:string , color:string}[]}) => {
  return (
    <div className="flex flex-col gap-3  xl:flex-row md:flex-wrap justify-center items-center">
        {items.map((item) => {
            return (
      <div
      key={item.id}
        className={`backdrop-blur-2xl ${item.color} rounded-4xl md:py-10 py-3 text-center duration-400   sm:w-80 w-full`}>
        <h2 className=" md:text-3xl text-xl font-semibold ">{item.name}</h2>
      </div>
            )
        }   )}
    </div>

  );
};

export default Card;
