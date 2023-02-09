/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */

import { createBrowserRouter } from 'react-router-dom';

// pages
import App from '../App';
import Dashboard from '../pages/dashboard';
import Widgets from '../pages/widgets';
import NavigationPage from '../pages/navigation';
import ErrorPage from '../pages/error-page';
import NotFoundPage from '../pages/not-found-page';
import TestPage from '../pages/testPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: '/content-management/widgets',
            element: <Widgets />,
          },
          {
            path: '/content-management/navigation',
            element: <NavigationPage />,
          },
          {
            path: '/test-page',
            element: <TestPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);