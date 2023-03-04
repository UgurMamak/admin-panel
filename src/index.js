import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { router } from './router';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const secondRoot = document.getElementById('modal-root');
root.render(
  <Provider store={store}>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </Provider>
);
