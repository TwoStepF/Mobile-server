import Router from "koa-router";
import login from "../controllers/authController";
import { Ctx } from "routing-controllers";
const authRouter = new Router({ prefix: '/auth' });

authRouter.get("/login", login);

export default authRouter