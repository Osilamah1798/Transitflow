// Where Emmanuel will work
import Tag from "./Tag";
import NewsCard from "./NewsCard";
import { pageImages } from "../assets";
import Horizontal from "./Horizontal";
import { Button } from "./Button";

const Blog = () => {
  return (
    <div className="w-full 2xl:min-h-[600px] bg-white lg:min-h-dvh flex flex-col justify-center gap-8 items-center py-20">
      <div className="max-w-3xl w-full mx-auto items-center justify-center flex flex-col">
        <Tag text={"Our Blog"} state={"secondary"} />

        <h3 className="text-tag-secondary-text text-2xl m-2 p-2 md:text-3xl font-bold">
          Our Latest News
        </h3>

        <Horizontal />

        <div className="w-full">
          <NewsCard
            blogimg={pageImages.footcontainer}
            date={"08"}
            month={"September"}
            topic1={"Inland freight a worthy solution for your business "}
          />
        </div>

        <Horizontal />

        <div className="w-full">
          <NewsCard
            blogimg={pageImages.boxes}
            date={"12"}
            month={"September"}
            topic1={"How technology can help redraw the supply chain map "}
          />
        </div>

        <Horizontal />

        <div className="w-full">
          <NewsCard
            blogimg={pageImages.shipwater}
            date={"25"}
            month={"September"}
            topic1={"Five things you should have ready for your broker "}
          />
        </div>

        <Horizontal />

        <Button text={"More Blog"} state={"secondary"} />
      </div>
    </div>
  );
};

export default Blog;
