import express, {Express, Router} from 'express';
import TogoLogger from "./util/togo-logger";
import {AppsRouter} from "./routes/apps-router/apps-router";

class TogoServer {

    private app: Express = express();
    private appsRouter: Router = new AppsRouter().router;

    constructor(private port?: number) {
        this.configureServer()
        this.runServer();
    }

    private configureServer() {
        this.app.use('/api', this.appsRouter);
    }

    private async runServer(): Promise<void> {
        this.app.listen(this.port ?? 3000, () => {
            TogoLogger.write('info', `Server listening on port ${this.port ?? 3000}`);
        }).on('error', (err) => {
            TogoLogger.write('error', `${err.name}: ${err.message}`);
        });
    }
}

function bootstrap() {
    new TogoServer(3000);
}
bootstrap();
