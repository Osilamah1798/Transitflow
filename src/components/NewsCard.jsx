/* eslint-disable react/prop-types */
import { pageIcons } from "../assets";

const NewsCard = ({ blogimg, date, month, topic1 }) => {
  return (
    <div className="w-full flex flex-col justify-center md:flex-row">
      <div className="relative w-[50%] h-full sm:hidden md:flex flex-col hidden">
        <img className="h-full object-contain z-20 hover:z-0 " src={blogimg} />
        <div className="w-[80%] h-[80%] bg-[#1C1F35]/[91%] transition cursor-pointer top-[11%] left-[10%] text-white text-center py-20 absolute hover:z-20 ">
          Read more
        </div>
      </div>

      <div className="flex flex-col sm:flex-row ">
        <div className="flex flex-col mx-4 items-center justify-start">
          <img
            className="size-12 object-contain"
            src={pageIcons.calenderIcon}
          />

          <h1 className="text-tag-secondary-text text-3xl font-bold mt-1">
            {date}
          </h1>

          <p className="text-[#666C89] font-krub text-sm">{month}</p>
        </div>

        <div className=" border-l-1 border-[#D6D6D6] w-0 mr-5 "></div>
      </div>

      <div className="w-full md:w-[35%] px-10 py-5 md:px-0 md:py-0">
        <h2 className="text-tag-secondary-text text-left text-xl cursor-pointer hover:text-primary-1 ">
          {topic1}
        </h2>

        <p className="text-[#666C89] font-light pt-2 text-sm">
          We are dedicated in creating added value for our customers by
          implementing modern technology in our work.
        </p>

        <ul className="list-disc pt-2 pl-6  text-sm font-light">
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
};

export default NewsCard;
