const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let CleanWebpackPlugin = require("clean-webpack-plugin");
let dataArr = require("./src/js/list.json");

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.(jpg|png|gif|jpeg)$/,
            loader: "url-loader",
            options: {
                limit: 4000,
                name: "./img/[name].[ext]"
            }
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(woff|ttf|eot|svg)$/,
            loader: "file-loader",
            options: {
                name: "./fonts/[name].[ext]"
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 8080,
        open: true,
        inline: true,
        before(app) {
            app.get("/getData", (req, res, next) => {
                res.send({
                    code: 1,
                    data: dataArr
                })
            })
        }
    }
}