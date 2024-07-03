/* eslint-disable react/prop-types */
const ServiceCard = ({ icon, iconAlt, text }) => {
  return (
    <div className="flex justify-between items-start gap-6">
      <img src={icon} alt={iconAlt} className="size-12" />
      <div className="flex flex-col justify-between gap-2 items-center border-l-1 border-service-border px-6">
        <p className="text-left w-full font-normal text-lg text-tag-secondary-text">
          {text}
        </p>
        <p className="font-medium font-krub text-xs text-services">
          Following the quality of our service <br /> thus having gained trust
          of our <br /> many clients.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
