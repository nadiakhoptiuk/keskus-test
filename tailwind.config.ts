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

      fontFamily: {
        'kyiv-type-sans': ['var(--fonts-kyiv-type-sans)'],
        fixel: ['var(--fonts-fixel)'],
      },

      gridTemplateAreas: {
        sm: ['footerLogo', 'footerNav', 'contacts', 'socialLink', 'copyright'],
        md: ['footerLogo footerNav', 'contacts footerNav', 'socialLink copyright'],
        xl: ['footerLogo footerNav contacts', 'copyright footerNav socialLink'],
      },
      gridTemplateColumns: {
        sm: '1fr',
        md: 'auto 1fr',
        xl: '1fr 1fr 1fr',
      },
      gridTemplateRows: {
        sm: 'auto auto auto auto auto',
        md: 'auto auto auto',
        xl: 'auto auto',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
