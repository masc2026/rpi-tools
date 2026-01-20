/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '200': '200px',
        '350': '350px',
        '450': '450px',
        '550': '550px',
      }
    },
    screens: {
      's1': '465px',
      's2': '510px',
      's3': '620px',
      's4': '800px',
    },
  },
  plugins: [],
}