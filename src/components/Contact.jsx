// Where Gafar will work

import { pageIcons, pageImages } from "../assets";
import Tag from "./Tag";
import ContactOption from "./ContactOption";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-dvh 2xl:min-h-[750px] py-20 bg-primary-2 w-full flex justify-center items-center text-white"
    >
      <div className="max-w-5xl mx-auto flex flex-col justify-between items-center gap-10 py-16 md:py-0 lg:px-0 md:px-6 px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="flex flex-col justify-between items-start w-full md:w-[80%] lg:w-[40%]">
            <Tag text={"Contact"} state={"contact"} />
            <p className="text-2xl md:text-4xl my-3 font-medium text-white">
              Get in touch with us
            </p>

            <p className="font-krub text-sm text-white">
              leverage agile frameworks to provide a robust <br /> synopsis for
              strategy foster collaborative <br /> thinking to further the
              overall value.
            </p>
            <div className="w-full flex flex-col justify-between items-start py-3 gap-6">
              <ContactOption
                icon={pageIcons.mailIcon}
                iconAlt={"Mail Icon"}
                text={["Email", "contact@logistics.com"]}
              />
              <ContactOption
                icon={pageIcons.phoneIcon}
                iconAlt={"Phone Icon"}
                text={["Call Us", "(00) 112 365 489"]}
              />
              <ContactOption
                icon={pageIcons.timerIcon}
                iconAlt={"Timer Icon"}
                text={["Mon - Sat 9.00 - 18.00", "Sunday Closed"]}
              />
            </div>
          </div>

          <ContactForm />
        </div>
        <img
          src={pageImages.contactClientImg}
          alt="contact client"
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default Contact;
