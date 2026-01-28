/**
 * Standalone Entry Point
 *
 * This file is used ONLY for standalone local development (index.html).
 * It imports globals.css to provide base theme tokens for local dev.
 *
 * When mounted by the shell:
 * - Shell provides core theme globally
 * - bootstrap.tsx adds .theme-secondary class and imports secondary theme
 * - Secondary theme overrides are scoped to the mount container
 */

import './styles/globals.css';
import remoteApp from './bootstrap';

export default remoteApp;
