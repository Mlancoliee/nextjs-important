import { Hono } from 'hono';

const app = new Hono();

// 场景1: 用户显式设置 404
app.get('/explicit-404', (c) => {
  return c.json({ error: 'Not Found', message: 'Resource not found' }, 404);
});

// 场景2: 用户忘记 return（Hono 自动处理）
app.get('/forgot-return', (c) => {
  // 做了一些逻辑但忘记 return
  const data = { test: 'data' };
  console.log('处理了数据:', data);
  // 忘记了: return c.json(data);
});

// 场景3: return undefined
app.get('/return-undefined', (c) => {
  return undefined;
});

// 场景4: 空的 handler
app.get('/empty-handler', (c) => {});

// 场景5: 有正常返回
app.get('/with-response', (c) => {
  return c.json({ message: 'Hello' });
});

console.log('开始测试 Hono 的各种 404 场景\n');

console.log('开始测试 Hono 的各种 404 场景\n');

// 自动测试
const scenarios = [
  { url: 'http://localhost:9998/explicit-404', name: '场景1: 显式 404' },
  { url: 'http://localhost:9998/forgot-return', name: '场景2: 忘记 return' },
  { url: 'http://localhost:9998/return-undefined', name: '场景3: return undefined' },
  { url: 'http://localhost:9998/empty-handler', name: '场景4: 空 handler' },
  { url: 'http://localhost:9998/with-response', name: '场景5: 有响应' },
  { url: 'http://localhost:9998/not-exist', name: '场景6: 路由不存在' },
];

for (const scenario of scenarios) {
  try {
    console.log(`\n=== ${scenario.name} ===`);
    const request = new Request(scenario.url);
    const response = await app.fetch(request);
    
    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers.get('content-type'));
    const body = await response.text();
    console.log('Body:', body);
    console.log('Body length:', body.length);
    console.log('Body === "404 Not Found":', body === '404 Not Found');
  } catch (error) {
    console.log('Error:', error.message);
    console.log('Stack:', error.stack);
  }
}

console.log('\n=== 测试完成 ===');
