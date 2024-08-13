/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [
    [
      function ({ addUtilities }) {
        const newUtilities = {
          '.autofill': {
            '-webkit-box-shadow': '0 0 0 1000px transparent inset',
            'box-shadow': '0 0 0 1000px transparent inset',
            '-webkit-text-fill-color': 'inherit',
          },
        };
        addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
      }
    ],
  ],
}

