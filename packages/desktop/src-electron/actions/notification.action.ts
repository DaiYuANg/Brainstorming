import { ipcMain } from 'electron';

const listenNotification = () => {
  ipcMain.on('notification', (event, args) => {
    console.log(event);
    console.log(args);
  });
};

export { listenNotification };
