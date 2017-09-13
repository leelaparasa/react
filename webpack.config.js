let webpack = require('webpack');
let path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                },
                //loaders: ["react-hot-loader/webpack", "babel?presets[]=react,presets[]=es2015"]
                loader:'babel-loader'
                //use: ['react-hot-loader', 'babel-loader']
            }
        ]
    }
    /*    plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoErrorsPlugin()
     ]*/
};