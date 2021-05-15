// const withCSS = require('@zeit/next-css');

// module.exports = withCSS();

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default;

module.exports = {
    webpack: config => {
        config.plugins.push(new WindiCSSWebpackPlugin({
            scan: {
                dirs: ['./'],
                exclude: ['node_modules', '.git', '.next/**/*'],
            },

        }))
        return config
    },
}
