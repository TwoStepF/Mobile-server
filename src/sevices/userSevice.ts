import config from '../config/config';
import { UserDto } from '../dto/userDto';
import bcrypt from 'bcrypt';

const salt = config.server.token.secret;

const initUserAccount = async (user: UserDto) => {
    //init pass for user
    let hashPass = await bcrypt.hash("123456", salt);

};



export default initUserAccount;