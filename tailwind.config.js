/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FF3811',
        'secondary-text-color': '#737373',
        'btn-hover-bg':'#c71007',
      },
    },
  },
  plugins: [require("daisyui")],
}

