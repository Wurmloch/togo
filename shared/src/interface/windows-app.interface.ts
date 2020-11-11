import { WindowsAppSessionName } from '..';

export interface WindowsApp {
  imageName: string;
  pid: number;
  sessionName: WindowsAppSessionName;
  sessionNumber: number;
  memUsage: number;
  status?: string;
  username?: string;
  cpuTime?: string;
  windowTitle?: string;
}
