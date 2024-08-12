/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#191920', // Comments bg
          dark: '#131319', // Main page bg
          medium: '#35373B', // Input border
          light: '#27292D', // Modal bg
        },
        gray: {
          light: '#C5C7CA', // Primary text
          medium: '#7F8084', // Secondary text
        },
        blue: {
          light: '#4A96FF', // Button bg
        },
      },
      fontSize: {
        base: [
          '1rem',
          {
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0.4px',
          },
        ],
        sm: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '16.94px',
            letterSpacing: '0.4px',
          },
        ],
        xs: [
          '0.75rem',
          {
            fontWeight: '400',
            lineHeight: '14.52px',
            letterSpacing: '0.6px',
          },
        ],
        lg: [
          '1.125rem',
          {
            fontWeight: '400',
            lineHeight: '21.78px',
            letterSpacing: '0.4px',
          },
        ],
        h1: [
          '1.75rem',
          {
            fontWeight: '400',
            lineHeight: '33.89px',
            letterSpacing: '0.8px',
          },
        ],
      },
    },
  },
  plugins: [],
};
