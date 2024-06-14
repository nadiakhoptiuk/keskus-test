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
        footerSm: ['footerLogo', 'footerNav', 'contacts', 'socialLink', 'copyright'],
        footerMd: ['footerLogo footerNav', 'contacts footerNav', 'socialLink copyright'],
        footerXl: ['footerLogo footerNav contacts', 'copyright footerNav socialLink'],

        announcementSm: ['title', 'calendar', 'announcements'],
        announcementMd: ['title calendar', 'announcements announcements'],
        announcementXl: ['title title', 'announcements calendar'],
      },
      gridTemplateColumns: {
        sm: '1fr',
        md: 'auto 1fr',
        xl: '1fr 1fr',

        announcementSm: '1fr',
        announcementMd: '1fr 1fr',
        announcementXl: '1fr auto',
      },
      gridTemplateRows: {
        sm: 'auto auto auto auto auto',
        md: 'auto auto auto',
        xl: 'auto auto',

        announcementSm: 'auto auto auto',
        announcementMd: 'auto auto',
        announcementXl: 'auto auto',
      },

      screens: {
        sm: '480px',
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
