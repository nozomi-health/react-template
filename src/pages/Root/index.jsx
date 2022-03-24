import loadable from '@loadable/component';

const Root = {
  Main: loadable(() => import('./Main'), {
    fallback: <>Loading...</>,
  }),
};

export default Root;
