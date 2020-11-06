import winston, { createLogger, Logger } from 'winston';

export default abstract class TogoLogger {

    private static logger: Logger = createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp()
        ),
        defaultMeta: { service: 'togo-server' },
        transports: [
            new winston.transports.Console({ format: winston.format.simple() }),
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });

    static write(level: string, message: string): void {
        this.logger.log(level, message);
    }
}
