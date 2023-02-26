import React from 'react';
import './styles/Pass.css';
import './styles/HomePage.scss';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';

const Pass = (props) => {
  const { setProfile } = props;
  return (
    <div className={'main-container'}>
      <div className={'login-text'}>Login using SJSU Credentials</div>
      <GoogleLoginButton setProfile={setProfile} />
    </div>
  );
};

export default Pass;
