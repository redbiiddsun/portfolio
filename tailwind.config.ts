import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
			sans: ['Roboto', 'sans-serif']
		},
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(210px, 1fr))",
        auto: "auto"
    },
    gridTemplateRows: {
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
        auto: "auto"
    },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config
