import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound, About, Contact, Home } from './pages.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: 'over', element: <About /> },
  { path: 'contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
