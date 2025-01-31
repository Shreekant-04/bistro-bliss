import image from "../../assets/footer/footer-logo.png";
import img1 from "../../assets/footer/1.png";
import img2 from "../../assets/footer/2.png";
import img3 from "../../assets/footer/3.png";
import img4 from "../../assets/footer/4.png";
import gitimg from "../../assets/4.png";
import instagram1 from "../../assets/footer/f1.png";
import instagram2 from "../../assets/footer/f2.png";
import instagram3 from "../../assets/footer/f3.png";
import instagram4 from "../../assets/footer/f4.png";

const Footer = () => {
  return (
    <>
      <section className="w-full  flex  text-[#ADB29E] hover:text-white transition-all duration-75 justify-center  items-center relative bg-[#474747]  border-b">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="flex flex-col justify-center items-center gap-2  p-2 w-full  "
        >
          <span>Back To Top</span>
        </button>
      </section>
      <footer className="px-8 py-2  w-full flex flex-col justify-center items-center gap-8 relative bg-[#474747] ">
        <section className="flex flex-wrap justify-evenly items-center gap-12 text-white">
          <Section1/>
          <Section2/>
          <Section3/>
        </section>

        <p className="text-center text-sm/1 text-[#ADB29E] ">
          &copy; 2025 Bistro Bliss. All Rights Reserved <br />
          <a
            href="https://github.com/Shreekant-04/bistro-bliss.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 "
          >
            <img src={gitimg} alt="github" />
            <span>Github</span>
          </a>
        </p>
      </footer>
    </>
  );
};
const Section1 = () => {
  return (
    <div className="flex flex-col justify-center  items-center gap-4 col-span-1">
      <a href="/" className="flex items-center space-x-3">
        <img src={image} className="h-8" alt="Bistro" />
        <span className=" text-2xl md:text-3xl font-bold italic whitespace-nowrap font-playfair">
        Bistro Bliss
        </span>
      </a>
      <p className="text-sm text-[#ADB29E] w-2/3">
        In the new era of technology we look a in the future with certainty and
        pride to for our company and.
      </p>
      <div className=" flex  ">
        <a target="_blank" href="#" className="p-2">
          <img src={img1} alt="img1" />
        </a>
        <a target="_blank" href="#" className="p-2">
          <img src={img2} alt="img2" />
        </a>
        <a target="_blank" href="#" className="p-2">
          <img src={img3} alt="img3" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Shreekant-04/bistro-bliss.git"
          className="p-2"
        >
          <img src={img4} alt="img4" />
        </a>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className=" flex  gap-12 col-span-1">
      <div>
        <b>Pages</b>
        <ul className="flex flex-col gap-2 mt-2 text-[#DBDFD0]">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Reservation</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Delivery</li>
        </ul>
      </div>
      <div>
        <b>Utility Pages</b>
        <ul className="flex flex-col gap-2 mt-2 text-[#DBDFD0]">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
};
const Section3 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 col-span-1">
      <b>Follow Us on Instagram</b>
      <div className="grid grid-cols-2 gap-2  justify-center items-center">
        <img
          src={instagram1}
          alt="instagram1"
          className="rounded-xl object-cover w-max h-24 col-span-1"
        />
        <img
          src={instagram2}
          alt="instagram2"
          className="rounded-xl object-cover w-max h-24 col-span-1"
        />
        <img
          src={instagram3}
          alt="instagram3"
          className="rounded-xl object-cover w-max h-24 col-span-1"
        />
        <img
          src={instagram4}
          alt="instagram4"
          className="rounded-xl object-cover w-max h-24 col-span-1"
        />
      </div>
    </div>
  );
};
export default Footer;
