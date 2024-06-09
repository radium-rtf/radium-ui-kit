import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      xs: '0.5rem',
      sm: '0.625rem',
      base: '0.8125rem',
      lg: '1.25rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    container: {
      center: true,
      padding: '3rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        NTSomic: ['var(--font-nt-somic)', { fontFeatureSettings: '"salt" on' }],
      },
      typography: {
        'no-margin': {
          css: {
            'blockquote p': { marginTop: '0px', marginBottom: '0px' },
            'blockquote p:first-of-type::after': { content: 'none' },
            'blockquote p:first-of-type::before': { content: 'none' },
          },
        },
        default: {
          css: {
            '--tw-prose-body': '#E6E6E6',
            '--tw-prose-headings': '#E6E6E6',
            '--tw-prose-lead': '#E6E6E6',
            '--tw-prose-links': '#E6E6E6',
            '--tw-prose-bold': '#E6E6E6',
            '--tw-prose-counters': '#E6E6E6',
            '--tw-prose-bullets': '#E6E6E6',
            '--tw-prose-hr': '#E6E6E6',
            '--tw-prose-quotes': '#E6E6E6',
            '--tw-prose-quote-borders': '#E6E6E6',
            '--tw-prose-captions': '#E6E6E6',
            '--tw-prose-code': '#E6E6E6',
            '--tw-prose-pre-code': '#E6E6E6',
            '--tw-prose-pre-bg': 'transparent',
            '--tw-prose-th-borders': '#E6E6E6',
            '--tw-prose-td-borders': '#E6E6E6',
            '--tw-prose-invert-body': '#E6E6E6',
            '--tw-prose-invert-headings': '#E6E6E6',
            '--tw-prose-invert-lead': '#E6E6E6',
            '--tw-prose-invert-links': '#E6E6E6',
            '--tw-prose-invert-bold': '#E6E6E6',
            '--tw-prose-invert-counters': '#E6E6E6',
            '--tw-prose-invert-bullets': '#E6E6E6',
            '--tw-prose-invert-hr': '#E6E6E6',
            '--tw-prose-invert-quotes': '#E6E6E6',
            '--tw-prose-invert-quote-borders': '#E6E6E6',
            '--tw-prose-invert-captions': '#E6E6E6',
            '--tw-prose-invert-code': '#E6E6E6',
            '--tw-prose-invert-pre-code': '#E6E6E6',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': '#E6E6E6',
            '--tw-prose-invert-td-borders': '#E6E6E6',
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          hover: 'hsl(var(--destructive-hover))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          hover: 'hsl(var(--accent-hover))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          hover: 'hsl(var(--card-hover))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // New
        backgroundHeader: 'hsl(var(--background-header))',
        backgroundPage: 'hsl(var(--background-page))',
        backgroundOverlay: 'hsl(var(--background-overlay))',

        outlineGeneral: 'var(--outline-general)',

        whiteLight: 'var(--white-light)',
        whiteMedium: 'hsl(var(--white-medium))',
        whiteHard: 'hsl(var(--white-hard))',
        whiteHeavy: 'hsl(var(--white-heavy))',

        blackLight: 'hsl(var(--black-light))',
        blackMedium: 'hsl(var(--black-medium))',
        blackHard: 'hsl(var(--black-hard))',

        'accent-primary': {
          DEFAULT: 'var(--accent-primary-regular)',
          foreground: 'hsl(var(--accent-primary-foreground))',
          disabled: 'hsl(var(--accent-primary-disabled))',
          hovered: 'hsl(var(--accent-primary-hovered))',
          pressed: 'hsl(var(--accent-primary-pressed))',
        },

        'accent-secondary': {
          DEFAULT: 'hsl(var(--accent-secondary-regular))',
          foreground: 'hsl(var(--accent-secondary-foreground))',
          disabled: 'hsl(var(--accent-secondary-disabled))',
          hovered: 'hsl(var(--accent-secondary-hovered))',
          pressed: 'hsl(var(--accent-secondary-pressed))',
        },

        'accent-destructive': {
          DEFAULT: 'hsl(var(--accent-destructive-regular))',
          foreground: 'hsl(var(--accent-destructive-foreground))',
          disabled: 'hsl(var(--accent-destructive-disabled))',
          hovered: 'hsl(var(--accent-destructive-hovered))',
          pressed: 'hsl(var(--accent-destructive-pressed))',
        },
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          keyword: 'hsl(var(--text-keyword))',
          method: 'hsl(var(--text-method))',
          type: 'hsl(var(--text-type))',
          macro: 'hsl(var(--text-macro))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
export default config;
