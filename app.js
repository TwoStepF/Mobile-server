import Koa from "koa";

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello, Koa!";
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});