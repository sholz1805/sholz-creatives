module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2C2E5F",
          secondary: "#8B42F1",
          accent: "#CC66FF",
          background: "#EDF1FD",
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.5s ease-out',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }