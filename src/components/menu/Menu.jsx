import { useState } from "react";

const Menu = () => {
  return (
    <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center p-4">
      <div className="flex flex-col justify-center items-center w-3/5 p-4 gap-4">
        <h1 className="font-playfair font-normal text-6xl">Our Menu</h1>
        <p className=" text-[#3d3f38b0] ">
          The menu offers a variety of delicious dishes, carefully crafted to
          satisfy your taste buds and provide a memorable dining experience.
        </p>
      </div>

      <Section1 />
    </main>
  );
};

export default Menu;

const Section1 = () => {
  const [active, setActive] = useState("all");
  return (
    <section>
      <Options active={active} setActive={setActive} />
    </section>
  );
};
const Options = ({ active, setActive }) => {
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
