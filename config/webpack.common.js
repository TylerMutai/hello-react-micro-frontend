const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require("../package.json");
const deps = require('../package.json').dependencies;

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-react", {
                            "runtime": "automatic"
                        }]],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico',
            title: "Leta Technologies"
        }),
        new ModuleFederationPlugin({
            name: 'helloReact',
            filename: 'remoteEntry.js',
            exposes: {
                './HelloReactApp': './src/bootstrap'
            },
            shared: {
                ...packageJson.dependencies, react: {
                    requiredVersion: deps.react,
                    eager: true,
                }
            }
        })
    ]
}