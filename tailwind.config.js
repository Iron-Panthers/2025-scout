/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // These colors are from the branding bible - don't ask me 🤷‍♂️
        "red-primary": "#9A0000",
        "red-secondary": "#C80F14",
        "grey-primary": "#CCCCCC",
        "black-primary": "#1A1A1A",
        "off-black": "#333333",
      },
      fontFamily: {
        brand: ["Teko", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
