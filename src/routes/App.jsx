import './styles/HomePage.scss';
import React, {useEffect, useState} from 'react';
import Pass from './Pass';
import OnboardingPage from '../components/IdentificationCard/OnboardingPage.jsx';
import { Route, Routes } from 'react-router-dom';
import LoginSuccess from '../components/Login/LoginSuccess';
import HomePage from './HomePage';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Dashboard from './Dashboard';
import ApiTest from "../components/ApiTest";
import axios from "axios";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [profile, setProfile] = useState(null);
  useEffect( () => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/user/profile", {withCredentials: true})
      setProfile(res.data);
      console.log(res.data)
    }
    fetchData();
  }, []);
  return (
    <>
      {' '}
      <div className={'main-container'}>
        <NavigationBar profile={profile} setProfile={setProfile} />
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
              element={<OnboardingPage setProfile={setProfile} />}
            />
            <Route path={'/login/success'} element={<LoginSuccess />} />
            <Route
              exact
              path={'/onboarding'}
              element={<OnboardingPage profile={profile} />}
            />
            <Route exact path={'/dashboard'} element={<Dashboard />} />
            <Route exact path={'/id'} element={<Pass profile={profile} setProfile={setProfile}/>} />
            <Route exact path={'/test'} element={<ApiTest profile={profile} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default App;
