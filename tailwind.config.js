/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "heroImg": "url('/src/img/hero.png')"
      },
      colors: {
        "primary": "#0C4C9C",
        "secondary": "#549FE1"
      },
      backgroundSize: {
        "size-100": "200% 200%"
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%"
      }
    },
  },
  plugins: [],
}
