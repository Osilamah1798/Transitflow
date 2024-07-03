/* eslint-disable react/prop-types */
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const TeamMember = ({ name, image, member }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <img src={image} alt={name} />
      <div className="bg-tag-secondary-text w-full px-7 py-6 relative">
        <div className="absolute right-0 -top-1/3 bg-gradient-to-t  flex flex-row shadow-inner gap-[16px] z-12 py-[13px] px-[12px] from-[#FFDA56] from-10% [#FFB629] via-50% to-[#FFDA56] to-90%">
          <a
            className={` ${member === "two" ? "flex" : "hidden"} w-5 h-5`}
            href=" https://www.linkedin.com/"
          >
            <FaLinkedin className="w-full h-full" />
          </a>

          <a
            className={` ${member === "three" ? "hidden" : "flex"} w-5 h-5`}
            href="https://twitter.com/home"
          >
            <FaTwitter className="w-full h-full" />
          </a>

          <a className="w-5 h-5" href="https://web.facebook.com/">
            <FaFacebook className="w-full h-full" />
          </a>
          <a className="w-5 h-5" href="https://www.instagram.com/">
            <FaInstagram className="w-full h-full" />
          </a>
        </div>

        <p className="text-white text-base">{name}</p>
        <p className="text-white text-xs">Designer</p>
      </div>
    </div>
  );
};

export default TeamMember;
