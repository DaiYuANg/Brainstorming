// prettier-ignore
import 'reflect-metadata';
// prettier-ignore
import { app,Menu } from 'electron';
import log from 'electron-log/main';
import { OnAppReady } from './electron/AppReady';
import { WindowAllClosed } from './electron/WindowAllClosed';
import { menu } from './electron/menu';

// Main Method
((): void => {
  log.initialize();

  Menu.setApplicationMenu(menu);
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.whenReady().then(OnAppReady);

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', WindowAllClosed);
})();
