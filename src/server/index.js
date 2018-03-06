import Koa from 'koa';
import Router from 'koa-router';
import path from 'path';
import kstatic from 'koa-static';
import render from 'koa-ejs';

import config from './config';

const app = new Koa();
const router = new Router();
const portDefault = 3006;
const assets = config('assets') || 'development';
let assetsPrefix = '/';

if (assets === 'development') {
  assetsPrefix = 'http://localhost:3001/build/';
} else {
  app.use(kstatic(path.join(__dirname, '../../build')));
}

render(app, {
  root: path.join(__dirname, './views'),
  layout: '',
  viewExt: 'html',
  cache: false,
  debug: false
});

router.get('/', async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// response
app.use(async (ctx) => {
  await ctx.render('index', { assetsPrefix });
});

app.listen(process.env.PORT || portDefault, () => {
  console.log('\x1b[36m%s\x1b[0m', `Listen to: ${portDefault}`);
});
