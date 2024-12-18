import type { Config } from 'tailwindcss';

require('tailwindcss/colors');
import plugin from 'tailwindcss/plugin';

import { PluginUtils } from './app/(shared)/types/common.types';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      screens: {
        sm: '480px',
      },

      colors: {
        black: '#0A0A0A',
        grey: '#D5D4DF',
        blue: {
          50: '#EFF6FF',
          600: '#2E58A1',
        },
        red: {
          500: '#F43F5E',
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

      spacing: {
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
        400: '100rem',
        450: '112.5rem',
      },

      content: {
        'grain-left-blue': 'url("/decor/grain-left-blue-decor.svg")',
        'grain-right-blue': 'url("/decor/grain-right-blue-decor.svg")',
        'grain-left-yellow': 'url("/decor/grain-left-decor.svg")',
        'grain-right-yellow': 'url("/decor/grain-right-decor.svg")',
        'arrow-dropdown': 'url("/icons/arrow-dropdown.svg")',
        'arrow-gallery': 'url("/icons/arrow-gallery.svg")',
      },

      dropShadow: {
        xl: 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25)',
      },

      fontSize: {
        // reg_16 - 400 16px

        // ----------------------------- LIGHT -----------------------------
        ui_light_12: [
          '12px',
          {
            lineHeight: '1.33',
            fontWeight: '300',
          },
        ],

        ui_light_14: [
          '14px',
          {
            lineHeight: '1.33',
            fontWeight: '300',
          },
        ],

        // ----------------------------- REGULAR -----------------------------
        ui_reg_14: [
          '14px',
          {
            lineHeight: '1.14',
            fontWeight: '400',
          },
        ],

        ui_reg_16: [
          '16px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],

        ui_reg_18: [
          '18px',
          {
            lineHeight: '1.56',
            fontWeight: '400',
          },
        ],

        // ----------------------------- MEDIUM -----------------------------

        ui_med_14: [
          '14px',
          {
            lineHeight: '1.5',
            fontWeight: '500',
          },
        ],

        ui_med_16: [
          '16px',
          {
            lineHeight: '1.5',
            fontWeight: '500',
          },
        ],

        ui_med_18: [
          '18px',
          {
            lineHeight: '1.56',
            fontWeight: '500',
          },
        ],

        ui_med_20: [
          '20px',
          {
            lineHeight: '1.6',
            fontWeight: '500',
          },
        ],

        ui_med_36: [
          '36px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],

        // ----------------------------- SEMIBOLD -----------------------------

        ui_semibold_14: [
          '14px',
          {
            lineHeight: '1.14',
            fontWeight: '600',
          },
        ],

        ui_semibold_16: [
          '16px',
          {
            lineHeight: '1.14',
            fontWeight: '600',
          },
        ],

        ui_semibold_18: [
          '18px',
          {
            lineHeight: '1.56',
            fontWeight: '600',
          },
        ],

        // ----------------------------- BOLD -----------------------------

        ui_bold_20: [
          '20px',
          {
            lineHeight: '1.4',
            fontWeight: '700',
          },
        ],

        ui_bold_24: [
          '24px',
          {
            lineHeight: '1.14',
            fontWeight: '700',
          },
        ],

        ui_bold_28: [
          '28px',
          {
            lineHeight: '1.14',
            fontWeight: '700',
          },
        ],

        ui_bold_32: [
          '32px',
          {
            lineHeight: '1.13',
            fontWeight: '700',
          },
        ],

        ui_bold_40: [
          '40px',
          {
            lineHeight: '1.2',
            fontWeight: '700',
          },
        ],

        ui_bold_44: [
          '44px',
          {
            lineHeight: '1.18',
            fontWeight: '700',
          },
        ],

        ui_bold_60: [
          '60px',
          {
            lineHeight: '1',
            fontWeight: '700',
          },
        ],

        ui_bold_68: [
          '68px',
          {
            lineHeight: '1.18',
            fontWeight: '700',
          },
        ],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }: PluginUtils) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
export default config;
