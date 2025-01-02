/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'insta-gradient': 'linear-gradient(344deg, rgba(242,203,58,1) 8%, rgba(219,3,15,1) 35%, rgba(137,18,191,1) 83%, rgba(174,36,247,1) 100%)',
      },
    },
  },
  plugins: [],
}

