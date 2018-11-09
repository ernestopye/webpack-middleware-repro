var path = require('path');

module.exports = {
    entry: {
        main: './ClientApp/index.js'
    },
    resolve: { extensions: ['.js', '.ts'] },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    mode: 'development'
};