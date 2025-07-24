import type { Config } from 'tailwindcss';
// this type error should be fixed by the tailwindcss-animate team soon
import twAnimate from 'tailwindcss-animate';
import containerQueries from '@tailwindcss/container-queries';
import { fontFamily } from 'tailwindcss/defaultTheme';
// for Editor's non controlling HTML elements like <h1>, <p>, <ul>, <li>, etc.
import twTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: '~',
  theme: {
    extend: {
      colors: {
        text: {
          pri: 'var(--color-grey-90)',
          sec: 'var(--color-grey-80)',
          opt: 'var(--color-grey-40)',
          brand: 'var(--color-primary-100)',
          cta: 'var(--color-cta-100)',
          cta2: 'var(--color-grey-0)',
          destructive: 'var(--color-red-500)',
          invert: 'var(--color-grey-0)',
        },
        surface: {
          pri: 'var(--color-grey-0)',
          sec: 'var(--color-grey-5)',
          opt: 'var(--color-grey-10)',
          more: 'var(--color-grey-0)',
          brand: 'var(--color-primary-100)',
          cta: 'var(--color-cta-100)',
          'cta-bg': 'var(--color-cta-15)',
          destructive: 'var(--color-red-500)',
          invert: 'var(--color-grey-90)',
        },
        icon: {
          pri: 'var(--color-grey-60)',
          sec: 'var(--color-grey-90)',
          brand: 'var(--color-primary-100)',
          cta: 'var(--color-cta-100)',
          destructive: 'var(--color-red-500)',
          invert: 'var(--color-grey-0)',
        },
        border: {
          pri: 'var(--color-grey-20)',
          sec: 'var(--color-grey-10)',
          opt: 'var(--color-grey-30)',
          brand: 'var(--color-primary-100)',
          cta: 'var(--color-cta-100)',
          destructive: 'var(--color-red-500)',
          invert: 'var(--color-grey-90)',
        },
      },

      spacing: {
        // Tailwind's default spacing includes '0': '0px'. We only add '50'.
        50: '4px',
      },
      borderRadius: {
        // Only adding sizes that are not default Tailwind values or are different
        sm: '2px', // Tailwind's default 'sm' is 0.125rem (2px). Matches, but keeping as per your input.
        DEFAULT: '4px', // Tailwind's default is 0.25rem (4px). Matches, but keeping as per your input.
        md: '8px', // Tailwind's default 'md' is 0.375rem (6px). Different.
        lg: '12px', // Tailwind's default 'lg' is 0.5rem (8px). Different.
        xl: '16px', // Tailwind's default 'xl' is 0.75rem (12px). Different.
        '2xl': '20px', // Tailwind's default '2xl' is 1rem (16px). Different.
        '3xl': '24px', // Tailwind's default '3xl' is 1.5rem (24px). Matches, but keeping as per your input.
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '52px',
      },
      fontSize: {
        // Only adding sizes that are not default Tailwind values.
        // Tailwind defaults are: xs(12px), sm(14px), base(16px), lg(18px), xl(20px), 2xl(24px), 3xl(30px), 4xl(36px), 5xl(48px), 6xl(60px), 7xl(72px), 8xl(96px), 9xl(128px)
        '2xs': '10px', // No default match
        m: '18px', // No default match
        '8xl': '52px', // Tailwind's 8xl is 96px.
        '9xl': '60px', // Tailwind's 9xl is 128px.
        '10xl': '68px', // No default match
        '11xl': '72px', // Tailwind's 7xl is 72px. Keeping as '11xl' for distinct utility name.
        '12xl': '96px', // Tailwind's 8xl is 96px. Keeping as '12xl' for distinct utility name.
        '13xl': '128px', // Tailwind's 9xl is 128px. Keeping as '13xl' for distinct utility name.
      },
      lineHeight: {
        // Tailwind defaults are unitless or rem-based. We're providing pixel values, so most will be unique.
        // I will keep all of your explicitly defined line heights as they are in pixels,
        // and Tailwind's defaults are typically unitless multiples of font-size or rem values.
        '3': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '13': '54px',
        '14': '60px',
        '15': '68px',
        '16': '72px',
        '17': '96px',
        '18': '120px',
        '19': '128px',
        '20': '136px',
        '21': '144px',
      },
      fontWeight: {
        // All these match Tailwind's default font weights, so we can effectively remove them
        // if the intention is to use the default utility classes (e.g., `font-light`, `font-normal`).
        // If you explicitly need to redefine them for some reason, keep them.
        // Removed: 'light': '300', 'normal': '400', 'medium': '500', 'semibold': '600', 'bold': '700'
      },
      letterSpacing: {
        // Tailwind defaults: 'tighter': '-0.05em', 'tight': '-0.025em', 'normal': '0em', 'wide': '0.025em', 'wider': '0.05em', 'widest': '0.1em'
        // Your values override 'wide', 'wider', 'widest' and add 'normal' explicitly.
        // 'normal': '0', // Matches Tailwind default, can be removed if not needed for explicit override
        wide: '0.04em', // Overrides Tailwind default (0.025em)
        wider: '0.08em', // Overrides Tailwind default (0.05em)
        widest: '0.16em', // Overrides Tailwind default (0.1em)
      },
      fontFamily: {
        // Setting 'sans' overrides the default sans-serif stack with your custom font.
        founders_grotesk: ['"Founders Grotesk"', 'sans-serif'],
        sans: ['"Founders Grotesk"', 'sans-serif'],
      },
      // Removed paragraphIndent, listSpacing, paragraphSpacing as their values are 0
      // and Tailwind does not have direct utilities for these with default 0 values that would need overriding.
      // If you intended to create custom utilities for these, you'd define them as plugins, not in `theme.extend`.
    },
  },
  plugins: [twAnimate, containerQueries, twTypography],
} satisfies Config;
