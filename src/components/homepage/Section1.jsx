import bg from "../../assets/heroimg.png";

// 7 sections of the homepage and footer
//section 1
export const Section1 = () => {
  return (
    <section className="section1 h-[50vh] md:h-[85vh] w-full flex justify-center items-center relative mt-[16vh] md:mt-[12vh] lg:mt-[19vh]   ">
      <img
        src={bg}
        alt="hero"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className=" p-4 md:p-6 text-center flex flex-col gap-2 md:gap-4 items-center justify-center relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold text-[#2C2F24] font-playfair">
          Best food for <br />
          your taste
        </h1>
        <p className="text-sm sm:text-base md:text-2xl  w-11/12 md:w-3/4 ">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="flex gap-2 md:gap-4">
          <button className="bg-[#AD343E] text-white hover:text-black font-semibold border border-[#AD343E] px-4 py-2 md:px-6 md:py-4 rounded-full transition-all duration-300">
            Book A Table
          </button>
          <button className="px-4 py-2 md:px-6 md:py-4 hover:text-[#AD343E] font-semibold rounded-full border border-black transition-all duration-300">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};
