import {app, BrowserWindow, Notification} from 'electron';
import os from 'node:os';
import path from 'node:path';
import {listenControlWindowOrder, listenNotification} from './actions';
import {initializing} from './initializing';
import {afterLoad, createWindow, loadWebContent} from './windows';
import {debug, initialize, log} from "electron-log";
initialize({preload: true, spyRendererConsole: true})
debug("test")
log("test")
// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist');
process.env.PUBLIC = app.isPackaged
    ? process.env.DIST
    : path.join(process.env.DIST, '../public');

let win: BrowserWindow | null;

//todo: find a logger package

app.on('window-all-closed', () => {
    win = null;
    if (os.platform() !== 'darwin') {
        app.quit();
    }
});

app.whenReady().then(async () => {
    win = createWindow();
    win.on('resized', () => {
        console.log(win?.getBounds());
    });
    initializing(app);
    await loadWebContent(win);
    afterLoad(win);
    await Promise.all([listenControlWindowOrder(win!), listenNotification]);
    const NOTIFICATION_TITLE = 'Basic Notification';
    const NOTIFICATION_BODY = 'Notification from the MainLayout process';

    new Notification({
        title: NOTIFICATION_TITLE,
        body: NOTIFICATION_BODY,
    }).show();
});
