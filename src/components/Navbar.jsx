import Logo from "./Logo";
import { PlainButton } from "./Button";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-navbar z-20 md:z-0 fixed md:absolute top-0 left-0">
      <div className="navbar max-w-5xl mx-auto relative">
        <div className="w-full flex justify-between items-center md:hidden px-4">
          <Logo location={"navbar"} />
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <details>
                  <summary>Pages</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a href="#team" className="text-black">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="#works" className="text-black">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a className="text-black">Pricing</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#details">Details</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <PlainButton text={"Request Quote"} />
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start text-white hidden md:flex">
          <ul className="menu menu-horizontal flex justify-between items-center px-1">
            <li>
              <a
                href="#home"
                className="border-r-1 px-4 py-0 border-nav-border rounded-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="border-r-1 px-4 py-0 border-nav-border rounded-none"
              >
                About
              </a>
            </li>
            <li>
              <details>
                <summary className="border-r-1 px-4 py-0 border-nav-border rounded-none">
                  Pages
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a href="#team" className="text-black">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#works" className="text-black">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="text-black">Pricing</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="#details"
                className="border-r-1 px-4 py-0 border-nav-border rounded-none"
              >
                Details
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="h-full hidden md:flex justify-between items-center absolute right-0 p-0 gap-12">
          <div className="items-center text-white w-32 justify-between flex gap-5 flex-row ">
            <a className="w-7 h-7" href="https://www.instagram.com/">
              <FaInstagram className="w-full h-full" />
            </a>

            <a className="w-7 h-7" href="https://web.facebook.com/">
              <FaFacebook className="w-full h-full" />
            </a>

            <a className="w-7 h-7" href="https://twitter.com/home">
              <FaTwitter className="w-full h-full" />
            </a>

            <a className="w-7 h-7" href=" https://www.linkedin.com/">
              <FaLinkedin className="w-full h-full" />
            </a>
          </div>
          <a
            href="#contact"
            className="btn h-full rounded-none bg-white font-normal"
          >
            Request Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
