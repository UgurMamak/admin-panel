import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProSidebarProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProSidebarProvider>
  </BrowserRouter>
);
