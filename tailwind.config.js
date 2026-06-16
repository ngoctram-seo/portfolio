/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        charcoal: '#0f1412',
        warm: '#f7f2ea',
        teal: '#0f766e',
        orange: '#f97316'
      },
      boxShadow: {
        glass: '0 24px 80px rgba(15, 20, 18, 0.18)'
      }
    }
  },
  plugins: []
};
