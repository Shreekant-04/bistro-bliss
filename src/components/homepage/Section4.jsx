import image1 from "../../assets/home-sec-4/1.png";
import image2 from "../../assets/home-sec-4/2.png";
import image3 from "../../assets/home-sec-4/3.png";
import image4 from "../../assets/home-sec-4/4.png";

//section 4
export const Section4 = () => {
  return (
    <section className="p-4 lg:p-12 w-full   bg-[#FFF]">
      <h2 className="text-2xl md:text-4xl font-playfair px-6 font-semibold text-[#2C2F24]">
        We also offer unique <br /> services for your events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 mt-4 ">
        <Card2
          image={image1}
          title="Catering"
          desc="Our catering services bring the  quality and taste of our restaurant to your event."
        />
        <Card2
          image={image2}
          title="Birthdays"
          desc="Celebrate your special day with us, with a customized menu and decor."
        />
        <Card2
          image={image3}
          title="Weddings"
          desc="Make your wedding day memorable with our exquisite catering and services."
        />
        <Card2
          image={image4}
          title="Events"
          desc="Host your events with us, and let us take care of the details for you."
        />
      </div>
    </section>
  );
};
// section 4.1 //card
const Card2 = ({ image, title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-between h-[400px] gap-4 border border-[#DBDFD0] px-4 py-6 rounded-xl">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <div className="w-full h-[250px]">
          <img 
            src={image} 
            alt="icon" 
            className="rounded-lg  w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
      <p className="md:text-sm text-center">{desc}</p>
    </div>
  );
};
