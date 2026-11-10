/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          void: '#030509',
          abyss: '#070a13',
          midnight: '#0d1322',
          surface: '#121a2f',
          elevated: '#17223b',
          border: '#1f2e4d',
        },
        gold: {
          radiant: '#fdf3d8',
          light: '#f5e4b3',
          antique: '#d4af37',
          deep: '#b58d28',
          shadow: '#735712',
        },
        bronze: {
          light: '#c89d7c',
          warm: '#9b6b43',
          deep: '#694324',
        },
        parchment: {
          light: '#f7f4ec',
          DEFAULT: '#eae4d3',
          dark: '#c4baa2',
          muted: '#8e8673',
        },
        vermilion: {
          glow: '#ff4d4d',
          sacred: '#9c2626',
          deep: '#681515',
        },
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cinzelDeco: ['"Cinzel Decorative"', 'serif'],
        eczar: ['"Eczar"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        rozha: ['"Rozha One"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'cosmos-radial': 'radial-gradient(ellipse at 50% 0%, #15203a 0%, #070a13 55%, #030509 100%)',
        'sacred-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12) 0%, rgba(7, 10, 19, 0) 70%)',
        'gold-gradient': 'linear-gradient(135deg, #fdf3d8 0%, #d4af37 50%, #9b6b43 100%)',
      },
      boxShadow: {
        'gold-subtle': '0 0 20px -3px rgba(212, 175, 55, 0.15)',
        'gold-glow': '0 0 35px -2px rgba(212, 175, 55, 0.28)',
        'sacred-halo': '0 0 60px 10px rgba(212, 175, 55, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-out': 'fadeOut 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
