export async function onRequest(context) {

  const renderUrl =
    "https://render-yvv2.onrender.com/dotnet.wasm";

  const response = await fetch(renderUrl);

  return new Response(response.body, {
    headers: {
      "Content-Type": "application/wasm",
      "Cache-Control": "public, max-age=31536000"
    }
  });
}
