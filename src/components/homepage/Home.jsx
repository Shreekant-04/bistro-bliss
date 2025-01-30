import Header from "../common/Header";
import Footer from "../common/Footer";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import Section7 from "./Section7";
import sec3 from "../../assets/home-sec-2/sec3.png";
import Testimonial from "../common/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh]">
        <Section1 />
        <Section2 />
        <Section3 image={sec3} />
        <Section4 />
        <Section5 />
        <Testimonial />
        <Section7 />
      </main>
      <Footer />
    </>
  );
};

export default Home;
