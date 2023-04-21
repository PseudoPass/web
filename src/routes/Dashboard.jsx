import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import styles from './styles/Dashboard.module.scss';
import axios from "axios";

const Dashboard = () => {
    const [hasGeneratedVC, setHasGeneratedVC] = useState(false);
    const [data, setData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const { displayName, DID, profilePhoto, studentId, googleId } = location.state || {};

    const handleGenerateVC = () => {
    // Add code to generate VC (Verifiable Credential) here.
    console.log('Generate VC button clicked');
    axios.post("http://localhost:4000/cred/", {}, {withCredentials: true})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    setHasGeneratedVC(true);
    };

    const handleViewID = () => {
    navigate('/id');
    };

    useEffect( () => {
        const fetchData = async () => {
            const promise1 = axios.get("http://localhost:4000/user/profile", {withCredentials: true})
            const promise2 = axios.get("http://localhost:4000/did/", {withCredentials: true})
            const [response1, response2] = await Promise.all([promise1, promise2]);
            setData({profile: response1.data, did: response2.data})
            console.log(data)
        }
        fetchData();
    }, []);

    return (
        data ?
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.profile}>
        <img
          src={data.profile.imageUri}
          alt="Profile"
          style={{ width: '100px', height: '100px' }}
        />
        <p>Name : {data.profile.displayName}</p>
        <p>DID: {data.did.didStr}</p>
        <p>SJSU ID:{data.profile.studentId}</p>
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
    </div> : <></>
    );
};

export default Dashboard;
