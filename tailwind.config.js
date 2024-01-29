// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1.000) both',
      },
      keyframes: {
        'scale-up-center': {
          '0%': {
            transform: 'scale(0.5)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      linearGradientColors: {
        'textgradient': ['89.97deg', '#AE67FA 1.84%', '#F49867 102.67%'],
        'bar': ['103.22deg', '#AE67FA -13.86%', '#F49867 99.55%'],
      },
      backgroundColor: {
        'bg': '#040C18',
        'footer': '#031B34',
        'blog': '#042c54',
      },
      textColor: {
        'text': '#81AFDD',
        'subtext': '#FF8A71',
      },
    },
  },
  variants: {},
  plugins: [
    // Add any plugins here
  ],
};
