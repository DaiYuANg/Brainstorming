import os from 'node:os';

const isMac = os.platform() === 'darwin';
const isWindows = os.platform() === 'win32';
const isLinux = os.platform() === 'linux';

export { isLinux, isMac, isWindows };
