export default function onRequest(context) {
  const a = 0
  a = 2
  throw new Error('test error')
  console.log('check context ', context);
  const { params, server, clientIp, geo } = context;
  return new Response('Hello node functions! ' + JSON.stringify({ params, server, clientIp, geo, headers: context.request.headers }));
}