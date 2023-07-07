import type { Config } from 'tailwindcss';
// this type error should be fixed by the tailwindcss-animate team in the next week
import twAnimate from 'tailwindcss-animate';

const colorPalette = {
  wool: {
    DEFAULT: '#FFF8E6',
    dark: '#FBF9F4',
    light: '#FFFDF8',
  },
  ash: {
    DEFAULT: '#221E20',
    medium: '#747474',
    light: '#D1D1D1',
    lighter: '#E8E8E8',
    lightest: '#F9F9F9',
  },
  gold: '#EEA820',
  beryl: '#3FCFAD',
  mosaic: '#24CAFF',
  heart: '#A52F76',
  ribbon: '#008FBD',
  success: '#20A585',
  danger: '#B71717',
} as const;

const themeToken = {
  background: 'white', // site background
  foreground: colorPalette.ash.DEFAULT, // site text
  border: colorPalette.ash.medium, // default borders
  primary: colorPalette.heart, // site primary component background
  primaryForeground: 'white', // site primary component text
  primaryHover: 'white',
  primaryForegroundHover: colorPalette.heart,
  secondary: colorPalette.ash.DEFAULT,
  secondaryForeground: 'white',
  secondaryHover: 'white',
  secondaryForegroundHover: colorPalette.ash.DEFAULT,
  secondaryDark: 'white',
  secondaryDarkForeground: colorPalette.ash.DEFAULT,
  secondaryDarkHover: colorPalette.ash.DEFAULT,
  secondaryDarkForegroundHover: 'white',
  muted: colorPalette.ash.lighter, // disabled background
  mutedForeground: colorPalette.ash.medium, // disabled/placeholder text color
  ring: colorPalette.ash.medium, // focus ring color
  input: colorPalette.ash.medium, // input unchecked background color
  accent: colorPalette.ash.lightest, // background hover color
  accentForeground: colorPalette.ash.medium, // background hover text
  active: colorPalette.ash.lighter, // active background color
} as const;

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        ...colorPalette,
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
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
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
  plugins: [twAnimate],
} satisfies Config;
