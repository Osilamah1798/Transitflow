/* eslint-disable react/prop-types */
import { pageImages } from "../assets";

// Where Emmanuel Obi will work

const Logo = ({ location }) => {
  return (
    <img
      src={pageImages.pageLogo}
      className={`${location === "header" ? "h-8" : "h-6 md:hidden"}`}
      alt="TransitFlow Logo"
    />
  );
};

export default Logo;
