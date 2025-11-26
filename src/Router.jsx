import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ProjektPage from './ProjektPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/projekt',
        element: <ProjektPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
