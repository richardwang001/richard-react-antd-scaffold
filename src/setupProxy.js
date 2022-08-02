const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:4523/m1/1389712-0-default',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
  )
}

