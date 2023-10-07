import { initializingConfig } from './config.ts';

const initializing = (app: Electron.App) => {
  initializingConfig(app).then(async (config) => {
    console.log(config);
    // console.log(config);
    // await initializingWorkspace(config.workspace);
  });
};

export { initializing };
