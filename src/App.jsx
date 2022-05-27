import { useRoutes } from 'react-router-dom';
import { useRouterPaths } from '@hooks/useRouterPaths';

import './styles/main.scss';

const App = () => {
  // pass roles, etc. form context (?) to function
  const routers = useRouterPaths();
  const routes = useRoutes(routers);

  return routers && routes;
};

export default App;
