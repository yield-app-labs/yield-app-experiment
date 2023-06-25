/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#104499",
        "primary-light": "#2b5bad",
        "primary-dark": "#0e0e28",
        black: {
          900: "#1D1E22",
        },
        gray: {
          500: "#6b6d76",
        },
      },
    },
  },
  plugins: [],
};
