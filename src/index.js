import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './tests/reportWebVitals';
import HomePage from './routes/HomePage';
import IDCardPage from './routes/IDCardPage';
import SettingsPage from './routes/SettingsPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/id',
    element: <IDCardPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="1079284959593-fdurd06jgq10ek0ffh616i753kup4rb5.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
