/* eslint-disable react/prop-types */

import { pageImages } from "../assets";
import CountUp from "react-countup";

const CounterSplash = ({ orientation, number, info }) => {
  return (
    <div
      className={`w-full md:w-1/2 justify-center items-center flex h-full ${
        orientation === "left" ? "border-r-half" : "border-l-half"
      } border-counter-border`}
    >
      <p className="flex justify-between items-center gap-3 ">
        <span className="text-tag-secondary-text text-3xl font-semibold">
          <CountUp end={number} duration={10} />
        </span>
        <img src={pageImages.chipImg} alt="chip" />{" "}
        <span className="font-spartan font-light">{info}</span>
      </p>
    </div>
  );
};

export default CounterSplash;
