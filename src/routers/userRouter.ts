import Router from "koa-router";
import { Ctx } from "routing-controllers";
import initUserAccount from "../controllers/userController";
import login from "../controllers/authController";
const userRouter = new Router({ prefix: '/user' });

userRouter.get("/init-user-account", initUserAccount);
userRouter.get("/init", login);

export default userRouter;