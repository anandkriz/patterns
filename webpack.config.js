
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         path: path.join(__dirname, "./dist"), // the bundle output path
//         filename: "[name].bundle.js", // the name of the bundle
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/, // excluding the node_modules folder
//                 use: {
//                     loader: "babel-loader",
//                 },
//             },
//             {
//                 test: /\.(sa|sc|c)ss$/,
//                 use: ["style-loader", "css-loader", "sass-loader"],
//             },
//             {
//                 test: /\.ico$/,
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]',
//                 },
//             },
//             {
//                 test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//                 loader: "url-loader",
//                 options: { limit: false },
//             },
//         ],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./public/index.html",
//             path: "index.html"
//         }),
//     ],
// };




// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
// const glob = require("glob");

// const PATHS = {
//     src: path.join(__dirname, "src"),
// };
// module.exports = {

//     mode: "production",

//     entry: {
//         index: './src/index.js',
//     },
//     output: {
//         filename: 'js/pattern.[name].[contenthash].js',
//         path: path.resolve(__dirname, 'build'),
//         // chunkFilename: "[name].js"
//     },

//     optimization: {
//         // usedExports: true,
//         // minimize: true,
//         minimizer: [
//             new TerserPlugin({
//                 parallel: true,
//                 terserOptions: {
//                     ecma: 8
//                 }
//             }),
//             new OptimizeCSSAssetsPlugin({})
//         ],
//         // splitChunks: {
//         //     cacheGroups: {
//         //         styles: {
//         //             name: "styles",
//         //             test: /\.css$/,
//         //             chunks: "all",
//         //             enforce: true,
//         //         },
//         //     },
//         // },

//     },

//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/, // excluding the node_modules folder
//                 use: {
//                     loader: "babel-loader",
//                 },
//             },
//             {
//                 test: /\.(sa|sc|c)ss$/,
//                 use: ["style-loader", "css-loader", "sass-loader"],
//             },
//             {
//                 test: /\.ico$/,
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]',
//                 },
//             },
//             {
//                 test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//                 loader: "url-loader",
//                 options: { limit: false },
//             },

//         ],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./public/index.html",
//             path: "index.html"
//         }),
//         new MiniCssExtractPlugin({
//             filename: "[name].css",
//         }),
//         // new PurgeCSSPlugin({
//         //     paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
//         // }),
//         new PurgeCSSPlugin({
//             // paths: glob.sync(`${PATHS.srcPath}/**/*`, { nodir: true }),
//             // defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//             // rejected: true, // Enable this option
//             // output: path.resolve(__dirname, 'path/to/rejected.json'), // Specify the output path

//             paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
//             safelist: ['open', 'open-mobile'],
//             defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//             fontFace: true,
//             variables: true,
//             keyframes: true,
//             // rejected: true,
//             // output: path.resolve(__dirname, './src/want.json'),
//         }),
//     ],
// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

const PATHS = {
    src: path.join(__dirname, "src"),

};

module.exports = {
    mode: "production",
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'js/pattern.[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 8
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            path: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
            safelist: ['open', 'open-mobile'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            fontFace: true,
            variables: true,
            keyframes: true,
        }),
    ],
};