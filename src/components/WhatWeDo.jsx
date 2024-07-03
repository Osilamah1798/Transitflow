// Where Moses will work

import { pageIcons } from "../assets";
import Reveal from "./Reveal";
import Tag from "./Tag";
import ServiceCard from "./ServiceCard";

const WhatWeDo = () => {
  return (
    <section
      id="about"
      className="w-full bg-white flex justify-center items-center min-h-[50dvh] 2xl:min-h-[400px]"
    >
      <Reveal
        styles={
          "max-w-5xl mx-auto py-16 md:p-16 lg:p-0 flex flex-col lg:flex-row gap-10 justify-between lg:items-start items-center"
        }
      >
        <div className="flex flex-col justify-center  items-center lg:items-start md:px-10 lg:px-0">
          <Tag text={"What We Do"} state={"secondary"} />
          <p className="text-xl md:text-2xl my-3 font-medium text-tag-secondary-text">
            Safe & Reliable <br /> Cargo Solutions
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col px-10 gap-12 flex-grow">
            <ServiceCard
              icon={pageIcons.seaIcon}
              iconAlt={"sea"}
              text={"Sea Transport Services"}
            />

            <ServiceCard
              icon={pageIcons.airIcon}
              iconAlt={"air"}
              text={"Air Fright Services"}
            />
          </div>
          <div className="flex flex-col gap-12">
            <ServiceCard
              icon={pageIcons.wareHouseIcon}
              iconAlt={"warehouse"}
              text={"Warehousing Services"}
            />
            <ServiceCard
              icon={pageIcons.localIcon}
              iconAlt={"local"}
              text={" Local Shipping Services"}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default WhatWeDo;
