import { pageImages } from "../assets";
import { workData } from "../constants";
import { Button } from "./Button";
import Reveal from "./Reveal";
import TransportCard from "./TransportCard";

const Transporting = () => {
  return (
    <div
      id="works"
      className="w-full 2xl:min-h-[1000px] min-h-[50dvh] lg:min-h-[70dvh] relative flex justify-center items-center"
    >
      <img
        src={pageImages.yellowGradientImg}
        alt="yellow"
        className="w-full object-cover absolute bottom-0 left-0 2xl:h-[500px]"
      />
      <div className="2xl:mb-[3%] mb-[10%] lg:mb-[8%] w-full max-w-6xl z-10 flex justify-center items-center flex-col">
        <h3 className="text-tag-secondary-text text-xl md:text-3xl font-medium md:font-bold">
          Transporting Across The World
        </h3>

        <Reveal
          styles={
            "flex justify-between items-center my-12 gap-4 md:gap-0 flex-col md:flex-row"
          }
        >
          {workData.map((item, id) => (
            <TransportCard key={id} cardInfo={item} />
          ))}
        </Reveal>
        <Button text={"More Work"} state={"secondary"} />
      </div>
    </div>
  );
};

export default Transporting;
