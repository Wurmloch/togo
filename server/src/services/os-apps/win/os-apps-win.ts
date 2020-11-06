import {OsApps} from '../os-apps.abstract';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tasklist = require('tasklist');

export class OsAppsWin implements OsApps {

    async retrieveApps(): Promise<unknown[]> {
        return tasklist({ verbose: false });
    }
}
