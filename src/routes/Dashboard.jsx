import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const [hasGeneratedVC, setHasGeneratedVC] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { displayName, DID, profilePhoto, SJSUID } = location.state || {};

  const handleGenerateVC = () => {
    // Add code to generate VC (Verifiable Credential) here.
    console.log('Generate VC button clicked');
    setHasGeneratedVC(true);
  };

  const handleViewID = () => {
    navigate('/id');
  };

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.profile}>
        <img
          src={profilePhoto}
          alt="Profile"
          style={{ width: '100px', height: '100px' }}
        />
        <p>Name : {displayName}</p>
        <p>DID: {DID}</p>
        <p>SJSU ID:{SJSUID}</p>
      </div>
      <div className={styles['pseudo-pass']}>
        <h3>Pseudo Pass</h3>
        {hasGeneratedVC ? (
          <Button
            onClick={handleViewID}
            className={styles['generate-vc-button']}
          >
            View ID
          </Button>
        ) : (
          <Button
            onClick={handleGenerateVC}
            className={styles['generate-vc-button']}
          >
            Generate the pass
          </Button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
