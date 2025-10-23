export async function onRequest({ request, params, env }) {
    console.log("Edge Function 'api/version/a' invoked.");
    return new Response(JSON.stringify({ code: 0, msg: "Edge Function 'api/version/a' is working!" }), {
      headers: { "Content-Type": "application/json" },
    });
}
