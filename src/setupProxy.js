// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.110.48.22:5000", // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
