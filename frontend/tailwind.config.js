/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: "#153535",
          emeraldLight: "#306A6A",
          gold: "#DBBB4F",
        },
      },
      backgroundImage: {
        'brand-gradient': `
          linear-gradient(
            to bottom,
            #153535 0%,
            #1B4545 35%,
            #1F4F4F 55%,
            #153535 100%
          )
        `,
      },
      
      
    },
  },
  plugins: [],
}
