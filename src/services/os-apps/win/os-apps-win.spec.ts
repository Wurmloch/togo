import {OperatingSystems} from "../../../shared/enum/operating-systems.enum";
import {OsAppsWin} from "./os-apps-win";
import {OsApps} from "../os-apps.abstract";

describe('OsAppsWin', () => {
    it('Should test retrieval of win apps', async (done) =>{
        if (process.platform === OperatingSystems.WIN) {
            const osAppsWin: OsApps = new OsAppsWin();
            const appsList = await osAppsWin.retrieveApps();
            expect(appsList).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        imageName: 'node.exe'
                    })
                ])
            );
            done();
        }
    });
});