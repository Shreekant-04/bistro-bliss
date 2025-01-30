import img1 from "../../assets/home-sec-7/1.png";
import img2 from "../../assets/home-sec-7/2.png";
import img3 from "../../assets/home-sec-7/3.png";
import img4 from "../../assets/home-sec-7/4.png";
import img5 from "../../assets/home-sec-7/5.png";

//section 7
 const Section7 = () => {
  return (
    <section className="p-4 lg:p-12 w-full flex flex-col justify-center items-center gap-4 relative bg-[#F9F9F7]">
      <h2 className="font-semibold font-playfair text-3xl md:text-4xl lg:text-5xl">
        Our Blog & Articles
      </h2>
      <div className="w-full   flex flex-col sm:flex-row  justify-center items-center gap-2 p-4">
        <div className="w-full md:w-[48%] lg:w-[45%] ">
          <Card
            image={img1}
            date={"january 3 , 2025"}
            title={
              "The secret tips & tricks to prepare a perfect burger & pizza for our customers."
            }
            description={
              "Discover the best techniques to create mouth-watering burgers and pizzas that will leave your customers coming back for more. From ingredient selection to cooking methods, we've got you covered."
            }
          />
        </div>
        <div className="w-full md:w-[48%] lg:w-[45%]  grid grid-cols-2">
          <Card
            image={img2}
            date={"january 3 , 2025"}
            title={"How to prepare the perfect french fries in an air fryer."}
          />
          <Card
            image={img3}
            date={"january 3 , 2025"}
            title={"How to prepare delicious chicken tenders."}
          />
          <Card
            image={img4}
            date={"january 3 , 2025"}
            title={"7 delicious cheesecake recipes you can prepare."}
          />
          <Card
            image={img5}
            date={"january 3 , 2025"}
            title={"5 great pizza restaurants you should visit this city."}
          />
        </div>
      </div>
    </section>
  );
};
// sec 7 / card
const Card = ({ image, date, title, description }) => {
  return (
    <div
      className=" p-4 rounded-lg flex flex-col gap-2
    "
    >
      <img src={image} alt="image" />
      <div className="flex flex-col gap-2">
        <p className="capitalize text-[#737865] text-sm font-medium">{date}</p>
        <p className="text-[#2C2F24] font-semibold text-sm">{title}</p>
        {description && <p className="text-[#737865] text-sm">{description}</p>}
      </div>
    </div>
  );
};


import React from 'react';



export default Section7;
