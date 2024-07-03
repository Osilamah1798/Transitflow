import { pageImages } from "../assets";
import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

// Where Emmanuel Obi will work
const Hero = () => {
  return (
    <section className="w-full h-dvh 2xl:h-[800px] relative flex justify-start items-center">
      <img
        src={pageImages.heroShip}
        className="absolute object-cover w-full h-full top-0 left-0 -z-10"
        alt="Background Ship"
      />

      <Navbar />
      <HeroContent />
    </section>
  );
};

export default Hero;
