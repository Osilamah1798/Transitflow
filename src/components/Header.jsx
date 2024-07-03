import { pageIcons } from "../assets";
import ContactOption from "./ContactOption";
import Logo from "./Logo";

// Where Emmanuel Obi will work
const Header = () => {
  return (
    <header
      id="home"
      className="hidden md:block w-full h-32 bg-primary-2 md:px-6 lg:px-0"
    >
      <div className="max-w-5xl h-full mx-auto flex justify-between items-center">
        <Logo location={"header"} />

        <div className="flex gap-4 justify-between items-center">
          <ContactOption
            icon={pageIcons.timerIcon}
            iconAlt={"Timer Icon"}
            text={["Mon - Sat 9.00 - 18.00", "Sunday Closed"]}
          />
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
      </div>
    </header>
  );
};

export default Header;
