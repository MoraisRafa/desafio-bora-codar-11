/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx, js}"],
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        purple: '#7C3AED',
        gray50: '#F8FAFC',
        gray100: '#F1F5F9',
        gray200: '#E2E8F0',
        gray300: '#CBD5E1',
        gray400: '#94A3B8',
        gray500: '#64748B',
        gray600: '#475569',
        gray700: '#334155',
        gray800: '#1E293B',
        gray900: '#0F172A',
      },
      fontFamily: {
        sans: ['Titillium Web', 'sans-serif'],
      },
      width: {
        '1440': '1440px',
        '736': '736px',
        '351': '351px',
      },
      height: {
        '900': '900px',
        '119': '119px',
      }
    },
  },
  plugins: [],
}
