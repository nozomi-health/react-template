import { Navigate } from 'react-router-dom';

import { ROOT } from '@router/consts';

export const RedirectRoot = () => <Navigate to={ROOT} />;
