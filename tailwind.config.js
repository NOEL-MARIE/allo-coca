/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          black: '#000000',
          transparent: 'rgba(255, 255, 255, 0)', // transparent blanc 0%
        },
        noirCoca: {
          50: '#fefefe',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#8b8b8b',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#464646',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
        brandCoca: {
          50: '#fff1f2',
          100: '#fddfe2',
          200: '#f9c4c9',
          300: '#f799a3',
          400: '#ff626f',
          500: '#ff3041',
          600: '#711123',
          700: '#bd061c',
          800: '#a70c19',
          900: '#8a121c',
          950: '#840310',
        },
      },
      fontFamily: {
        TCCCUnityHeadline: ['TCCC-UnityHeadline', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['90px'],
        'display-xl': ['56px'],
        'display-lg': ['36px'],
        'display-md': ['30px'],
        'display-sm': ['24px'],
        'display-xs': ['20px'],
        'text-xl': ['18px'],
        'text-lg': ['16px'],
        'text-md': ['14px'],
        'text-sm': ['12px'],
      },
    },
  },
  plugins: [],
}
