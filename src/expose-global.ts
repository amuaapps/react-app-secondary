/**
 * Global Exposure Entry Point
 *
 * This file is loaded by remoteEntry.js to expose window.remoteApp_secondary
 * It must be imported/executed when the remote module loads
 */

import remoteApp from './bootstrap';

// The bootstrap file already exposes window.remoteApp_secondary
// This file just ensures it's imported and executed
export default remoteApp;
