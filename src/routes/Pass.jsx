import React from 'react';
import './styles/Pass.css';

import userImage from './img/user.png';

const Pass = (props) => {
  const { setProfile } = props;
  return (
    <div className={'main-container pass-page'}>
      <div>
        <div className={'pass-container'}>
          <div className={'pass-header'}>
            <div className={'pass-header-left'}>
              <div className={'pass-header-left-title'}>Pseudo Pass</div>
              <div className={'pass-header-left-subtitle'}>
                Mobile Digital Identification Card
              </div>
            </div>
            <div className={'pass-header-right'}></div>
          </div>
          <div className={'pass-body'}>
            <div className={'pass-body-left'}>
              <img src={userImage} alt="User face" className="user-image" />
              <div className={'pass-body-left-title'}>Name</div>
              <div className={'pass-body-left-subtitle'}>Luke Song</div>
            </div>
            <div className={'pass-body-right'}>
              <div className={'pass-body-right-title'}>ID</div>
              <div className={'pass-body-right-subtitle'}>012233052</div>
            </div>
          </div>
          <div className={'pass-footer'}>
            <div className={'pass-footer-left'}>
              <div className={'pass-footer-left-title'}>Issued By</div>
              <div className={'pass-footer-left-subtitle'}>SJSU</div>
            </div>
            <div className={'pass-footer-right'}>
              <div className={'pass-footer-right-title'}>Issued On</div>
              <div className={'pass-footer-right-subtitle'}>12/12/2020</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pass;
