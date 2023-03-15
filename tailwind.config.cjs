/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('../src/assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('../src/assets/home/background-home-mobile.jpg')",
        "crew-desktop": "url('../src/assets/crew/background-crew-desktop.jpg')",
        "crew-mobile": "url('../src/assets/crew/background-crew-mobile.jpg')",
        "destination-desktop": "url('../src/assets/destination/background-destination-desktop.jpg')",
        "destination-mobile": "url('../src/assets/destination/background-destination-mobile.jpg')",
        "technology-desktop": "url('../src/assets/technology/background-technology-desktop.jpg')",
        "technology-mobile": "url('../src/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [],
}