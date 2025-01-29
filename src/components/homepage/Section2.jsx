import icon4 from "../../assets/home-sec-2/desert.png";
import icon3 from "../../assets/home-sec-2/drinks.png";
import icon1 from "../../assets/home-sec-2/icon.png";
import icon2 from "../../assets/home-sec-2/main.png";

//section 2
export const Section2 = () => {
  return (
    <section className="k w-full  px-4 py-8 flex flex-col  items-center gap-4 font-playfair text-4xl font-semibold">
      <h2>Browse Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
        <Card
          icon={icon1}
          title="Breakfast"
          desc="Start your day with our delicious breakfast options, crafted to energize you."
        />
        <Card
          icon={icon2}
          title="Main Dishes"
          desc="Savor our main dishes, a perfect blend of flavors and ingredients."
        />
        <Card
          icon={icon3}
          title="Drinks"
          desc="Refresh yourself with our wide selection of drinks, from juices to cocktails."
        />
        <Card
          icon={icon4}
          title="Desserts"
          desc="Indulge in our desserts, a sweet ending to your meal."
        />
      </div>
    </section>
  );
};

export const Card = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col  items-center justify-evenly  gap-2 border  border-[#DBDFD0] px-4 py-10 rounded-xl ">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={icon} alt="icon" className="w-16 h-16" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-center">{desc}</p>
      <a href="#" className="text-sm text-[#AD343E] hover:underline">
        Explore Menu
      </a>
    </div>
  );
};