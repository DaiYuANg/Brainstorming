import { BrowserWindow } from 'electron';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';

console.log(os.type());

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
const createWindow = async () => {
  const win: BrowserWindow = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
    width: 1200,
    height: 800,
    frame: false,
    transparent: true, // 设置窗口透明
    backgroundColor: '#00000000', // 透明背景色（8位ARGB）
    titleBarStyle: os.type() === 'Darwin' ? 'hiddenInset' : 'default',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
    },
  });
  return win;
};

const loadWebContent = async (win: BrowserWindow) => {
  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL).then((r) => {
      console.log(r);
    });
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html')).then((r) => {
      console.log(r);
    });
  }
  return win;
};

const afterLoad = async (win: BrowserWindow) => {
  win.webContents.openDevTools();
  return win;
};

export { afterLoad, createWindow, loadWebContent };
