import type { Config } from 'tailwindcss';
// this type error should be fixed by the tailwindcss-animate team soon
import twAnimate from 'tailwindcss-animate';
import containerQueries from '@tailwindcss/container-queries';
import { fontFamily } from 'tailwindcss/defaultTheme';

const baseRem = 16;
const getSize = (rems: number) => `${rems * baseRem}px`;

export const colorPalette = {
  wool: {
    DEFAULT: 'hsl(var(--wool))',
    dark: 'hsl(var(--wool-dark))',
    light: 'hsl(var(--wool-light))',
  },
  ash: {
    DEFAULT: 'hsl(var(--ash))',
    medium: 'hsl(var(--ash-medium))',
    light: 'hsl(var(--ash-light))',
    lighter: 'hsl(var(--ash-lighter))',
    lightest: 'hsl(var(--ash-lightest))',
  },
  gold: 'hsl(var(--gold))',
  beryl: 'hsl(var(--beryl))',
  mosaic: 'hsl(var(--mosaic))',
  heart: 'hsl(var(--heart))',
  ribbon: 'hsl(var(--ribbon))',
  junglegreen: 'hsl(var(--junglegreen))',
  danger: 'hsl(var(--danger))',
} as const;

export const themeColors = {
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
    foreground: 'hsl(var(--destructive-foreground))',
  },
  success: {
    DEFAULT: 'hsl(var(--success))',
    foreground: 'hsl(var(--success-foreground))',
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
};

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: '~',
  corePlugins: {
    preflight: false,
  },
  theme: {
    container: {
      center: true,
      padding: '2em',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        ...colorPalette,
        ...themeColors,
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
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
        'scale-up': {
          from: { transform: 'scaleY(0)', transformOrigin: 'bottom' },
          to: { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scale-up': 'scale-up 0.5s ease-out',
      },
      // because consuming apps that use the stupid "font-size: 62.5%" html hack throw off rem units
      spacing: {
        '0': '0px',
        '1': '0.25em',
        '2': '0.5em',
        '3': '0.75em',
        '4': '1em',
        '5': '1.25em',
        '6': '1.5em',
        '7': '1.75em',
        '8': '2em',
        '9': '2.25em',
        '10': '2.5em',
        '11': '2.75em',
        '12': '3em',
        '14': '3.5em',
        '16': '4em',
        '20': '5em',
        '24': '6em',
        '28': '7em',
        '32': '8em',
        '36': '9em',
        '40': '10em',
        '44': '11em',
        '48': '12em',
        '52': '13em',
        '56': '14em',
        '60': '15em',
        '64': '16em',
        '72': '18em',
        '80': '20em',
        '96': '24em',
        px: '1px',
        '0.5': '0.125em',
        '1.5': '0.375em',
        '2.5': '0.625em',
        '3.5': '0.875em',
      },
      lineHeight: {
        '3': '.75em',
        '4': '1em',
        '5': '1.25em',
        '6': '1.5em',
        '7': '1.75em',
        '8': '2em',
        '9': '2.25em',
        '10': '2.5em',
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      fontSize: {
        xs: [getSize(0.75), { lineHeight: getSize(1) }],
        sm: [getSize(0.875), { lineHeight: getSize(1.25) }],
        base: [getSize(1), { lineHeight: getSize(1.5) }],
        lg: [getSize(1.125), { lineHeight: getSize(1.75) }],
        xl: [getSize(1.25), { lineHeight: getSize(1.75) }],
        '2xl': [getSize(1.5), { lineHeight: getSize(2) }],
        '3xl': [getSize(1.875), { lineHeight: getSize(2.25) }],
        '4xl': [getSize(2.25), { lineHeight: getSize(2.5) }],
        '5xl': [getSize(3), { lineHeight: '1' }],
        '6xl': [getSize(3.75), { lineHeight: '1' }],
        '7xl': [getSize(4.5), { lineHeight: '1' }],
        '8xl': [getSize(6), { lineHeight: '1' }],
        '9xl': [getSize(8), { lineHeight: '1' }],
      },
    },
  },
  plugins: [twAnimate, containerQueries],
} satisfies Config;
