import location from "../../assets/location-marker.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";

//section 3
export const Section3 = ({image}) => {
  return (
    <section className="p-4 lg:p-12 w-full flex justify-center items-center relative bg-[#F9F9F7]">
      <div className=" h-auto lg:h-4/5 w-full lg:w-4/5  p-4 lg:p-6 text-center flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10">
        <div className="h-64 md:w-[70%] md:h-72 lg:h-full w-full lg:w-[40%] relative flex flex-col items-center justify-center">
          <img src={image} alt="image" className="w-full h-full object-cover" />
          <div className="  w-2/3 bg-[#474747] absolute -bottom-6 -right-6 rounded-lg p-4 lg:p-6 flex flex-col items-start justify-center gap-2 text-white text-start">
            <h3 className=" text-lg lg:text-xl font-semibold">
              Come and visit us
            </h3>
            <a
              href="tel:+91 9225635487"
              className=" flex items-center justify-start gap-2 text-sm"
            >
              <img src={phone} alt="Phone" />
              9225635487
            </a>
            <a
              href="mailto:shreekant4062@gmail.com"
              className=" flex items-center justify-start gap-2 text-sm"
            >
              <img src={mail} alt="Mail" />
              shreekant4062@gmail.com
            </a>
            <p className="e flex items-start justify-start gap-2 text-sm">
              <img src={location} alt="Location" />
              123 Connaught Place, New Delhi, Delhi 110001, India
            </p>
          </div>
        </div>
        <div className="h-auto lg:h-full w-full lg:w-[40%] text-left flex flex-col gap-2 items-start justify-center">
          <h2 className="text-2xl lg:text-4xl text-[#2C2F24] font-semibold">
            We provide healthy food for your family.
          </h2>
          <p className="text-[#2C2F24]">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className="text-[#414536]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <a
            href="#"
            className="px-4 py-2 rounded-full border border-black font-semibold hover:text-[#AD343E] hover:border-[#AD343E] duration-100"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
};
