import { pageIcons, pageImages } from "../assets";
import CounterSplash from "./CounterSplash";
import Reveal from "./Reveal";
import Tag from "./Tag";
import WhyUsPerks from "./WhyUsPerks";

const WhyUsInfo = () => {
  return (
    <div className="w-full 2xl:min-h-[0px] min-h-[50dvh] md:min-h-[70dvh] lg:min-h-[120dvh] relative flex justify-center items-center">
      <img
        src={pageImages.containerimg}
        alt="container"
        className="w-full object-cover absolute top-0 left-0 2xl:h-[500px]"
      />

      <div className="2xl:mt-[300px] mt-[25%] lg:mt-[15%] w-full max-w-4xl bg-white z-10 p-12 md:p-16">
        <div className="w-full flex justify-between items-center flex-col md:flex-row">
          <Reveal
            styles={
              "flex flex-col justify-between items-start w-full md:w-[80%] lg:w-[50%]"
            }
          >
            <Tag text={"Why Us"} state={"secondary"} />
            <p className="text-xl md:text-2xl my-3 font-medium text-tag-secondary-text">
              We provide full range global <br /> logistics solution
            </p>

            <p className="font-krub text-xs text-tertiary-text mb-4">
              leverage agile frameworks to provide a robust <br /> synopsis for
              strategy foster collaborative <br /> thinking to further the
              overall value.
            </p>
            <p className="font-krub text-xs text-tertiary-text">
              Organically grow the holistic world view of disruptive <br />
              innovation via workplace diversity and empowerment.
            </p>
            <div className="w-full flex flex-col justify-between items-start py-4 gap-4">
              <WhyUsPerks
                icon={pageIcons.cargoIcon}
                iconAlt={"Cargo"}
                text={"Delivery on Time"}
              />
              <WhyUsPerks
                icon={pageIcons.moneyIcon}
                iconAlt={"Money"}
                text={"  Optimized Travel Cost"}
              />
            </div>
          </Reveal>
          <div className="w-full md:w-[80%] lg:w-[50%]">
            <img src={pageImages.planeImg} alt="plane" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-24 mb-16 border-t-1 border-b-1 h-32 md:h-24 border-counter-border">
          <CounterSplash
            orientation={"left"}
            number={1294}
            info={"Delivered Packages"}
          />
          <CounterSplash
            orientation={"right"}
            number={3594}
            info={"Satisfied Clients"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUsInfo;
