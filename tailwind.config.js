/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FFFBF7',
          100: '#F7F3EC',
          200: '#EFE9DF',
          300: '#E5DED1',
          400: '#D8CEB9',
          500: '#C9BC9C',
        },
        olive: {
          50: '#F4F6F1',
          100: '#E8EBE2',
          200: '#A4B68C',
          300: '#8FA578',
          400: '#7A9164',
          500: '#657F50',
          600: '#506B3C',
          700: '#3B572B',
          800: '#2A4320',
          900: '#1A2F14',
        },
        sage: {
          100: '#E9EDE4',
          200: '#D3DBCA',
          300: '#BDC9B0',
          400: '#A7B796',
          500: '#91A57C',
        },
        gold: {
          100: '#FFF8E6',
          200: '#FFE5B2',
          300: '#FFD27F',
          400: '#FFBF4C',
          500: '#FFB01A',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 15px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
} 