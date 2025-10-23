import Koa from 'koa';
import Router from '@koa/router';
import http from 'http';

const app = new Koa();
const router = new Router();

// 场景1: 用户显式设置 404
router.get('/explicit-404', async (ctx) => {
  ctx.status = 404;
  ctx.body = { error: 'Not Found', message: 'Resource not found' };
});

// 场景2: 用户忘记设置 body（Koa 自动 404）
router.get('/empty-handler', async (ctx) => {
  // 什么都不做，Koa 会自动设置 404
});

// 场景3: 用户设置了 body
router.get('/with-body', async (ctx) => {
  ctx.body = { message: 'Hello' };
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());

server.listen(9999, async () => {
  console.log('Server running on http://localhost:9999\n');
  
  // 测试各个场景
  const scenarios = [
    { url: 'http://localhost:9999/explicit-404', name: '场景1: 显式 404' },
    { url: 'http://localhost:9999/empty-handler', name: '场景2: 空 handler' },
    { url: 'http://localhost:9999/with-body', name: '场景3: 有 body' },
    { url: 'http://localhost:9999/not-exist', name: '场景4: 路由不存在' },
  ];
  
  for (const scenario of scenarios) {
    try {
      console.log(`\n=== ${scenario.name} ===`);
      const response = await fetch(scenario.url);
      console.log('Status:', response.status);
      console.log('Headers:', Object.fromEntries(response.headers));
      const body = await response.text();
      console.log('Body:', body);
      console.log('Body type:', typeof body);
      console.log('Body length:', body.length);
      console.log('Body === "Not Found":', body === 'Not Found');
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
  
  server.close();
});
