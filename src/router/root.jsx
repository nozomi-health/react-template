import { ROOT } from '@router/consts';
import Root from '@pages/Root';

export const ROOT_ROUTES = [
  {
    name: 'root',
    path: `${ROOT}`,
    exact: true,
    component: Root.Main,
  },
];
