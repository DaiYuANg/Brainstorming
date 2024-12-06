import { is } from '@electron-toolkit/utils';
import { BrowserWindow, shell } from 'electron';
import { join } from 'path';
import icon from '../../../resources/icon.png?asset';

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
    ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
};

export { createWindow };
