import sec3Img from "../../assets/about/about-3.png";

//section 3
export const Section3 = () => {
  return (
    <section className="w-full px-8 py-8 flex flex-col md:flex-row items-center gap-4 font-playfair font-semibold bg-[#F9F9F7]">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-4 sm:p-4">
        <div className="w-full  lg:w-1/2  sm:px-8 sm:py-4 flex flex-col gap-2 justify-center text-left">
          <h2 className="text-3xl md:text-5xl ">
            A little information <br /> for our valuable guest
          </h2>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="grid grid-cols-2 gap-4 items-center justify-center p-2 self-center">
            <Card number={3} title={"Locations"} />
            <Card number={1995} title={"Founded"} />
            <Card number={"65+"} title={"Staff Members"} />
            <Card number={"100%"} title={"Satisfied Customers"} />
          </div>
        </div>
        <img
          src={sec3Img}
          alt="sec3Img"
          className="w-full md:w-3/4 lg:w-[30%] h-fullrounded-lg object-cover rounded-lg"
        />
      </div>
    </section>
  );
};
// sec 3 card
const Card = ({ number, title }) => {
  return (
    <div className="border border-[#DBDFD0] w-[22vmin] rounded-lg h-[20vmin] p-2 flex flex-col gap-2 justify-center items-center bg-white">
      <p className="text-2xl">{number}</p>
      <p className="text-xs">{title}</p>
    </div>
  );
};
