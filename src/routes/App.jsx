import './styles/HomePage.scss';
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import IDCardPage from './IDCardPage';
import { Route, Routes } from 'react-router-dom';
import LoginSuccess from '../components/Login/LoginSuccess';
import HomePage from './HomePage';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [profile, setProfile] = useState(null);

  return (
    <>
      {' '}
      <div className={'main-container'}>
        <NavigationBar profile={profile} />
        <div>
          <Routes>
            <Route
              exact
              path={'/'}
              element={<HomePage setProfile={setProfile} />}
            />
            <Route
              exact
              path={'/login'}
              element={<LoginPage setProfile={setProfile} />}
            />
            <Route path={'/login/success'} element={<LoginSuccess />} />
            <Route
              exact
              path={'id'}
              element={<IDCardPage profile={profile} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default App;
