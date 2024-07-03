// Where Moses will work
import { pageIcons, pageImages } from "../assets";
import Tag from "./Tag";
import Reveal from "./Reveal";

const Testimonials = () => {
  return (
    <section
      id="details"
      className="w-full 2xl:min-h-[700px] flex flex-col py-20 justify-center items-center min-h-[50dvh] bg-white"
    >
      <Reveal
        styles={
          "max-w-3xl w-full mx-auto py-16 px-8 lg:p-0 flex flex-col lg:flex-row gap-10 justify-between md:items-start items-center"
        }
      >
        <div className="flex flex-col w-full">
          <Tag text={"Testimonial"} state={"secondary"} />
          <div className="flex w-full justify-between items-center">
            <p className="text-xl md:text-2xl my-3 font-medium text-tag-secondary-text">
              What Our Customer Say
            </p>
            <img
              src={pageIcons.arrowIcon}
              alt="arrow"
              className="size-16 md:size-20 cursor-pointer"
            />
          </div>
          <div className="w-full flex-col md:flex-row flex justify-between items-center">
            <div className="p-10 bg-whychoose-white  flex flex-col justify-between items-start">
              <div className="flex justify-between items-center w-full gap-3 mb-6">
                <img className="size-14" src={pageImages.himImg} alt="him" />
                <div className="flex-grow">
                  <p className="text-sm text-primary-2">Kathleen Smith</p>
                  <p className="text-xs text-primary-2">Fuel Company</p>
                </div>
                <img
                  className="size-12"
                  src={pageImages.quoteImg}
                  alt="quote"
                />
              </div>
              <p className="font-normal text-xs font-krub italic text-services mb-6">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <img src={pageImages.starImg} alt="star" className="w-32" />
            </div>
            <div className="p-10 bg-primary-2  flex flex-col justify-between items-start">
              <div className="flex justify-between items-center w-full gap-3 mb-6">
                <img className="size-14" src={pageImages.johnImg} alt="him" />
                <div className="flex-grow">
                  <p className="text-sm text-white">John Martin</p>
                  <p className="text-xs text-white">Restoration Company</p>
                </div>
                <img
                  className="size-12"
                  src={pageImages.quoteImg}
                  alt="quote"
                />
              </div>
              <p className="font-normal text-xs font-krub italic text-white mb-6">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <img src={pageImages.starImg} alt="star" className="w-32" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Testimonials;
