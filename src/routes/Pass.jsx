import React from 'react';
import './styles/Pass.css';
import './styles/HomePage.scss';
import ExampleImage from './img/Example.png';

const Pass = (props) => {
  const { setProfile } = props;
  return (
    <div className={'main-container'}>
      <a
        href={
          'https://creds-testnet.dock.io/6e43f14670e61c2d561d31dbb5ccdf2183b312d25fe92aa22ffbff9d5b9f59bd'
        }
      >
        <div className={'login-text'}>View Pseudo Pass</div>
        <img src={ExampleImage} alt={'pass'} />
      </a>
    </div>
  );
};

export default Pass;
