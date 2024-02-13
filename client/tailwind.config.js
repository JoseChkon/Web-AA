/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#FFF3F0",
          200: "#FEEDE9",
          300: "#FDE5E3",
          400: "#FBDEDF",
          500: "FAD9DD",
        },
        brown: {
          100: "#AD8B73",
          200: "#836853",
          300: "#553636",
          400: "#322312",
        },
      },
      backgroundImage: {
        cupcake:
          "url('https://static.tildacdn.com/tild6332-6562-4139-b834-326466336138/_1.jpg')",
      },
      fontFamily: {
        "Cinze" : ['CinzelD'],
        "Montserrat" : ['Montserrat']
      }
    },
  },
  plugins: [nextui()],
};
