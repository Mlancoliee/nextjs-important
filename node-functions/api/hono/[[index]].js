import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
    return c.json('Hello Hono')
})

app.get('/test1', (c) => {
    test = 0
    return c.json({ users: ['user1', 'user2', 'user3'] })
})

app.get('/test2', (c) => {
    c.status(500)
    return c.json('Hello test2 502')
})

app.get('/test3', async (c) => {
    // 场景5：真正的无响应 - 永远挂起，不返回任何值
    // 触发超时检测
    // await new Promise(() => {
    //     // 永远不 resolve
    // });
})
export default app
