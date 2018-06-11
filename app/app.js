// раздавать статику через nginx
// на продакшене собирать все приложение через вебпак потому что время ответа после перезагрузки ноды несколько секунд
import  Koa from 'koa';
import bodyParser from 'koa-bodyparser'; // парсит post запросы, есть ограничение на размер запроса
import convert from 'koa-convert'; // конвертация устаревших модулей (из генераторов в промисы)
import config from 'config'; // позволяет импортить config/default без указания пути
import router from './routes';

let app = new Koa();

/*парсинг post запросов*/
app.use(convert(bodyParser())); // конвертировать что бы парсер понимал raw формат

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.server.port, function () {
    console.log('listen on port' + config.server.port);
});