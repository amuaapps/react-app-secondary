import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// NOTE: Do NOT import globals.css here
// - Shell loads core theme globally for nav/footer/layout
// - Secondary theme is imported dynamically in mount() and scoped to .theme-secondary
// - For standalone dev, globals.css is imported in standalone.tsx
import {
  REMOTE_APP_CONTRACT_VERSION,
  RemoteAppErrorType,
  type RemoteAppInstance,
  type RemoteAppMountOptions,
  type RemoteAppMountResult,
} from '@/lib/remote-app-contract';

let root: ReactDOM.Root | null = null;

const remoteApp: RemoteAppInstance = {
  contractVersion: REMOTE_APP_CONTRACT_VERSION,

  mount(
    container: HTMLElement,
    options: RemoteAppMountOptions = {}
  ): RemoteAppMountResult {
    try {
      if (!container) {
        return {
          success: false,
          error: `${RemoteAppErrorType.MISSING_CONTAINER}: Container element is required`,
        };
      }

      if (
        options.contractVersion &&
        options.contractVersion !== REMOTE_APP_CONTRACT_VERSION
      ) {
        return {
          success: false,
          error: `${RemoteAppErrorType.INVALID_CONTRACT_VERSION}: Unsupported contract version: ${options.contractVersion}. Expected: ${REMOTE_APP_CONTRACT_VERSION}`,
        };
      }

      // Apply secondary theme class to scope secondary theme styles to this container
      container.classList.add('theme-secondary');

      // Import secondary theme (scoped to .theme-secondary)
      // The shell loads core theme globally, this overrides within our container
      import('@amuaapps/ui-theme-secondary/styles.css');

      root = ReactDOM.createRoot(container);
      root.render(
        <React.StrictMode>
          <App
            basePath={options.basePath}
            initialPath={options.initialPath}
            onNavigate={options.onNavigate}
          />
        </React.StrictMode>
      );

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: `${RemoteAppErrorType.MOUNT_FAILED}: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  },

  unmount() {
    if (root) {
      root.unmount();
      root = null;
    }
  },
};

// Expose the remote app instance globally
// This MUST happen immediately when this module loads
if (typeof window !== 'undefined') {
  (
    window as typeof window & { remoteApp_secondary: RemoteAppInstance }
  ).remoteApp_secondary = remoteApp;
}

export default remoteApp;
