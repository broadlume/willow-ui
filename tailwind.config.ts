import type { Config } from 'tailwindcss';
// this type error should be fixed by the tailwindcss-animate team in the next week
import twAnimate from 'tailwindcss-animate';

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
        ...themeColors,
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
