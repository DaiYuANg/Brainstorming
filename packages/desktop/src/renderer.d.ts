export interface IElectronAPI {
  loadPreferences: () => Promise<void>;
  minimizeWindow: () => void;
  maximizeWindow: () => void;
  closeWindow: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
