const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const axios = require('axios');

const router = new Router();
router.get('/hello', async (ctx, next) => {
  ctx.body = 'abc';
})

app.prepare().then(() => {
  const server = new Koa()  
  server.use(cors());

  server
    .use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })
    .use(router.routes())
    .use(async (ctx, next) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
      await next()
    })
    

  server.listen(3000, () => {
    console.log(`> Ready on http://localhost: 3000`)
  })
})
