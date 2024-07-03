import Logo from "./Logo";

const FooterHead = () => {
  return (
    <div className="bg-white/[8%] w-full hidden md:flex min-h-24">
      <div className="max-w-4xl w-full gap-10 flex justify-start items-center  text-center text-2xl text-white mx-auto">
        <div className="bg-primary-2 h-full min-w-80 px-6 flex justify-start items-center">
          <Logo location={"header"} />
        </div>

        <div className="">
          <h4 className="text-xl text-white p-2 ">Pages</h4>
        </div>

        <div className="ml-2">
          <h4 className="text-xl p-2">Utility</h4>
        </div>

        <div className="">
          <h4 className="text-xl p-2 ">Subscribe</h4>
        </div>
      </div>
    </div>
  );
};

export default FooterHead;
