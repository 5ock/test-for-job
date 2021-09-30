const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  	mode: 'development', // production or development
  	entry: './index.js', //bundle的進入點
  	output: {
  		path: path.resolve(__dirname, 'dist'), //打包後的檔案位置，以此為例會放在名為dist的資料夾
  		filename: 'bundle.js', //打包後的檔案名稱
  	},
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
  	    ],
    },
  	plugins: [
  		new HtmlWebpackPlugin({
  		template: path.resolve(__dirname, 'index.html')
  		}),
  	],
  	//增加一個給devserver的設定
  	devServer: {
  		port: 3000,
  		hot: true
  	},
  	// debug
  	devtool: 'source-map',
}