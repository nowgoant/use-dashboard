const path = require('path')

export default {
  entry: 'src/index.js',
  "disableCSSModules": false,
  "publicPath": "/",
  "theme": {
    "@primary-color": "#1DA57A",
    "@link-color": "#1DA57A",
    "@border-radius-base": "2px",
    "@font-size-base": "16px",
    "@line-height-base": "1.2"
  },
  "autoprefixer": null,
  // 接口代理示例
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    }
  },
  "dllPlugin": {
    "exclude": [
      "babel-runtime"
    ],
    "include": [
      "dva/router",
      "dva/saga",
      "dva/fetch"
    ]
  }
}
