const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['poppins', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      'size-1': '0.83rem',
      'size-2': '0.92rem',
      'size-3': '1rem',
      'size-4': '1.08rem',
      'size-5': '1.17rem',
      'size-6': '1.25rem',
      'size-7': '1.5rem',
      'size-8': '1.67rem',
    }, borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '1rem': '1rem'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        DEFAULT: '#109CF1',
        light: '#34AFF9',
        dark: '#334D6E',
      },
      yellow: '#FFB948',
      red: '#F76858',
      green: '#2ED47A',
      purple: '#885AF8',
      black: {
        table: '#323C46',
        DEFAULT: '#192A3E',
      },
      gray: {
        table: '#707684',
        DEFAULT: '#90A0B7',
        icon: '#C2CFE0',
        bg: '#F5F6F8',
        popup: 'rgba(0, 0, 0, 0.6)'
      },
      white: '#FFFFFF'
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
