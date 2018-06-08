import  Koa from 'koa';
import bodyParser from 'koa-bodyparser';


let app = new Koa();

app.use(bodyParser());

app.use(async ctx => {
    console.log('ctx.request.body', ctx.request.body);
    ctx.body = ctx.request.body;
});

app.listen(3000, function () {
    console.log('listen on port 3000');
});