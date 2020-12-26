const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        index: path.resolve(__dirname, 'src', 'App.tsx'),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true
                        }
                    }
                ],
            },
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('templates', 'index.html'),
            filename: path.resolve(__dirname, 'dist', 'index.html')
        })
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
};
