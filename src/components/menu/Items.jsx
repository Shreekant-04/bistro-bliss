export const Items = ({ item }) => {
  return (
    <div className="border border-[#DBDFD0] shadow-lg rounded-lg overflow-hidden  flex flex-col animate-[--animation1--] ">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4  flex-1 flex flex-col">
        <p className="font-semibold">₹ {item.price}.00/-</p>
        <p className="text-[#AD343E] font-semibold flex justify-center items-center gap-[1px]   ">
          {item.itemName}{" "}
          <img
            src={
              item.type === "Veg"
                ? "https://spice-heaven.netlify.app/images/veg.png"
                : "https://spice-heaven.netlify.app/images/non-veg.png"
            }
            alt={item.itemName}
            className="h-[3vmin]"
          />
        </p>
        <p className="text-sm line-clamp-3">{item.description}</p>
      </div>
    </div>
  );
};
