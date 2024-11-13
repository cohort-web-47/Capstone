/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import {content, plugin} from "flowbite-react/tailwind"


const config: Config = {
  content: [
    content(),
    "./src-1/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  // theme: {
  //   extend: {},
  //     colors: {
  //       transparent: 'transparent',
  //       current: 'currentColor',
  //       'background': '#ECE5D5',
  //       'navbar': '#D1BBA0',
  //       'profile': '#F9F7F5',
  //       'search': '#B6C1BF',
  //       'header': '#F5F5E6',
  //       'font': '#1A1A1A',
  //     },
  // },
  // darkTheme: "dark",
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(),
  ],
}

export default config