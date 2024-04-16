/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'responsive': {'max': '760px'},
            },
            textColor: {
                primary: '#007AFF',
                gray: '#B9B9C3',
                body: '#575F6E',
                eye: '#D4D4D4',
                notification: '#242426',
                'notification-icon': '#79808F'
            },
            backgroundColor: {
                primary: '#007AFF',
                gray: '#B9B9C3',
                notification: '#F0F2F4',
                'light-cyan' : '#eef7fe'
            },
            borderColor: {
                separator: '#BBBFC1',
                primary: '#007AFF',
                gray: '#B9B9C3',
                'phone-number': '#E2E4E5'
            },
            margin: {},
            maxWidth: {
                114: '28.5rem',
            },
            width: {
                114: '28.5rem',
                108: '27rem',
                content: '28.5rem',
                74: '18.5rem',
                26.5: '6.625rem',
            },
            lineHeight: {
                5.5: '1.375rem',
                4.5: '1.125rem',
            },
            fontSize:{
                8: '2rem',
            },
            top: {
                phone: 'calc(100% + 1rem)',
            }
        },
    },
    plugins: [
        require('tailwindcss-textshadow'),
    ],
}