// const withCSS = require('@zeit/next-css');

// module.exports = withCSS();
// const withImages = require('next-images')
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
    target: 'serverless',
}
