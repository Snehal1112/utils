const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'utils.js',
        library: 'utils',
        libraryTarget: 'umd',
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.js$/, //using regex to tell babel exactly what files to transcompile
            exclude: /node_modules/, // files to be ignored
            use: {
                loader: 'babel-loader' // specify the loader
            } 
        }]
    }
}