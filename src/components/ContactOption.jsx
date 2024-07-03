/* eslint-disable react/prop-types */

// Where Emmanuel Obi will work

const ContactOption = ({ icon, iconAlt, text, link }) => {
  return (
    
      <a href={link}  className="flex gap-4 justify-between items-center">
      <img src={icon} className="size-12" alt={iconAlt} />
      <p className="text-white text-xs font-normal">
        {text[0]} <br /> {text[1]}
      </p>
      </a>
    
  );
};

export default ContactOption;
