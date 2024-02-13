module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        banner: "url('./assets/Banners.png')",
        services: "url('./assets/services.png')",
        projectOne: "url('/src/assets/resel.png')",
        
        projectTwo: "url('/src/assets/travel.png')",
        projectThree: "url('/src/assets/doctorportal.png')",
        projectFour: "url('/src/assets/Event.png')",
      
      },
    },
  },
  plugins: [],
};
