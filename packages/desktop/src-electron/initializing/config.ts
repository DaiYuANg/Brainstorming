import * as fs from 'fs';
import os from 'node:os';
import path from 'node:path';
import { autoMkdir } from '../utils/io.ts';
import { BrainstormingConfig } from './config.type.ts';

const appName = 'Brainstorming';
const configFile: string = 'config.json';
const defaultConfig: BrainstormingConfig = {
  workspace: path.join(os.homedir(), appName),
};

const initializingConfig = async (app: Electron.App) => {
  const configRoot: string = autoMkdir(
    path.join(app.getPath('appData'), appName),
  );
  const fullConfigPath = path.join(configRoot, configFile);
  autoCreateDefaultConfig(fullConfigPath);
  return readConfig(fullConfigPath);
};

const autoCreateDefaultConfig = (path: string) => {
  const exists = fs.existsSync(path);
  if (exists) return;
  fs.writeFileSync(path, JSON.stringify(defaultConfig, null, 2), 'utf-8');
};

const readConfig = (path: string): BrainstormingConfig => {
  const result = fs.readFileSync(path, 'utf-8');
  return JSON.parse(result);
};

export { initializingConfig };
