export const onRequest =  (context) => {
// 用户函数内部错误
test = 0
console.log('test1')
  return new Response('Hello, World!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=UTF-8' },
  });
};

