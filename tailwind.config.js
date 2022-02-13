module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'strongPulse 1s linear infinite',
      },
      keyframes: {
        strongPulse: {
          '0%': { opacity: '0.1' },
          '100%': { transform: '1' },
        }
      }
    }
  },
  plugins: [],
}
