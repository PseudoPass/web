import '../styles/NavigationBar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function NavigationBar(props) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const { profile } = props;
  const handleLogout = () => {
    // Send request to backend requesting cookies and session data be deleted
  };

  return (
    <div className="navbar-container">
      <button
        className={`hamburger ${isNavbarVisible ? 'active' : ''}`}
        onClick={() => setIsNavbarVisible(!isNavbarVisible)}
      >
        <AiOutlineMenu size={32} />
      </button>
      <div
        className={`navbar-content ${isNavbarVisible ? 'visible' : 'hidden'}`}
      >
        <button onClick={() => setIsNavbarVisible(false)}>
          <Link to={'/'} className={'nb-link'}>
            Home
          </Link>
        </button>
        <button onClick={() => setIsNavbarVisible(false)}>
          {!profile ? (
            <Link to={'/login'} className={'nb-link'}>
              Login
            </Link>
          ) : (
            <Link to={'/logout'} className={'nb-link'} onClick={handleLogout}>
              Logout
            </Link>
          )}
        </button>
        {/*<button><Link to={'/id'} className={"nb-link"}>My ID Card</Link></button>*/}
        {/*<button><Link to={'/settings'} className={"nb-link"}>Settings</Link></button>*/}
      </div>
    </div>
  );
}

export default NavigationBar;
