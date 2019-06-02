const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app'),
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    devServer: {
        port:3000,
        // which tells the server what actual directory to start serving content from
        contentBase: path.resolve(__dirname, 'build')
    },
    /**
     * test: /\.js$/ will find all the js file $ indicate it ends with js
     * exclude node_modules directory
     */
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};