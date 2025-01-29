import { useState } from "react";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import icon from "../../assets/japanese-food.png";

const Header = () => {
  return (
    <section className="w-[100vw] bg-[#333333]   fixed top-0  left-0 z-50">
      <Section1 />
      <Section2 />
    </section>
  );
};

export default Header;

const Section1 = () => {
  return (
    <section className="w-full bg-[#474747] flex flex-wrap items-center justify-center gap-4 px-4 ">
      <div className="flex flex-wrap justify-center gap-4">
        <a
          target="_blank"
          href="tel:+91 9874563210"
          className="text-white flex items-center justify-center gap-2"
        >
          <img src={phone} alt="Phone"  />
          <p className="hidden md:block">9874563210</p>
        </a>
        <a
          target="_blank"
          href="mailto:shreekant4062@gmail.com"
          className="text-white flex items-center justify-center gap-2"
        >
          <img src={mail} alt="Mail"  />
          <p className="hidden md:block">shreekant4062@gmail.com</p>
        </a>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 md:ml-auto">
        <a target="_blank" href="#" className="p-2">
          <img src={img1} alt="img1"  />
        </a>
        <a target="_blank" href="#" className="p-2">
          <img src={img2} alt="img2"  />
        </a>
        <a target="_blank" href="#" className="p-2">
          <img src={img3} alt="img3"  />
        </a>
        <a target="_blank" href="#" className="p-2">
          <img src={img4} alt="img4" />
        </a>
      </div>
    </section>
  );
};

const Section2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white  w-full start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={icon} className="h-8" alt="Bistro" />
          <span className="text-[#474747] text-2xl md:text-3xl font-bold italic whitespace-nowrap font-playfair">
            Bliss Bistro
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="hover:text-blue-400 bg-white rounded-xl border border-black hover:border-blue-400 hover:scale-110 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 hidden md:inline-flex items-center"
          >
            Book Table
          </button>

          <button
            type="button"
            onClick={toggle}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 rounded md:bg-transparent md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hidden"
              >
                Book Table
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
