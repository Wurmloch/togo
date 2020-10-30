import {Request, Response, Router} from "express";
import {OsApps} from "../../services/os-apps/os-apps.abstract";
import {OperatingSystems} from "../../shared/enum/operating-systems.enum";
import {OsAppsWin} from "../../services/os-apps/win/os-apps-win";

export class AppsRouter {

    public readonly router: Router = Router();
    private osApps: OsApps | undefined;

    constructor() {
        this.chooseOsAppsForPlatform();
        this.appListGetter();
    }

    chooseOsAppsForPlatform() {
        switch(process.platform) {
            case OperatingSystems.WIN:
                this.osApps = new OsAppsWin();
                break;
        }
    }

    appListGetter() {
        this.router.get('/apps', async (_req: Request, res: Response) => {
           const appList = await this.osApps?.retrieveApps();
           res.json(appList);
        });
    }
}