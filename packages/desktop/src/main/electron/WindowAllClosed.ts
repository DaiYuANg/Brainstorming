import { app } from 'electron';

const WindowAllClosed = (): void => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
};

export { WindowAllClosed };
