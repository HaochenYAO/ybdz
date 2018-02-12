const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');
const react = require('koa-react-view');

const app = new Koa();
const router = new Router();
// const logger = require('koa-logger');
// const auth = require('koa-basic-auth');
const viewpath = path.join(__dirname, 'src/client/app');
react(app, {
	views: viewpath
});

router.get('/', async (ctx, next) => {
  await ctx.render('index', {name: 'yao'});
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 8000);
