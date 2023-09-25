/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'black': {
          400: "#0C0D0E"
        },
        'cyan': {
          350: "#2FB0B6"
        },
        'yellow': {
          350: "#E4BD00"
        }
      },
      backgroundImage: {
        'hero-home': "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/img/hero-bg2.jpeg')",
        'solution-1': "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 100%), url('/img/home/solution-historieta.png')",
        'solution-2': "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 100%), url('/img/home/solution-fotografia.png')",
        'solution-3': "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 100%), url('/img/home/solution-mural.png')",
        'solution-4': "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 100%), url('/img/home/solution-burilado.png')",
        'solution-5': "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 100%), url('/img/home/solution-podcast.png')",
        'solution-6': "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 100%), url('/img/home/solution-stop-motion.png')",
        'solution-7': "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 100%), url('/img/home/solution-mascaras.png')",
        'art': "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/img/arte/hero.jpeg')",
        'creation': "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/img/creacion/hero.jpg')",
        'impact': "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/img/impacto/hero.jpg')"
      },
      fontSize: {
        '2.5xl': '1.75rem'
      },
      letterSpacing: {
        'header': '0.015rem',
        'body': '0.01rem'
      },
      borderWidth: {
        '0.5': '0.5px'
      }
    },
  },
  plugins: [],
}

