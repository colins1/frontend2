const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
	static: path.join(__dirname, 'src'),
	compress: true,
	port: 9000,
  },
};