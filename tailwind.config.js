/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#0a0e18',
          800: '#0f1626',
          700: '#161e33',
          600: '#1e2a47',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-slower': 'float-slower 12s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
