/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "black": "#000000",
      "yellow": "#fff159",
      "blue": "#3483fa",
      "green": "#63c894",
      "green2": "#39b54a",
      "blueLight": "#abc7f1",
      "text": "#e9eaea",
      "gray": "#6d5766",
      "white": "#FFFFFF",
      "bgColor": "#ededed",

    },
  },
  plugins: [],
}
