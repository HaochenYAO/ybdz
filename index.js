const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');

const app = new Koa();
const router = new Router();
// const logger = require('koa-logger');
// const auth = require('koa-basic-auth');
app.use(views(path.join(__dirname, '/src/views'), { extension: 'ejs' }));

router.get('/', async (ctx, next) => {
  await ctx.render('welcome');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 8000);
