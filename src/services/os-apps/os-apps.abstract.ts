export abstract class OsApps {
    abstract async retrieveApps(): Promise<unknown[]>;
}