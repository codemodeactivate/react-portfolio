/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'teal-1': '#DAF5F0',
        'teal-2': '#A7DBD8',
        'teal-3': '#87CEEB',
        'teal-4': '#69D2E7',
        'green-1': '#B5D2AD',
        'green-2': '#BAFCA2',
        'green-3': '#90EE90',
        'green-4': '#7FBC8C',
        'orange-4': '#E3A018',
        'yellow-1': '#FDFD96',
        'yellow-2': '#FFDB58',
        'yellow-3': '#F4D738',
        'orange-1': '#F8D6B3',
        'orange-2': '#FFA07A',
        'orange-3': '#FF7A5C',
        'pink-1': '#FCDFFF',
        'pink-2': '#FFC0CB',
        'pink-3': '#FFB2EF',
        'pink-4': '#FF69B4',
        'purple-1': '#E3DFF2',
        'purple-2': '#C4A1FF',
        'purple-3': '#A388EE',
        'purple-4': '#9723C9'
      }
    },
  },
  plugins: [],
}
