import type { Config } from 'tailwindcss';

require('tailwindcss/colors');

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        blue: {
          600: '#2E58A1',
        },
        yellow: {
          400: '#F7D747',
        },
        zinc: {
          50: '#FAFAFA',
          500: '#737482',
        },
      },

      container: {
        center: true,
        padding: '20px',
      },

      fontFamily: {
        'kyiv-type-sans': ['var(--fonts-kyiv-type-sans)'],
        fixel: ['var(--fonts-fixel)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
