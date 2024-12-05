const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/zybvue/'  // GitHub Pages 上的路径
    : '/'  // 本地开发时的路径
});