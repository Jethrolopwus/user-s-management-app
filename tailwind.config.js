/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"];
export const theme = {
  extend: {
    fontFamily:{
      Monserrat: ['Monserrat', "san-serif"],
      Mulish: ['Mulish', "san-serif"],
      Anton: ['Anton', "san-serif"],
      Gotham: ['Gotham', "san-serif"],
    },
    colors: {
      gray: {
        200: "#121212",
        400: "#B0B0B0",
        800: "#272727",
      },
      blue: {
        600: "#4C50A9",
      },
      yellow: {
        600: "#FCB541",
      },
      orange: {
        100: "rgb(255 237 213)",
      },

      indigo: {
        400: "#1977F3",
        700: "#15174D",
      },
    },
  },
};
export const plugins = [];
