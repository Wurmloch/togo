import {Request, Response, Router} from 'express';
import {OsApps} from '../../controller/os-apps/os-apps.abstract';
import {OperatingSystems} from '@togo/shared';
import {OsAppsWin} from '../../controller/os-apps/win/os-apps-win';
import TogoLogger from '../../util/togo-logger';

export class AppsRouter {

    public readonly router: Router = Router();
    private osApps: OsApps | undefined;

    constructor() {
        this.chooseOsAppsForPlatform();
        this.appListGetter();
    }

    chooseOsAppsForPlatform(): void {
        switch(process.platform) {
            case OperatingSystems.WIN:
                this.osApps = new OsAppsWin();
                break;
        }
    }

    appListGetter(): void{
        this.router.get('/apps', async (req: Request, res: Response) => {
            const verbose = req.query.verbose?.toString().toLowerCase() === 'true';
            const appList = await this.osApps?.retrieveApps(verbose ?? false);
            TogoLogger.write('info', `Found ${appList?.length} active tasks / apps`);
            res.json(appList);
        });
    }
}
