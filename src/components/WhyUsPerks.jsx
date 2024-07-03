/* eslint-disable react/prop-types */
const WhyUsPerks = ({ icon, iconAlt, text }) => {
  return (
    <div className="flex gap-4 min-w-48 justify-start items-center">
      <img src={icon} className="size-10" alt={iconAlt} />
      <p className="text-tag-secondary-text text-sm font-normal">{text}</p>
    </div>
  );
};

export default WhyUsPerks;
