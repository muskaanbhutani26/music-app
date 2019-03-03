const PROXY_CONFIG = [
   
      {
          context: [
              "/api","/sts"
          ],
          target: "https://api.deezer.com/",
          secure: false,
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          },
          logLevel: "debug"
      }
  ];
  
  module.exports = PROXY_CONFIG;