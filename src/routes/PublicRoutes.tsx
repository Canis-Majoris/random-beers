import { useRoutes } from 'react-router';
import { BeerGridPage } from '@Pages';

const PublicRoutes = () =>
  useRoutes([{ path: '/', element: <BeerGridPage /> }]);

export default PublicRoutes;
