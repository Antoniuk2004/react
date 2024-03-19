/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gradientColorStops: {
                'purple': '#8a53b6',
                'pink': '#cea2d0',
                'gradient-blue': '#57b5f9',
                'gradient-pink': '#da11ba'
            },
            backgroundColor: {
                'gray': '#f3f4f6',
                'add-button': '#E6E6E6E6',
                'footer-button': 'rgba(255,255,255,0.08)',
                'footer-hovered-button' : 'rgba(255,255,255,0.2)',
                'pay-button': '#3c4043',
                'input-separator' : 'rgba(118,118,118,0.2)'
            },
            borderColor: {
                'loader': 'rgba(95,95,217,.2)',
                'loader-side': '#5F5FD9',
                'add-button': '#ccc',
                'footer-button': 'rgba(255,255,255,0.4)'
            },
            width: {
                'gradient-canvas': '24.625rem',
                '85': '21.25rem',
                '0.25' : '0.0625rem'
            },
            borderRadius: {
                'gradient-canvas': '1.375rem'
            },
            height: {
                '25': '6.25rem',
                '14.5': '3.75rem',
                '6.5': '1.625rem',
                '13.5': '3.375rem',
                'input-separator' : 'calc(100% - 20px)'
            },
            textColor: {
                'default': 'rgba(27,28,33,0.4)',
                'low': 'rgba(179,9,83,0.5)',
                'normal': '#1B1C21FF'
            },
            padding: {
                '0.75': '0.19rem'
            },
            animation: {
                'shake': 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both 1',
            },
            spacing: {
                'splitter' : 'calc(25% - 15px)',
            },
        },
        keyframes: {
            'shake': {
                '0%': {'transform': 'translateX(0)'},
                '25%': {'transform': 'translateX(10px)'},
                '50%': {'transform': 'translateX(-10px)'},
                '75%': {'transform': 'translateX(10px)'},
                '100%': {'transform': 'translateX(0)'},
            },
        },
    },
    plugins: [],
}