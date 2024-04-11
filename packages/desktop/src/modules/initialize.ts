import { Platform, platform } from '@tauri-apps/plugin-os';

interface GlobalShare {
  os: Platform;
}

const initialize = async (): Promise<GlobalShare> => {
  const os = await platform();
  return {
    os,
  };
};

export { initialize };
export type { GlobalShare };
