import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './tests/reportWebVitals';
import HomePage from "./routes/HomePage";
import IDCardPage from "./routes/IDCardPage";
import SettingsPage from "./routes/SettingsPage";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/id",
        element: <IDCardPage />,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
