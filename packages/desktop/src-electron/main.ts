import { app, BrowserWindow, Notification } from 'electron';
import path from 'node:path';
import { listenControlWindowOrder, listenNotification } from './actions';
import { initializing } from './initializing';
import { afterLoad, createWindow, loadWebContent } from './windows';

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

app.on('window-all-closed', () => {
  win = null;
});

app.whenReady().then(async () => {
  win = createWindow();
  initializing(app);
  loadWebContent(win);
  afterLoad(win);
  await Promise.all([listenControlWindowOrder(win!), listenNotification]);
  const NOTIFICATION_TITLE = 'Basic Notification';
  const NOTIFICATION_BODY = 'Notification from the Main process';

  new Notification({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
  }).show();
  // new Notification({
  //   title: NOTIFICATION_TITLE,
  //   body: NOTIFICATION_BODY
  // }).show()
});
