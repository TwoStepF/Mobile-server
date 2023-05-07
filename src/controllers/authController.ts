import { Context } from 'koa';

const login = (ctx: Context) => {
  ctx.body = "alo 123";
  ctx.status = 200;
};



export default login;