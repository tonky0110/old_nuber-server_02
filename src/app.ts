import cors  from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import schema from './schema';

class App {
    public app: GraphQLServer;      // 변수 타입: GraphQLServer
    constructor(){                  // 생성자.
        this.app = new GraphQLServer({
            schema
        })
        this.middlewares();
    }
    private middlewares = () : void => {    // middleware라는 함수.
        this.app.express.use(cors());
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
    };
}

export default new App().app;  