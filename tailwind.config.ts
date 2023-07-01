import type { Config } from 'tailwindcss';
// this type error should be fixed by the tailwindcss-animate team in the next week
import twAnimate from 'tailwindcss-animate';

type ColorValue = string;
interface ColorScheme {
  [color: string]: ColorValue | ColorScheme;
}

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
    lightest: '#F9F9F9',
  },
  gold: '#EEA820',
  beryl: '#3FCFAD',
  mosaic: '#24CAFF',
  heart: '#A52F76',
  ribbon: '#008FBD',
  success: '#20A585',
  danger: '#B71717',
} as const satisfies ColorScheme;

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
  muted: colorPalette.ash.light, // disabled background
  mutedForeground: colorPalette.ash.medium, // disabled/placeholder text color
  ring: colorPalette.ash.medium, // focus ring color
  input: colorPalette.ash.medium, // input unchecked background color
} as const;

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colorPalette,
        ...themeToken,
        // shadCN defaults
        destructive: {
          DEFAULT: '#ff0000',
          foreground: '#f8fafc',
        },
        accent: {
          DEFAULT: '#f1f5f9',
          foreground: '#0f1729',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0f1729',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f1729',
        },
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    borderRadius: {
      lg: '0.5rem',
      md: 'calc(0.5rem - 2px)',
      sm: 'calc(0.5rem - 4px)',
      full: '9999px',
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
  plugins: [twAnimate],
} satisfies Config;
