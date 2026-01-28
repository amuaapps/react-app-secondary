# react-app-secondary

Remote application for the Amua Apps micro-frontend architecture. This app is mounted by `react-app-shell` and provides secondary functionality without shell chrome (navigation/footer).

## Architecture

This is a **remote application** using Module Federation that:
- Exposes `window.remoteApp_secondary` with contract version 1
- Provides a stable `remoteEntry.js` (non-hashed) for shell consumption
- Implements mount/unmount interface for dynamic loading
- Renders content without shell chrome (shell provides top nav + footer)

## Remote App Contract

```typescript
interface RemoteAppSecondary {
  contractVersion: '1';
  mount(container: HTMLElement, options?: {
    basePath?: string;
    initialPath?: string;
    onNavigate?: (path: string) => void;
    contractVersion?: string;
  }): { success: boolean; error?: string };
  unmount(): void;
}
```

## Setup

### Prerequisites
- Node.js 18.20.5 (see `.nvmrc`)
- Access to GitHub Packages for `@amuaapps` scoped packages
- `NPM_PACKAGE_TOKEN` environment variable set

### Installation

```bash
# Use correct Node version
nvm use

# Install dependencies
npm ci

# Start dev server (runs on port 3001)
npm run dev
```

## Development

### Available Scripts

- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Type check and build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run all tests
- `npm run test:unit` - Run unit tests only
- `npm run test:integration` - Run integration tests only
- `npm run test:coverage` - Run tests with coverage report

## Status

This is the develop branch - work in progress.
