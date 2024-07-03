import ContactOption from "./ContactOption";
import { pageIcons } from "../assets";
import { FooterButton } from "./Button";
import Logo from "./Logo";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const FooterLinks = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const subscribe = () => {
    let url =
      "https://sheet.best/api/sheets/7eb35805-27ea-4ad9-a319-06a37d459e44";

    if (email !== "") {
      setLoading(() => true);
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((d) => d.json())
        .then(() => {
          setEmail("");
          toast("👍 You have subscribed!");
          setLoading(() => false);
        })
        .catch((err) => {
          console.log({ err });
          setLoading(() => false);
        });
    } else {
      toast.error("Please enter your email address");
    }
  };
  return (
    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12 justify-between items-start pt-10 pb-20 text-[#E8E8E8] text-sm mx-auto font-light">
      <div className="min-w-80 flex gap-3 px-6 flex-col justify-start items-start">
        <div className="md:hidden">
          <Logo location={"header"} />
        </div>
        <p>
          Leverage agile frameworks to provide a <br />
          robust synopsis for strategy collaborative
          <br />
          thinking to further the overall value
          <br />
          proposition.
        </p>
        <ContactOption
          icon={pageIcons.mailIcon}
          iconAlt={"Mail Icon"}
          text={["Email", "contact@logistics.com"]}
          link={"mailto:contact@logistics.com"}
        />
        <ContactOption
          icon={pageIcons.phoneIcon}
          iconAlt={"Phone Icon"}
          text={["Call Us", "(00) 112 365 489"]}
          link={"tel:(00)-112-365-489"}
        />
      </div>

      <ul className="flex-grow px-10 md:px-0 flex flex-col justify-between items-start gap-3">
        <h3 className="md:hidden text-xl font-medium">Pages</h3>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#team">Our Team</a>
        </li>
        <li>
          <a href="#works">Our Project</a>
        </li>
        <li>
          <a href="#details">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <ul className="flex-grow px-10 md:px-0 flex flex-col justify-between items-start gap-3">
        <h3 className="md:hidden text-xl font-medium">Utility</h3>
        <li>
          <a href="">Style Guide</a>
        </li>
        <li>
          <a href="">Changelog</a>
        </li>
        <li>
          <a href="">Liscences</a>
        </li>
        <li>
          <a href="">Protected</a>
        </li>
        <li>
          <a href="">Not Found</a>
        </li>
      </ul>

      <div className="px-10 md:px-0">
        <h3 className="md:hidden text-xl font-medium mb-2">Subscribe</h3>
        <div className=" w-72 flex flex-row flex-wrap justify-between gap-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email here*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 bg-primary-2 border-1 pl-4 placeholder:text-base font-spartan"
          />

          <div className="flex flex-row gap-4 justify-between">
            <FooterButton
              text={"Send Now"}
              onClick={subscribe}
              loading={loading}
            />
            <div className="items-center flex gap-6 justify-around flex-row">
              <a className="w-5 h-5" href=" https://www.linkedin.com/">
                <FaLinkedin className="w-full h-full" />
              </a>

              <a className="w-5 h-5" href="https://twitter.com/home">
                <FaTwitter className="w-full h-full" />
              </a>

              <a className="w-5 h-5" href="https://web.facebook.com/">
                <FaFacebook className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
