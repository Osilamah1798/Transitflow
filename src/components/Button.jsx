/* eslint-disable react/prop-types */
// Where Emmanuel Obi will work

export const Button = ({ text, state, onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        state === "primary"
          ? "bg-gradient-to-r from-[#FFB629] from-10% [#FFDA56] via-30% to-[#FFD7A6] to-90% before:bg-white text-button-text"
          : "bg-button-secondary-outer before:bg-button-secondary-inner text-white"
      } before:ease relative font-krub z-[1] h-12 w-44 overflow-hidden  before:absolute  before:left-[83%]  before:top-[60%] before:rounded-full before:border-white before:-z-[-1]  before:transition-all before:h-24 before:w-24 before:duration-1000 hover:before:top-full hover:before:left-full hover:before:-z-[-1] hover:before:translate-x-[-54.2%] hover:before:-translate-y-2/4 before:translate-x-[-10.2%] before:-translate-y-[10%] hover:before:h-48 hover:before:w-48`}
    >
      <span className="relative z-10">{loading ? "loading..." : text}</span>
    </button>
  );
};

export const PlainButton = ({ text, state, onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      className={` ${
        state === "primary"
          ? "bg-gradient-to-r from-[#FFB629] from-10% [#FFDA56] via-30% to-[#FFD7A6] to-90% text-button-text"
          : "bg-button-secondary-outer text-white"
      } relative flex justify-center items-center font-krub z-[1] h-12 w-44`}
    >
      <span className="relative z-10">{loading ? "loading..." : text}</span>
    </button>
  );
};

export const FooterButton = ({ text, onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      className="relative font-krub z-[1] h-14 w-36 text-button-text
    bg-gradient-to-r from-[#FFB629] from-10% [#FFDA56] via-30% to-[#FFD7A6] to-90%"
    >
      <span className="relative z-10">{loading ? "loading..." : text}</span>
    </button>
  );
};
