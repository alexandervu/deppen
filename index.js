const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World - extendet 3';
});

app.listen(process.env.PORT || 3000);
