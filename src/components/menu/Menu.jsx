import { useEffect, useState } from "react";
import image from "../../assets/menu/1.png";

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
const menuItems = [
  {
    id: "1",
    itemName: "Butter Paneer",
    image:
      "https://t4.ftcdn.net/jpg/05/82/28/65/360_F_582286506_Kji3X5NrZBHMTFsjrtEjL.jpg",
    price: "250",
    type: "Veg",
    category: "main",
    description: "Creamy cottage cheese curry cooked in rich buttery gravy.",
  },
  {
    id: "2",
    itemName: "Chicken Biryani",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
    price: "350",
    type: "Non-Veg",
    category: "main",
    description: "Aromatic rice dish with tender chicken and fragrant spices.",
  },
  {
    id: "3",
    itemName: "Masala Dosa",
    image:
      "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.whqc_768x512q80.jpg",
    price: "150",
    type: "Veg",
    category: "breakfast",
    description: "Crispy rice crepe filled with spiced potato mixture.",
  },
  {
    id: "4",
    itemName: "Mutton Rogan Josh",
    image:
      "https://static.toiimg.com/thumb/53192600.cms?imgsize=418831&width=800&height=800",
    price: "400",
    type: "Non-Veg",
    category: "main",
    description: "Classic Kashmiri curry with tender mutton in spiced gravy.",
  },
  {
    id: "5",
    itemName: "Vegetable Pulao",
    image:
      "https://t4.ftcdn.net/jpg/04/18/22/71/360_F_418227121_mGoGy7ZE2jAkq07OnN599QU7PVuhVT57.jpg",
    price: "200",
    type: "Veg",
    category: "main",
    description:
      "Fragrant rice cooked with mixed vegetables and aromatic spices.",
  },
  {
    id: "6",
    itemName: "Butter Naan",
    image:
      "https://www.shutterstock.com/image-photo/indian-naan-bread-herbs-garlic-600nw-2255100041.jpg",
    price: "50",
    type: "Veg",
    category: "main",
    description: "Soft tandoor-baked flatbread brushed with melted butter.",
  },
  {
    id: "7",
    itemName: "Gulab Jamun",
    image:
      "https://t3.ftcdn.net/jpg/04/40/62/60/360_F_440626064_ghxwEM9hM70aVObUUYObrNS4g8qor3yX.jpg",
    price: "100",
    type: "Veg",
    category: "desserts",
    description: "Sweet milk-solid dumplings soaked in sugar syrup.",
  },
  {
    id: "8",
    itemName: "Lassi",
    image:
      "https://t3.ftcdn.net/jpg/04/81/51/96/360_F_481519662_1Vqr3aA1SvOPFa4YbGsOCTpYXcpCZYk5.jpg",
    price: "60",
    type: "Veg",
    category: "drinks",
    description: "Refreshing yogurt-based drink served chilled with flavors.",
  },
  {
    id: "9",
    itemName: "Aloo Paratha",
    image:
      "https://t3.ftcdn.net/jpg/01/15/62/02/360_F_115620221_5XL4MzVoXrHGJdhHXrVVNL0WUHdJLCPH.jpg",
    price: "120",
    type: "Veg",
    category: "breakfast",
    description: "Whole wheat flatbread stuffed with spiced mashed potatoes.",
  },
  {
    id: "10",
    itemName: "Fish Curry",
    image:
      "https://t4.ftcdn.net/jpg/02/96/12/15/360_F_296121509_0Wapf8gyoLCOxk9KjtTVqgASjEXsBDn1.jpg",
    price: "300",
    type: "Non-Veg",
    category: "main",
    description: "Fresh fish cooked in tangy coconut-based curry sauce.",
  },
  {
    id: "11",
    itemName: "Dal Makhani",
    image:
      "https://t4.ftcdn.net/jpg/01/84/58/83/360_F_184588398_RczrKKQfy5GZWSd1rvCYu6GEPlsCd9rv.jpg",
    price: "180",
    type: "Veg",
    category: "main",
    description: "Creamy black lentils slow-cooked with butter and spices.",
  },
  {
    id: "12",
    itemName: "Prawn Masala",
    image:
      "https://t4.ftcdn.net/jpg/04/29/57/71/360_F_429577181_C6LC59Bvrwn0WJPR6GNFDpecwIDjVTWX.jpg",
    price: "400",
    type: "Non-Veg",
    category: "main",
    description: "Succulent prawns cooked in spicy onion-tomato gravy.",
  },
  {
    id: "13",
    itemName: "Chole Bhature",
    image:
      "https://t4.ftcdn.net/jpg/05/97/41/05/360_F_597410510_aVWxjkToHzErUYm3Ammrvm4od2Fjxl1w.jpg",
    price: "180",
    type: "Veg",
    category: "breakfast",
    description: "Spiced chickpea curry served with fried bread.",
  },
  {
    id: "14",
    itemName: "Keema Naan",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/98/97/1b/keema-naan.jpg",
    price: "250",
    type: "Non-Veg",
    category: "main",
    description: "Naan bread stuffed with spiced minced meat.",
  },
  {
    id: "15",
    itemName: "Palak Paneer",
    image:
      "https://t4.ftcdn.net/jpg/04/12/57/33/360_F_412573389_1Jp8J0hA4fc1VjxR8D2SPQbdQpTfYkJP.jpg",
    price: "220",
    type: "Veg",
    category: "main",
    description: "Cottage cheese cubes in creamy spinach gravy.",
  },
  {
    id: "16",
    itemName: "Egg Curry",
    image:
      "https://t4.ftcdn.net/jpg/05/45/04/09/360_F_545040926_Fd7TY5kXcLuBHyJRAXaajrv949qVB3GC.jpg",
    price: "150",
    type: "Non-Veg",
    category: "main",
    description: "Boiled eggs simmered in spiced onion-tomato gravy.",
  },
  {
    id: "17",
    itemName: "Rajma Chawal",
    image:
      "https://t3.ftcdn.net/jpg/07/28/71/10/360_F_728711034_H1fTB6GI74c1icXZY1NBODNqXAky5IO8.jpg",
    price: "200",
    type: "Veg",
    category: "main",
    description: "Red kidney beans curry served with steamed rice.",
  },
  {
    id: "18",
    itemName: "Chicken Tikka",
    image:
      "https://t3.ftcdn.net/jpg/05/85/17/02/360_F_585170258_aBJpRchNLmMrJaj7vnm3sCd2XPF7jCi0.jpg",
    price: "300",
    type: "Non-Veg",
    category: "main",
    description: "Marinated chicken pieces grilled in tandoor until tender.",
  },
  {
    id: "19",
    itemName: "Veg Hakka Noodles",
    image:
      "https://as1.ftcdn.net/v2/jpg/03/86/85/64/1000_F_386856433_UTNRrviaDxUsLJfEpVp24bdr3xqgQXjl.jpg",
    price: "180",
    type: "Veg",
    category: "main",
    description: "Stir-fried noodles with mixed vegetables in Chinese style.",
  },
  {
    id: "20",
    itemName: "Mango Lassi",
    image:
      "https://t4.ftcdn.net/jpg/03/26/17/71/360_F_326177134_sPYEaYBMKsScGsOGbV45FAjaTZueL093.jpg",
    price: "80",
    type: "Veg",
    category: "drinks",
    description: "Sweet yogurt drink blended with fresh mango pulp.",
  },
  {
    id: "21",
    itemName: "Special Thali",
    image:
      "https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=ZHAsJ9sJJoeAmwD3iU1Oo2YSKn_BG6JoE7zuG1frxwg=",
    price: "140",
    type: "Veg",
    category: "main",
    description: "Complete meal with variety of dishes served together.",
  },
];

const Section1 = () => {
  const [active, setActive] = useState("all");
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
    <section>
      <Options active={active} setActive={setActive} />
      <div className="grid grid-cols-4 gap-4 justify-center items-center px-16 py-4 ">
        {filteredItems.map((item, index) => (
          <Items key={index} item={item} />
        ))}
      </div>
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

const Items = ({ item }) => {
  return (
    <div className="border border-[#DBDFD0] shadow-lg rounded-lg overflow-hidden  flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt="image"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <p className="font-semibold">₹ {item.price}.00/-</p>
        <p className="text-[#AD343E] font-semibold flex justify-center items-center gap-2 ">
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
