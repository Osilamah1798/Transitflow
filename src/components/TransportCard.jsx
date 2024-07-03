/* eslint-disable react/prop-types */

const TransportCard = ({ cardInfo }) => {
  return (
    <div className="relative w-[90%] md:w-[19%]">
      <img src={cardInfo.image} alt="liquid" />
      <div className="absolute bottom-0 w-full p-4">
        <p className="text-sm text-white">{cardInfo.title}</p>
        <p className="text-work-color text-xs font-krub">{cardInfo.desc}</p>
      </div>
    </div>
  );
};

export default TransportCard;
