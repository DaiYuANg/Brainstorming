import * as console from 'console';
import { app } from 'electron';
import * as fs from 'fs';
import os from 'node:os';
import path from 'node:path';
import { autoMkdir } from '../utils';
import { BrainstormingConfig } from './config.type.ts';
const appName = 'Brainstorming';
class Config {
  get store(): Map<string, string | number> {
    return this._store;
  }
  private _store: Map<string, string | number> = new Map<
    string,
    string | number
  >();

  private configRoot: string = this.autoCreateDefaultConfig(
    autoMkdir(path.join(app.getPath('appData'), appName)),
  );

  private readonly configFile: string = 'config.json';

  private defaultConfig: BrainstormingConfig = {
    workspace: {
      root: path.join(os.homedir(), appName),
    },
  };
  constructor() {
    const config = this.readeConfig();
    console.log(new Map(Object.entries(config)));
    console.log(config);
    console.log(this._store);
  }

  private readeConfig() {
    console.log(this.configRoot);
    const result = fs.readFileSync(
      path.join(this.configRoot, this.configFile),
      'utf-8',
    );
    return JSON.parse(result);
  }

  private autoCreateDefaultConfig(path: string): string {
    const exists = fs.existsSync(path);
    if (exists) return path;
    fs.writeFileSync(
      path,
      JSON.stringify(this.defaultConfig, null, 2),
      'utf-8',
    );
    return path;
  }
}

const configInstance: Config = new Config();

export { Config, configInstance };
