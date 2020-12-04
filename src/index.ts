import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @datalayer-jupyter/jupyterlab-theme-winter extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@datalayer-jupyter/jupyterlab-theme-winter',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @datalayer-jupyter/jupyterlab-theme-winter is activated!');
    const style = '@datalayer-jupyter/jupyterlab-theme-winter/index.css';
    manager.register({
      name: 'JupyterLab Winter',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
