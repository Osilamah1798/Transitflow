import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        half: "0.5px",
      },
      colors: {
        "primary-2": "#091242",
        "primary-1": "#FFBE34",
        navbar: "#09124240",
        "nav-border": "#FFFFFF33",
        "tag-primary-bg": "#041C3780",
        "tag-secondary-bg": "#E8E8E880",
        "tag-secondary-text": "#1C1F35",
        "tag-contact-bg": "#E8E8E81A",
        "tag-gradient-yellow":
          "linear-gradient(to right, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
        "button-text": "#23212A",
        "button-secondary-outer": "#091242",
        "button-secondary-inner": "#1F2A69",
        "input-border": "#4E5683",
        "tertiary-text": "#666C89",
        "counter-border": "#D4D4D4",
        "service-border": "#D8D8D8",
        "work-color": "#FFB629",
        "whychoose-white": "#F4F4F4",
        services: "#666C89",
      },
    },
  },
  plugins: [daisyui],
};
