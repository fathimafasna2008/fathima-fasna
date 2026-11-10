/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0E0F0F',
        card: '#141515',
        cardHover: '#181919',
        offwhite: '#F2F2EC',
        muted: '#9A9A94',
        amber: {
          accent: '#E09F2F',
          hover: '#C98D26',
        },
        borderWhite: 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        widestMono: '0.22em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

