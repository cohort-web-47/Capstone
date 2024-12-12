import {content, plugin} from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    content(),
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
// }
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',
        themeBackground: '#ECE5D5',
        themeNavbar: '#D1BBA0',
        themeProfile: '#F9F7F5',
        themeSearch: '#B6C1BF',
        themeHeader: '#F5F5E6',
        themeFontColor: '#1A1A1A',

      }
    }
  }
}

export default config