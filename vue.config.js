module.exports = {
    // 配置postcss-pxtorem
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        unitPrecision: 5,
                        propList: ['*'],
                        selectorBlackList: [],
                        replace: true,
                        mediaQuery: false,
                        minPixelValue: 0,
                        exclude: /node_modules/i
                    })
                ]
            }
        }
    },
    // 配置代理 http-proxy-middleware
    devServer: {
        proxy: {
            '/api': {
                target: 'http://musicapi.sanrenyan.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '/'
                }
            }
        }
    }
}