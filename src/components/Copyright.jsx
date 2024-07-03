const Copyright = () => {
  return (
    <div className="text-center border-t-1 border-input-border w-full text-xs bg-primary-2 p-3">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
        <p>
          Copyright © TransitFlow | Designed by Group A{" "}
          <br className="md:hidden" />- Powered by Univelcity.
        </p>

        <div className="flex gap-3 cursor-pointer text-center text-[#8388A7]">
          <p>Style</p>
          <p>Guide</p>
          <p>Licenses </p>
          <p>Changelog</p>
          <p>Password</p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
