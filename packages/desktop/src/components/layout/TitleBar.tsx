import { platform } from '@tauri-apps/api/os';
import { appWindow } from '@tauri-apps/api/window';
import './TitleBar.css';

const os = await platform();

const TitleBar = () => {
  const minimizeWindow = () => {
    appWindow.minimize().then((r: any) => {
      console.log(r);
    });
  };

  const maximizeWindow = () => {
    appWindow.maximize().then((r) => {
      console.log(r);
    });
  };

  const closeWindow = () => {
    if (os === 'darwin') {
      appWindow.hide().then((r) => {
        console.log(r);
      });
      return;
    }
    appWindow.close().then((r) => {
      console.log(r);
    });
  };

  return (
    <div className="title-bar" data-tauri-drag-region>
      <div className="title-bar-drag-region" data-tauri-drag-region></div>
      <div className="window-controls" data-tauri-drag-region>
        <div className="window-control minimize" onClick={minimizeWindow}>
          <div className="window-control-icon">-</div>
        </div>
        <div className="window-control maximize" onClick={maximizeWindow}>
          <div className="window-control-icon">+</div>
        </div>
        <div className="window-control close" onClick={closeWindow}>
          <div className="window-control-icon">×</div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
