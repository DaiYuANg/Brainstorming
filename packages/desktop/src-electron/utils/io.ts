import * as fs from 'fs';
import path from 'node:path';

const autoMkdir = (dir: string, recursive: boolean = true): string => {
  const exists = fs.existsSync(dir);
  if (!exists) {
    fs.mkdirSync(dir, { recursive: recursive });
  }
  return path.resolve(dir);
};

export { autoMkdir };
