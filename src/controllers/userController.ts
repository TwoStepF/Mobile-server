import { Context } from 'koa';
import { UserDto } from '../dto/userDto';

const initUserAccount = (ctx: Context) => {
    let user: UserDto = new UserDto();
    user.email = ctx.email;
    user.name = ctx.name;
    
};



export default initUserAccount;