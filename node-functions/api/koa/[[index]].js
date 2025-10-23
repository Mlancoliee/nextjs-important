import Koa from 'koa';
import Router from '@koa/router';
import path from 'path';
import fs from 'fs';
import mime from 'mime-types';

// 创建 Koa 应用
const app = new Koa();
const router = new Router();

// 添加一些中间件
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// 定义路由
router.get('/', async (ctx) => {

  console.log('test/');
  ctx.body = { message: 'Hello from Koa!' };
});

router.get('/test1', async (ctx) => {
  test = 0
  ctx.body = { users: ['user1', 'user2', 'user3'] };
});

router.get('/test2', async (ctx) => {
  ctx.status = 500;
  ctx.body = { users: ['user1', 'user2', '502'] };
});

router.get('/test3', async (ctx) => {
  // 场景5：真正的无响应 - 阻止 Koa 自动发送响应
  ctx.respond = false;
});

router.post('/users', async (ctx) => {
  // 这里应该有请求体解析的中间件，但为了示例简单起见，我们假设数据已经解析
  ctx.body = { message: 'User created' };
  ctx.status = 201;
});

router.get('/req-headers', async (ctx) => {
  ctx.body = ctx.request.headers;
  ctx.status = 200;
});


// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 导出处理函数
export default app;