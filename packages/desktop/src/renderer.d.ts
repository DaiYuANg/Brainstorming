export interface IElectronAPI {
  loadPreferences: () => Promise<void>;
  minimizeWindow: () => void;
  maximizeWindow: () => void;
  closeWindow: () => void;
  setTitle: (title: string) => void;
  isMac: boolean;
  isWindows: boolean;
  isLinux: boolean;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
