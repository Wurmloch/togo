export abstract class OsApps {
    abstract async retrieveApps(verbose: boolean): Promise<unknown[]>;
}
