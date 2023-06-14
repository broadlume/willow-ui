import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wool: {
          dark: '#FBF9F4',
          DEFAULT: '#FFF8E6',
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
      },
    },
  },
  plugins: [],
} satisfies Config;
