import { BrowserWindow, ipcMain } from 'electron';

const listenControlWindowOrder = async (win: BrowserWindow) => {
  ipcMain.on('set-title', (event, args) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win?.setTitle(args);
  });
  ipcMain.on('minimize-window', () => {
    win?.minimize();
  });

  ipcMain.on('maximize-window', () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
      win.restore();
    }
  });

  ipcMain.on('close-window', () => {
    win?.close();
  });
};

export { listenControlWindowOrder };
