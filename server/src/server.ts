import express, {Express, Router} from 'express';
import TogoLogger from './util/togo-logger';
import {AppsRouter} from './routes/apps-router/apps-router';
import cors from 'cors';

class TogoServer {

    private app: Express = express();
    private appsRouter: Router = new AppsRouter().router;

    constructor(private port: number = 3000) {
        this.configureServer()
        this.runServer();
    }

    private configureServer() {
        this.app.use(cors({
            origin: ['http://localhost:8080'],
            optionsSuccessStatus: 200
        }));
        this.app.use('/api', this.appsRouter);
    }

    private async runServer(): Promise<void> {
        this.app.listen(this.port, () => {
            TogoLogger.write('info', `Server listening on port ${this.port}`);
        }).on('error', (err: Error) => {
            TogoLogger.write('error', `${err.name}: ${err.message}`);
        });
    }
}

function bootstrap() {
    new TogoServer();
}
bootstrap();
