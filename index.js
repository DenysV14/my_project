require("babel-polyfill"); // нужен как минимум для поддержки асинхронных функций
require("babel-register"); // патчит require так что при импорте модуля его код преобразуеться на лету
require("./app/app.js");
