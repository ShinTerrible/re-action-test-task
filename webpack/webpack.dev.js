const path = require('path') //для того чтобы превратить относительный путь в абсолютный, мы будем использовать пакет path
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') //Чтобы React не сбрасывал свои состояния при сохранении файлов

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
		// compress: true, // это ускорит загрузку в режиме разработки
		port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
		open: true, // сайт будет открываться сам при запуске npm run dev
		hot: true,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
}
