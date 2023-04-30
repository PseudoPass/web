import '../styles/NavigationBar.css';
import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from "axios";

function NavigationBar(props) {
    const navigate = useNavigate();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { profile, setProfile } = props;
  const handleLogout = async () => {
    // Send request to backend requesting cookies and session data be deleted
      const res = await axios.get(`${process.env.REACT_APP_API_HOSTNAME}/auth/logout`, {withCredentials: true});
      setProfile(null);
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
          {profile ? (
              <Link to={'/id'} className={'nb-link'}>
                  My Pass
              </Link>
          ) : (<></>)}
        </button>
        <button onClick={() => setIsNavbarVisible(false)}>
          {!profile ? (
            <Link to={'/login'} className={'nb-link'}>
              Login
            </Link>
          ) : (
            <Link to={'/'} className={'nb-link'} onClick={handleLogout}>
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
