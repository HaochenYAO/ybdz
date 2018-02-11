const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
// const logger = require('koa-logger');
// const auth = require('koa-basic-auth');

router.get('/', async (ctx, next) => {
  const n = ctx.cookies.get('view') + 1;
  console.log(1);
  ctx.cookies.set('view', n);
  ctx.body = 'Bonjour World!';
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
  next(); // 调用下一个middleware
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 8000);
