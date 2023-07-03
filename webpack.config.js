const path = require('path');
const HTMLWebpackplugin = require('html-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
    entry: './public/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HTMLWebpackplugin({
            template: './public/index.html'
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.'),
            args: "--log-level warn",
            extraArgs: '--no-typescript'
        })
    ],
    experiments: {
        asyncWebAssembly: true
    }
}