/* eslint-disable react/no-unescaped-entities */

import { Button } from "./Button";
import Reveal from "./Reveal";
import Tag from "./Tag";

// Where Emmanuel Obi will work
const HeroContent = () => {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto lg:px-0 md:px-10 px-6">
        <Reveal>
          <Tag text={"Logistics & Supply Chain Solutions"} state={"primary"} />
          <p className="text-white font-bold text-3xl md:text-6xl my-6">
            Your Gateway <br /> to any Destination <br /> in the World
          </p>
          <p className="text-sm font-krub text-white mb-6">
            Empowering journeys, connecting destinations. Welcome to
            TransitFlow, <br /> where every mile is a testament to reliability,
            safety, and exceptional service. <br /> We're your partners in
            exploration, commerce, and adventure. <br /> Let's navigate the sea
            together.
          </p>
          <Button text={"Explore More"} state={"primary"} />
        </Reveal>
      </div>
    </div>
  );
};

export default HeroContent;
