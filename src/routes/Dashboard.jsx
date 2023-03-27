import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Create the slug from the DID
    const slug = `dashboard-${DID}`;

    // Send the slug to the backend
    const sendSlugToBackend = async () => {
      try {
        const apiUrl = 'http://localhost:3000/api/slug'; // Update this URL to the actual backend API route

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        });

        if (!response.ok) {
          throw new Error('Failed to send slug to the backend');
        }
      } catch (error) {
        console.error('Error sending slug to the backend:', error);
      }
    };

    sendSlugToBackend();
  }, [DID]);

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
            View Pass
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
