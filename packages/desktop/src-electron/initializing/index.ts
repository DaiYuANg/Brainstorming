import { initializingConfig } from './config.ts';
import { initializingWorkspace } from './workspace.ts';

const initializing = (app: Electron.App) => {
  initializingConfig(app).then(async (config) => {
    await initializingWorkspace(config.workspace);
  });
};

export { initializing };
