import { BrowserWindow, ipcMain } from 'electron';

const controlWindow = async (win: BrowserWindow) => {
  ipcMain.on('minimize-window', () => {
    win?.minimize();
  });

  ipcMain.on('maximize-window', () => {
    if (win?.isMaximized()) {
      win?.restore();
    } else {
      win?.maximize();
    }
  });

  ipcMain.on('close-window', () => {
    win?.close();
  });
};

export { controlWindow };
