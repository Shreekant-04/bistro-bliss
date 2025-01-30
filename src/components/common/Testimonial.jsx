import profile1 from "../../assets/home-sec-6/1.png";
import profile2 from "../../assets/home-sec-6/2.png";
import profile3 from "../../assets/home-sec-6/3.png";

//section 6
const Testimonial = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16   py-12 w-full flex flex-col justify-center items-center gap-8 bg-[#FFF]">
      <h1 className="text-[#2C2F24] font-semibold font-playfair text-3xl md:text-4xl lg:text-5xl">
        What Our Customer Says{" "}
      </h1>
      <div className="w-gull grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          title="Best Food Ever"
          review="Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
          image={profile1}
          name={"Sophire Robson"}
          address={"New York, NY"}
        />
        <Card
          title="Quick Delivery"
          review="Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
          image={profile2}
          name={"Matt Cannon"}
          address={"Los Angeles, CA"}
        />
        <Card
          title="Great Service"
          review="The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended."
          image={profile3}
          name={"Andy Smith"}
          address={"Chicago, IL"}
        />
      </div>
    </section>
  );
};

// sec 6 / card
const Card = ({ title, review, image, name, address }) => {
  return (
    <div className="border border-[#DBDFD0] p-4 rounded-lg flex flex-col gap-4 items-center justify-center">
      <p className="text-[#AD343E] font-semibold ">" {title} "</p>
      <p>{review}</p>
      <div className="flex  items-center justify-center gap-2">
        <img src={image} alt="user" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col  gap-1 ">
          <p className="font-semibold">{name}</p>
          <p className="text-[#414536]">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
