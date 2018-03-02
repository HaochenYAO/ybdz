import Koa from 'koa';
import views from 'koa-views';
import Router from 'koa-router';
import path from 'path';
import kstatic from 'koa-static';

const app = new Koa();
const router = new Router();
const portDefault = 3006;

app.use(kstatic(path.join(__dirname, '../client/build')));
app.use(views(path.join(__dirname, './views'), {
  extension: 'html'
}));

router.get('/', async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// response
app.use(async (ctx) => {
  await ctx.render('index.html');
});
console.log('Listen to:', portDefault);
app.listen(process.env.PORT || portDefault);
