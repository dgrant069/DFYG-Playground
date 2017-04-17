/* global __dirname, module */

const path = require('path');

const ENV = process.env.ENV;

const shouldWatch = (environment) => {
    if(environment === "DEV") {
        return true;
    } else if(environment === "PROD") {
        return false;
    } else {
        throw "error: no env indicated";
    }
};

const outputDestination = (environment) => {
    if (environment === "DEV") {
        return 'public';
    } else if (environment === "PROD") {
        return 'dist';
    } else {
        throw "error: no env indicated";
    }
};

module.exports = {
    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, outputDestination(ENV)),
        filename: '[name].bundle.js'
    },

    watch: shouldWatch(ENV),

    // This tells Webpack to create source map files.
    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            // CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },

            // JSON Loader
            {
                test: /\.json$/,
                loader: 'json-loader'
            },

            // Fonts. Need for font-awesome
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },

            // Images
            {
                test: /\.(svg|png|jpg|gif)(\?.*)?/,
                loader: 'url-loader'
            },
        ]
    },

    // Config for Webpack Dev Server
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        inline: true,
        port: 4000,
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          'jwplayer': path.resolve(__dirname, 'src/assets/libs/jwplayer.js')
        },
    },

    externals: {
      'window': 'window'
    }
};
