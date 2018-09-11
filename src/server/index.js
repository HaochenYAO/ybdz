import Koa from 'koa';
import Router from 'koa-router';
import path from 'path';
import kstatic from 'koa-static';
import render from 'koa-ejs';

import config from './config';
import mongosdk from './sdk/mongosdk';
// todo
import { generateJdSchema, generateTmallSchema } from './model/generateSchema';


const app = new Koa();
const page = new Router();
const api = new Router();
const portDefault = 3006;
const assets = config('assets') || 'development';
mongosdk(config('mongo').host, config('mongo').port);

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

page
  .get('/', async (ctx, next) => {
    await next();
  })
  .get('/tick/:id', async (ctx, next) => {
    await next();
  })
  .get('/chart/:brand/:plateform/:field', async (ctx, next) => {
    await next();
  })
  .get('/todo', async (ctx, next) => {
    await next();
  })
  .get('/reddit', async (ctx, next) => {
    await next();
  })
  .use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  })
  .use(async (ctx) => {
    await ctx.render('index', { assetsPrefix });
  });
api.get('/data/:brand/:platform', async (ctx) => {
  const { platform, brand } = ctx.params;
  let Product;
  if (platform === 'jd') {
    Product = generateJdSchema(brand + platform);
  } else if (platform === 'tmall') {
    Product = generateTmallSchema(brand + platform);
  }

  const query = Product.find();
  const result = await query.exec();
  ctx.body = result;
});

app
  .use(page.routes())
  .use(page.allowedMethods())
  .use(api.routes())
  .use(api.allowedMethods());

app.listen(process.env.PORT || portDefault, () => {
  console.log('\x1b[36m%s\x1b[0m', `Listen to: ${portDefault}`);
});
