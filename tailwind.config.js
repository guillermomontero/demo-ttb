/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      fontSize: {
        'xxs': '.60rem',
      },
      minHeight: {
        '16':'4rem',
        '44':'11rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.2)',
      },
      colors: {
        green: {
          main: 'rgba(var(--green-main), <alpha-value>)',
          'main-hover': 'rgba(var(--green-main-hover), <alpha-value>)',
        },
        orange: {
          main: 'rgba(var(--orange-main), <alpha-value>)',
          'main-hover': 'rgba(var(--orange-main-hover), <alpha-value>)'
        },
        white: {
          main: 'rgba(var(--white-main), <alpha-value>)'
        },
        neutral: {
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        gray: {
          700: '#374151',
          bg: 'rgba(var(--gray-bg), <alpha-value>)',
        }
      },
      gridTemplateColumns: {
        'auto-fit-225': 'repeat(auto-fit, minmax(225px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(80px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      screens: {
        'sm': '500px',
        'md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          // {'min': '668px', 'max': '767px'},
          {'min': '768px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      },
      keyframes: {
        'fly-to-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
        
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        }
      }
    }
   
    // width: {
    //   '24': '24px'

    // }
    // backgroundImage: {
    //   'hero-pattern': "url('/img/hero-pattern.svg')",
    //   'footer-texture': "url('/img/footer-texture.png')",
    // }
  },
  plugins: [],
}
