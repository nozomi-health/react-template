import { renderRoutes } from 'react-router-config';

import './styles/main.scss';
import { useRouterPaths } from '@hooks/useRouterPaths';

const App = () => {
  // pass roles, etc. form context (?) to function
  const routers = useRouterPaths();

  return routers && renderRoutes(routers);
};

export default App;
