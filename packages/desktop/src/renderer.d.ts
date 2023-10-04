export interface IElectronAPI {
  loadPreferences: () => Promise<void>;
  minimizeWindow: () => void;
  maximizeWindow: () => void;
  closeWindow: () => void;
  setTitle: (title: string) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
