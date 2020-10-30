import {OsApps} from '../os-apps.abstract';
const tasklist = require('tasklist');

export class OsAppsWin implements OsApps {
    constructor() { }

    async retrieveApps(): Promise<unknown[]> {
        return tasklist({ verbose: false,  });
    }
}