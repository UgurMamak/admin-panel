import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProSidebarProvider>
    <RouterProvider router={router} />
  </ProSidebarProvider>
);
