import { useMemo } from 'react';
import { ROOT_ROUTES } from '@router/root';
import RootLayout from '@layouts/Root';
import { RedirectRoot } from '@pages/RedirectPage';
import { ROOT, NOT_FOUND } from '@router/consts';

export const useRouterPaths = () =>
  useMemo(() => {
    // layouts and routes base on roles/etc,

    const allRoutes = [
      ...ROOT_ROUTES,
      {
        path: NOT_FOUND,
        element: <RedirectRoot />,
      },
    ];

    const layout = <RootLayout />;

    return [{ path: `${ROOT}`, element: layout, children: allRoutes }];
  }, []);
