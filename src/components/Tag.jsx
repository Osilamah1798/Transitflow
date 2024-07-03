/* eslint-disable react/prop-types */
// Where Emmanuel Obi will work

const Tag = ({ text, state }) => {
  return (
    <span
      className={`text-xs w-fit font-normal border-l-4 border-yellow-400 ${
        state === "secondary" ? "text-tag-secondary-text" : "text-white"
      } p-2 ${
        state === "primary"
          ? "bg-tag-primary-bg"
          : state === "contact"
          ? "bg-tag-contact-bg"
          : "bg-tag-secondary-bg"
      }`}
    >
      {text}
    </span>
  );
};

export default Tag;
