// // Where Emmanuel will work
import { pageImages } from "../assets";
import Copyright from "./Copyright";

import FooterHead from "./FooterHead";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div>
      <footer className=" w-full h-full bg-primary-2 text-[#E8E8E8] ">
        <div className="img-ctn ">
          <img
            src={pageImages.footerPort}
            className="object-cover w-full h-full top-0 left-0 -z-10 2xl:h-[500px]"
            alt="cargo port"
          />
        </div>
        <FooterHead />

        <FooterLinks />

        <Copyright />
      </footer>
    </div>
  );
};

export default Footer;
