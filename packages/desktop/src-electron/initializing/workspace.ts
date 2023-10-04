import { autoMkdir } from '../utils/io.ts';

const initializingWorkspace = async (workspacePath: string) => {
  autoMkdir(workspacePath);
};

export { initializingWorkspace };
