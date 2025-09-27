/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        primary: {
          DEFAULT: '#083D56', // Azul Oscuro
          50: '#E6F0F5',
          100: '#CCE1EB',
          200: '#99C3D7',
          300: '#66A5C3',
          400: '#3387AF',
          500: '#083D56', // Azul Oscuro principal
          600: '#063144',
          700: '#052533',
          800: '#031822',
          900: '#020C11',
        },
        secondary: {
          DEFAULT: '#E6A121', // Amarillo Dorado
          50: '#FDF4E3',
          100: '#FCE9C7',
          200: '#F9D38F',
          300: '#F5BD57',
          400: '#F2A71F',
          500: '#E6A121', // Amarillo Dorado principal
          600: '#B87E1A',
          700: '#8A5B14',
          800: '#5C3D0D',
          900: '#2E1E07',
        },
        accent: {
          DEFAULT: '#D8202F', // Rojo
          50: '#FBE9EA',
          100: '#F7D3D6',
          200: '#EFA7AC',
          300: '#E77B83',
          400: '#DF4F59',
          500: '#D8202F', // Rojo principal
          600: '#AD1A26',
          700: '#82131C',
          800: '#560D13',
          900: '#2B0609',
        },
        // Colores neutros
        neutral: {
          50: '#F8F9FA', // Fondo principal (Blanco Roto)
          100: '#E9ECEF',
          200: '#DEE2E6', // Bordes y separadores
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529', // Texto principal (Gris Oscuro)
          900: '#121416',
        },
        // Colores adicionales
        beige: {
          700: '#C2AC8C',
          750: '#BAA484',
          800: '#AC967A',
          850: '#9E8870',
          900: '#968068',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 2px 15px -3px rgba(0, 0, 0, 0.2), 0 10px 20px -2px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
