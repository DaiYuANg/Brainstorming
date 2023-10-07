import { Rectangle } from 'electron';

interface BrainstormingConfig {
  window?: WindowConfig;
  workspace?: WorkspaceConfig;
}

interface WindowConfig {
  rectangle?: Rectangle;
}

interface WorkspaceConfig {
  root?: string;
}

export type { BrainstormingConfig, WindowConfig, WorkspaceConfig };
