import { Menu } from 'electron';

const isMac = process.platform === 'darwin';

const menu = Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [isMac ? { role: 'close' } : { role: 'quit' }],
  },
]);
export { menu };
