import Header from "../common/Header";
import { Section3 as Section1 } from "../homepage/Section3";
import secImage from "../../assets/about/about-1.png";
import { Section2 } from "./Section2";

import { Section3 } from "./Section3";
import Testimonial from "../common/Testimonial";
import Footer from "../common/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh]">
        <Section1 image={secImage} />
        <Section2 />
        <Section3 />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default About;
