import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the  @quansight-labs/jupyterlab-theme-winter extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: ' @quansight-labs/jupyterlab-theme-winter',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension  @quansight-labs/jupyterlab-theme-winter is activated!');
    const style = ' @quansight-labs/jupyterlab-theme-winter/index.css';
    manager.register({
      name: 'JupyterLab Winter',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
