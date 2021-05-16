const colors = require('windicss/colors')

export default {
    theme: {
        fontFamily: {
            sans: 'Nunito Sans',
            serif: 'Lora',
        },
        colors: {
            transparent: 'transparent',
            black: colors.black,
            white: colors.white,
            brand: {
                "50": "#F1F3F2",
                "100": "#D9DEDB",
                "200": "#C1C8C3",
                "300": "#A8B3AC",
                "400": "#909D95",
                "500": "#77887D",
                "600": "#606C64",
                "700": "#48514B",
                "800": "#303632",
                "900": "#181B19"
            },

            grey: colors.gray,
            red: colors.rose,
            orange: colors.orange,
            blue: colors.lightBlue,
            // Configure your color palette here
        },
        zIndex: {
            auto: 'auto',
            'negative': '-1',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
        },
        extend: {
            fontFamily: {
                // sans: ['Nunito Sans', 'system-ui'],
                display: ['Heart Breath DEMO'],
            },
        },
    },
    // extract: {
    //     include: ['./**/*.html'],
    // },
    shortcuts: {
        'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    },
    plugins: [
        // require('windicss/plugin/typography'),
        require('windicss/plugin/scroll-snap'),
        require('windicss/plugin/forms'),
        require('windicss/plugin/aspect-ratio'),
    ],
}