let path = require("path"); //  подключили модуль "path": "^0.12.7",

let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"), // указываем путь папки  нашего проэкта с помощью модуля "path": "^0.12.7",
    filename: "main.js",
    publicPath: "dist/" // отправляем в папку "dist/"  файл точка входа в наше приложение ./src/index.js
  },
  devServer: {
    overlay: true
  }
};

module.exports = conf;
