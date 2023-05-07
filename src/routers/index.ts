import Router from "koa-router";
import authRouter from "./authRouter";
import userRouter from "./userRouter";

const router = new Router({ prefix: '/api' });

router
    .use(authRouter.routes())
    .use(userRouter.routes());

export default router;