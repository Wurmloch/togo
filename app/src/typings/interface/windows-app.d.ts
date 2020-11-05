export default interface WindowsApp {
  imageName: string;
  pid: number;
  sessionName: WindowsAppSessionName;
  sessionNumber: number;
  memUsage: number;
}
