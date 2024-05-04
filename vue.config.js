const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
	// 基本路径
	publicPath: './',
	lintOnSave: false,
	transpileDependencies: true, 
	productionSourceMap: false, 
});
