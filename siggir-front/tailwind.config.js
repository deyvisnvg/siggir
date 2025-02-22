/** @type {import('tailwindcss').Config} */
/* const withMT = require("@material-tailwind/react/utils/withMT"); */

import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default keepTheme(config);