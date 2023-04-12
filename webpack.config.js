module.exports = { 
    entry: './src/index.js', 
    module: {
    rules:[
        {
            test: /\.js$/,
            use: [
                "@babel/preset-env"
            ]
        }
    ]

},
// plugins:[
//     new HtmlWebpackPlugin({
//         template: "./src/index.html"
//     }),
//     new MiniCSSExtractPlugin()

// ]
}