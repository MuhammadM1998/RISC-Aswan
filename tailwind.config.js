module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            screens: {
                xs: '320px',
                xs: '480px',
            },

            colors: {
                primary: '#F07300',
                orange: '#ff7a00',
                yellow: {
                    100: '#F2994A',
                    200: '#F2C94C',
                },
                blue: '#01011B',
                'light-blue': '#EDF1FC',
                violet: '#4C4C77',
                gray: '#c3c3c3',
            },

            boxShadow: {
                hero: '0 -6rem 5rem -5rem black inset',
            },

            fontFamily: {
                sora: ['Sora', 'sans-serif'],
            },

            backgroundImage: {
                hero: "linear-gradient(rgba(1, 1, 27, 0.85), rgba(1, 1, 27, 0.85)), url('../images/intro/Hero-Background.webp')",
                team: "linear-gradient(rgba(1, 1, 27, 0.85), rgba(1, 1, 27, 0.85)), url('../images/team/All-Team.webp')",
                shadow: "url('../images/shared/Section-Shadow.svg')",
                navSticky: 'linear-gradient(rgba(1, 1, 27, 1), rgba(1, 1, 27, 0.9))',
                bodyDark: 'linear-gradient(rgba(1, 1, 27, 1), rgba(16, 16, 52, 1))',
                sliderEdge: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);',
                sliderEdgeDark: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-250 px * 12))' },
                },
            },
        },
    },
    plugins: [],
};