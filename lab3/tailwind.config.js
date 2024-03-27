/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        textShadow: {
            default: 'rgb(35, 50, 64) 2px 2px',
            'color-code': 'rgb(51, 55, 58) 1px 1px'
        },
        extend: {
            textColor: {
                gray: 'rgb(232, 230, 227)'
            },
            fontSize: {
                title: '7.5rem',
                'color-code': '2rem'
            },
            backgroundColor: {
                home: 'rgb(46, 49, 156)',
                item: 'rgb(24, 26, 27)',
                animation: 'rgb(24, 26, 27)',
                title: 'rgba(24, 26, 27, 0.2)',
                footer: 'rgba(10, 29, 78, 0.65)'
            },
            backgroundImage: {
                homeImg: 'url(https://flatuicolors.com/static/img/stars-opacity.0979c1.svg)'
            },
            borderRadius: {
                item: '0.25rem'
            },
            animation: {
                slideToLeft: 'slideToLeft 1s linear forwards;',
                slideToRight: 'slideToRight 1s linear forwards;',
            },
            minHeight: {
                'home': 'calc(100svh - 23rem)'
            },
            height: {
                '12.5': '3.125rem',
                '30': '7.5rem',
                'palette-grid': 'calc(100svh - 6.25rem)',
            },
            width: {
                '67.5': '16.875rem',
                '25': '6.25rem'
            },
            padding: {
                '7.5': '1.875rem'
            },
            borderColor: {
                gray: '#ecf0f1',
                dark: 'rgb(53, 57, 59)',
                'copy-button': 'rgba(48, 52, 54, 0.2)',
            },
            margin: {
                '13': '3.25rem'
            },
            lineHeight: {
                '27.5': '6.875rem'
            }
        },
        keyframes: {
            slideToLeft: {
                '0%': {'left': '200%'},
                '100%': {'left': '-100%'},
            },
            slideToRight: {
                '0%': {'right': '200%'},
                '100%': {'right': '-100%'},
            }
        },
    },
    plugins: [
        require('tailwindcss-textshadow'),
    ],
}