import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { RouteWrapper } from './RouteWrapper';

// RouteWrapper moved to separate file to satisfy react-refresh/only-export-components

/**
 * Create router for the secondary app
 * @param basePath - Base path for all routes (e.g., '/secondary')
 */
export function createSecondaryRouter(basePath: string = '/secondary') {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <RouteWrapper />,
    },
    {
      path: '*',
      element: <RouteWrapper />,
    },
  ];

  return createBrowserRouter(routes, {
    basename: basePath,
  });
}
