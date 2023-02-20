import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './tests/reportWebVitals';
import App from './routes/App';
import IDCardPage from './routes/IDCardPage';
import SettingsPage from './routes/SettingsPage';
import OauthPage from './routes/OauthPage';
import LoginPage from "./routes/LoginPage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/auth',
    element: <OauthPage />
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
//Michael clientID
const googleClientID = "637525338059-h227sm74agci61muh4q9nc4ivd6qap3f.apps.googleusercontent.com";

//Jason
// const googleClientID = "1079284959593-fdurd06jgq10ek0ffh616i753kup4rb5.apps.googleusercontent.com";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={googleClientID}>
    {/*<React.StrictMode>*/}
    {/*  <RouterProvider router={router} />*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/*</React.StrictMode>*/}
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
