/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        backgroundMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.25rem)' },
        },
        colorShift: {
          '0%, 100%': { color: '#22d3ee' },    // cyan-400
          '50%': { color: '#3b82f6' },         // blue-500
        },
      },
      animation: {
        flicker: 'flicker 1.5s infinite',
        bounceY: 'bounceY 1s infinite',
        colorShift: 'colorShift 3s ease-in-out infinite',
        'background-move': 'backgroundMove 30s linear infinite',
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
}
