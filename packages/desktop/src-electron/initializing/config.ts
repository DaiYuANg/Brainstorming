import { Config } from '../config/config.ts';

const initializingConfig = async (app: Electron.App) => {
  new Config();
  // const configRoot: string = autoMkdir(
  //   path.join(app.getPath('appData'), appName),
  // );
  // const fullConfigPath = path.join(configRoot, configFile);
  // autoCreateDefaultConfig(fullConfigPath);
  // return readConfig(fullConfigPath);
  return {};
};

// const autoCreateDefaultConfig = (path: string) => {
//   const exists = fs.existsSync(path);
//   if (exists) return;
//   fs.writeFileSync(path, JSON.stringify(defaultConfig, null, 2), 'utf-8');
// };
//
// const readConfig = (path: string): BrainstormingConfig => {
//   const result = fs.readFileSync(path, 'utf-8');
//   return JSON.parse(result);
// };

export { initializingConfig };
