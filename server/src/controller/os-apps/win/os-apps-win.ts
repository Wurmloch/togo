import {OsApps} from '../os-apps.abstract';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tasklist = require('tasklist');

export class OsAppsWin implements OsApps {

    /**
     * retrieve running processes from Windows OS
     * @param verbose whether the method should give back the full info
     */
    async retrieveApps(verbose = false): Promise<unknown[]> {
        return tasklist({ verbose });
    }

}
