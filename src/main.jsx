import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import {
  NotFound,
  About,
  Contact,
  Home,
  Services,
  History,
  Location,
} from './pages.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: 'over',
    element: <About />,
    children: [
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'location',
        element: <Location />,
      },
    ],
  },
  { path: 'services', element: <Navigate to='/over/services' replace /> },
  { path: 'contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
