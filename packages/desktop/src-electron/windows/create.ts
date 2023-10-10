import { BrowserWindow } from 'electron';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
const createWindow = () => {
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
      nodeIntegrationInWorker: true,
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
    await win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    await win.loadFile(path.join(process.env.DIST, 'index.html'));
  }
  return win;
};

const afterLoad = (win: BrowserWindow) => {
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
  return win;
};

export { afterLoad, createWindow, loadWebContent };
