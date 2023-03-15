import React from 'react';
import LOGO from '../../routes/img/logo.png';

export default function HeaderLogo() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '-200px' }}
    >
      <img className="logo" src={LOGO} alt="logo" />
    </div>
  );
}
