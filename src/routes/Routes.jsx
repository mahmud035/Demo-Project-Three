import { createBrowserRouter } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import Users from '../components/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/users/:id',
    element: <DetailsCard />,
    loader: ({ params }) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
  },
]);

export default router;
