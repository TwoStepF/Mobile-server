import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import authRouter from './routers/authRouter';
import router from './routers';
import { AppDataSource } from './config/data-source';
import config from './config/config';


const PORT = config.server.port;
const app = new Koa();


app
.use(bodyParser())
.use(cors())
.use(router.routes())
.use(router.allowedMethods())

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err: any) => {
        console.error("Error during Data Source initialization", err)
    })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

