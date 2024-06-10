import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1D2837',
        lightGrey: '#464F5B',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
