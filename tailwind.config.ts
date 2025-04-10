import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF6F1',
          100: '#F5EDE4',
          200: '#EFE4D7',
          300: '#E9DBCA',
          400: '#E3D2BD',
          500: '#DDC9B0',
        },
        olive: {
          50: '#F4F6F1',
          100: '#E2E7D7',
          200: '#95A67C',
          300: '#839666',
          400: '#718650',
          500: '#5F763A',
          600: '#4D6624',
          700: '#3B560E',
          800: '#294600',
        },
        emerald: {
          600: '#95A67C',
          700: '#839666',
        }
      },
    },
  },
  plugins: [],
};

export default config; 