import { Link } from "react-router";
import notFoundImg from "../../assets/not-found-image.webp"

const NotFound = () => {
  return (
    <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center p-4">
        <img src={notFoundImg} alt="not found" className="w-1/6   drop-shadow-2xl " />
      <h1 className="text-4xl font-bold text-primary mb-4 font-playfair text-[#3d3f38b0]">
        Page Not Found !
      </h1>
      <p className="text-lg text-secondary mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to={"/"}
        className=" px-6 py-4 border border-black font-semibold hover:border-[#3d3f38b0] hover:text-[#3d3f38b0] rounded-full "
      >
        Go to home
      </Link>
    </main>
  );
};

export default NotFound;
