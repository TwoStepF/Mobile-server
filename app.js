import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/test", (ctx) => {
    ctx.body = {
        name: "hello"
    }
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("Server running on port 3000");
});