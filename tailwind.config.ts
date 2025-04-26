import type { Config } from "tailwindcss";
import animate from "tw-animate-css"; // ✅ now you can import animations here

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animate], // ✅ adding tw-animate-css here
};
export default config;
