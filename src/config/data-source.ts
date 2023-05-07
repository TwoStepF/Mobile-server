import config from "./config"
import { User } from "../entity/user"
import { DataSource } from "typeorm"
import { Role } from "../entity/role"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: config.database.host,
    port: config.database.port,
    username: config.database.user,
    password: config.database.pass,
    database: config.database.database,
    synchronize: true,
    logging: true,
    entities: [User, Role],
    subscribers: [],
    migrations: [],
})
