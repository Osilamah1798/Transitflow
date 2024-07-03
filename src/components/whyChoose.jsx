import Tag from "./Tag";
import WhyUsPerks from "./WhyUsPerks";
import { pageIcons, pageImages } from "../assets";
import Reveal from "./Reveal";

const WhyChoose = () => {
  return (
    <section id="project" className="w-full flex justify-between items-center relative">
      <div className="bg-primary-2 hidden relative w-1/2 2xl:h-[800px] h-[80vh] lg:flex justify-center items-center"></div>
      <div className="bg-whychoose-white w-full lg:w-1/2 lg:h-[80vh] 2xl:h-[800px] py-20 px-10 md:px-32 flex justify-start items-center relative">
        <div className="bg-whychoose-white w-full flex lg:hidden justify-start items-center relative">
          <img
            src={pageImages.patternImg}
            className="absolute top-0"
            alt="pattern"
          />
          <Reveal styles={"flex flex-col justify-center items-start gap-3"}>
            <Tag text={"Why Choose"} state={"secondary"} />
            <p className="text-xl md:text-2xl my-3 font-medium text-tag-secondary-text">
              We create opportunity to <br />
              reach potential
            </p>

            <p className="font-krub text-xs text-tertiary-text mb-4">
              leverage agile frameworks to provide a robust <br /> synopsis for
              strategy foster collaborative <br /> thinking to further the
              overall value.
            </p>

            <div className="w-full flex flex-col md:flex-row justify-between items-start flex-wrap gap-4">
              <WhyUsPerks
                icon={pageIcons.cargoIcon}
                iconAlt={"box"}
                text={"Safe Package"}
              />
              <WhyUsPerks
                icon={pageIcons.shipIcon}
                iconAlt={"mouse"}
                text={"Ship Everyware"}
              />
              <WhyUsPerks
                icon={pageIcons.webIcon}
                iconAlt={"global"}
                text={"Global Tracking"}
              />
              <WhyUsPerks
                icon={pageIcons.headsetIcon}
                iconAlt={"headset"}
                text={"24/7 Support"}
              />
              <WhyUsPerks
                icon={pageIcons.clockIcon}
                iconAlt={"Time"}
                text={"In Time Delivery"}
              />

              <WhyUsPerks
                icon={pageIcons.transparentIcon}
                iconAlt={"pricing"}
                text={"Transparent pricing"}
              />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute gap-10 w-full max-w-5xl left-0 lg:left-1/2 lg:-ml-[32rem] flex justify-between items-center">
        <div className="relative w-[55%] hidden lg:flex justify-center items-center">
          <img src={pageImages.dreamlifter} alt="plane" />
          <img
            src={pageImages.featureImg}
            alt="feature"
            className="w-64 absolute bottom-0 left-[25%]"
          />
        </div>
        <div className="bg-whychoose-white w-[45%] hidden lg:flex justify-start items-center relative">
          <img
            src={pageImages.patternImg}
            className="absolute top-0"
            alt="pattern"
          />
          <Reveal styles={"flex flex-col justify-center items-start gap-3"}>
            <Tag text={"Why Choose"} state={"secondary"} />
            <p className="text-2xl md:text-2xl my-3 font-medium">
              We create opportunity to <br />
              reach potential
            </p>

            <p className="font-krub text-xs text-tertiary-text mb-4">
              leverage agile frameworks to provide a robust <br /> synopsis for
              strategy foster collaborative <br /> thinking to further the
              overall value.
            </p>

            <div className="w-full flex flex-col md:flex-row justify-between items-start flex-wrap gap-4">
              <WhyUsPerks
                icon={pageIcons.cargoIcon}
                iconAlt={"box"}
                text={"Safe Package"}
              />
              <WhyUsPerks
                icon={pageIcons.shipIcon}
                iconAlt={"mouse"}
                text={"Ship Everyware"}
              />
              <WhyUsPerks
                icon={pageIcons.webIcon}
                iconAlt={"global"}
                text={"Global Tracking"}
              />
              <WhyUsPerks
                icon={pageIcons.headsetIcon}
                iconAlt={"headset"}
                text={"24/7 Support"}
              />
              <WhyUsPerks
                icon={pageIcons.clockIcon}
                iconAlt={"Time"}
                text={"In Time Delivery"}
              />

              <WhyUsPerks
                icon={pageIcons.transparentIcon}
                iconAlt={"pricing"}
                text={"Transparent pricing"}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
