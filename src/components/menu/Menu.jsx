import { useEffect, useState } from "react";
import { menuItems } from "./menuItems";
import { Options } from "./Options";
import { Items } from "./Items";
import devPartner from "../../assets/menu/logo.png";

const Menu = () => {
  const [active, setActive] = useState("main");
  const [filteredItems, setFilteredItems] = useState(menuItems);
  useEffect(() => {
    if (active === "all") {
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter((item) => item.category === active);
      setFilteredItems(filtered);
    }
  }, [active]);
  return (
    <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center gap-2justify-center text-center p-4">
      <div className="flex flex-col justify-center items-center lg:w-3/5 p-4 gap-4  ">
        <h1 className="font-playfair font-normal text-4xl md:text-6xl">
          Our Menu
        </h1>
        <p className=" text-[#3d3f38b0]  ">
          The menu offers a variety of delicious dishes, carefully crafted to
          satisfy your taste buds and provide a memorable dining experience.
        </p>
      </div>

      <section className="p-2">
        <Options active={active} setActive={setActive} />
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center px-6 lg:px-16 py-4 ">
          {filteredItems.map((item, index) => (
            <Items key={index} item={item} />
          ))}
        </div>
      </section>

      <div className=" flex flex-col md:flex-row md:justify-evenly items-center py-4 ">
        <div className="flex flex-col gap-0 justify-center items-center p-4 lg:w-1/3">
          <h2 className="font-playfair text-2xl md:text-5xl lg:text-6xl font-semibold md:first-letter:text-6xl  lg:first-letter:text-7xl first-letter:text-4xl   ">
            You can order through apps
          </h2>
          <p className="px-4 py-2 text-[#3d3f38b0] text-start text-xs first-letter:sm:text-sm">
            Partner with leading food delivery platforms for your convenience.
            Enjoy our delicious meals delivered right to your doorstep with
            reliable and quick service.
          </p>
        </div>

        <img
          src={devPartner}
          alt="delivery partners"
          className="w-full md:w-2/4"
        />
      </div>
    </main>
  );
};

export default Menu;
