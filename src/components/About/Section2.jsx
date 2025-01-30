import bgImage from "../../assets/about/BG.png";
import image2 from "../../assets/about/Icon.png";
import image1 from "../../assets/about/restaurant-menu.png";
import image3 from "../../assets/about/timer-1.png";

export const Section2 = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-0">
      <div
        className="w-full h-[50vh]  lg:h-[80vh] flex justify-center items-center bg-fill"
        style={{
          background: `linear-gradient(0deg, rgba(44, 47, 36, 0.2) 0%, rgba(44, 47, 36, 0.2) 100%), url(${bgImage})`,
        }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium font-playfair text-white text-center">
          Feel the authentic & <br /> original taste from us.
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 p-4">
        <Card
          image={image1}
          title={"Multi Cuisine"}
          desc={
            "Experience a variety of flavors from different cuisines around the world."
          }
        />
        <Card
          image={image2}
          title={"Easy To Order"}
          desc={
            "Our user-friendly platform makes it simple and quick to place your order."
          }
        />
        <Card
          image={image3}
          title={"Fast Delivery"}
          desc={
            "Get your food delivered to your doorstep swiftly and efficiently."
          }
        />
      </div>
    </section>
  );
};
// sec2 card
const Card = ({ image, title, desc }) => {
  return (
    <div className="flex  justify-start items-start gap-2 p-2">
      <img src={image} alt="image" className="h-8 md:h-12 " />
      <div>
        <p className="font-semibold text-sm md:text-base lg:text-lg">{title}</p>
        <p className="text-xs md:text-sm lg:text-base">{desc}</p>
      </div>
    </div>
  );
};
