export const Options = ({ active, setActive }) => {
  return (
    <>
      <div className="block md:hidden">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="px-6 py-2 rounded-full cursor-pointer bg-white text-black border border-[#DBDFD0]"
        >
          <option
            value="all"
            className={` ${
              active === "all"
                ? "bg-[#AD343E] text-white border-none"
                : "bg-white text-black border border-[#DBDFD0]"
            }`}
          >
            All
          </option>
          <option
            value="breakfast"
            className={` ${
              active === "breakfast"
                ? "bg-[#AD343E] text-white border-none"
                : "bg-white text-black border border-[#DBDFD0]"
            }`}
          >
            Breakfast
          </option>
          <option
            value="main"
            className={` ${
              active === "main"
                ? "bg-[#AD343E] text-white border-none"
                : "bg-white text-black border border-[#DBDFD0]"
            }`}
          >
            Main Dishes
          </option>
          <option
            value="drinks"
            className={` ${
              active === "drinks"
                ? "bg-[#AD343E] text-white border-none"
                : "bg-white text-black border border-[#DBDFD0]"
            }`}
          >
            Drinks
          </option>
          <option
            value="desserts"
            className={` ${
              active === "desserts"
                ? "bg-[#AD343E] text-white border-none"
                : "bg-white text-black border border-[#DBDFD0]"
            }`}
          >
            Desserts
          </option>
        </select>
      </div>
      <ul className="hidden md:flex gap-4">
        <li
          onClick={() => setActive("all")}
          className={`px-6 py-2 rounded-full cursor-pointer ${
            active === "all"
              ? "bg-[#AD343E] text-white border-none"
              : "bg-white text-black border border-[#DBDFD0]"
          }`}
        >
          All
        </li>
        <li
          onClick={() => setActive("breakfast")}
          className={`px-6 py-2 rounded-full cursor-pointer ${
            active === "breakfast"
              ? "bg-[#AD343E] text-white border-none"
              : "bg-white text-black border border-[#DBDFD0]"
          }`}
        >
          Breakfast
        </li>
        <li
          onClick={() => setActive("main")}
          className={`px-6 py-2 rounded-full cursor-pointer ${
            active === "main"
              ? "bg-[#AD343E] text-white border-none"
              : "bg-white text-black border border-[#DBDFD0]"
          }`}
        >
          Main Dishes
        </li>
        <li
          onClick={() => setActive("drinks")}
          className={`px-6 py-2 rounded-full cursor-pointer ${
            active === "drinks"
              ? "bg-[#AD343E] text-white border-none"
              : "bg-white text-black border border-[#DBDFD0]"
          }`}
        >
          Drinks
        </li>
        <li
          onClick={() => setActive("desserts")}
          className={`px-6 py-2 rounded-full cursor-pointer ${
            active === "desserts"
              ? "bg-[#AD343E] text-white border-none"
              : "bg-white text-black border border-[#DBDFD0]"
          }`}
        >
          Desserts
        </li>
      </ul>
    </>
  );
};
