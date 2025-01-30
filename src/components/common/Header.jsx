import { useState } from "react";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import icon from "../../assets/japanese-food.png";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <section className="w-full bg-[#333333] fixed top-0 left-0 z-50">
      <Section1 />
      <Section2 />
    </section>
  );
};

export default Header;

const Section1 = () => {
  return (
    <section className="w-full bg-[#474747] py-2 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-4">
          <a
            target="_blank"
            href="tel:+91 9874563210"
            className="text-white flex items-center gap-2 text-sm sm:text-base"
          >
            <img src={phone} alt="Phone" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="hidden sm:block">9874563210</p>
          </a>
          <a
            target="_blank"
            href="mailto:shreekant4062@gmail.com"
            className="text-white flex items-center gap-2 text-sm sm:text-base"
          >
            <img src={mail} alt="Mail" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="hidden sm:block">shreekant4062@gmail.com</p>
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {[img1, img2, img3, img4].map((img, index) => (
            <a
              key={index}
              target="_blank"
              href="#"
              className="p-1 sm:p-2 hover:opacity-80"
            >
              <img
                src={img}
                alt={`social-${index + 1}`}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center space-x-2 sm:space-x-3">
          <img src={icon} className="h-6 sm:h-8" alt="Bistro" />
          <span className="text-[#474747] text-xl sm:text-2xl md:text-3xl font-bold italic whitespace-nowrap font-playfair">
            Bliss Bistro
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4 md:order-2">
          <Link
            to="book-table"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-black hover:text-blue-400 bg-white rounded-xl border border-black hover:border-blue-400 hover:scale-105 transition-all"
          >
            Book Table
          </Link>

          <button
            onClick={toggle}
            className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Toggle menu</span>
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
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 p-4 md:p-0 bg-gray-50 md:bg-transparent border rounded-lg md:border-0">
            {["Home", "About", "Menu", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-[#2C2F24] rounded-lg hover:bg-[#DBDFD0]  hover:text-gray-600 ${
                      isActive ? "bg-[#DBDFD0] " : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li className="md:hidden">
              <NavLink
                to="/book-table"
                className={({ isActive }) =>
                  `block px-4 py-2 text-[#2C2F24] rounded-lg hover:bg-[#DBDFD0] ${
                    isActive ? "bg-[#DBDFD0]" : ""
                  }`
                }
              >
                Book Table
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
