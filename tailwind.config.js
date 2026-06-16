/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#0f172a',
        body: '#475569',
        paper: '#f4f7fd',
        teal: '#0d9488',
        indigo: '#6366f1',
        sky: '#0ea5e9',
        coral: '#fb7185',
        amber: '#f59e0b',
        /* aliases kept so any leftover classes still resolve */
        charcoal: '#0f172a',
        warm: '#f4f7fd',
        orange: '#f59e0b'
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(30, 41, 59, 0.25)',
        glow: '0 10px 40px -8px rgba(99, 102, 241, 0.45)'
      }
    }
  },
  plugins: []
};
