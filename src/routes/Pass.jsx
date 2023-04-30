import React, {useEffect, useState} from 'react';
import './styles/Pass.css';
import userImage from './img/user.png';
import axios from "axios";

const Pass = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_HOSTNAME}/user/profile`, {withCredentials: true})
        .then((result) => {
          setData(result.data)
        })
  }, []);

  return (
      data ?
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
              <img src={data.imageUri} alt="User face" className="user-image" />
              <div className={'pass-body-left-title'}>Name</div>
              <div className={'pass-body-left-subtitle'}>{data.displayName}</div>
            </div>
            <div className={'pass-body-right'}>
              <div className={'pass-body-right-title'}>ID</div>
              <div className={'pass-body-right-subtitle'}>{data.studentId}</div>
            </div>
          </div>
          <div className={'pass-footer'}>
            <div className={'pass-footer-left'}>
              <div className={'pass-footer-left-title'}>Issued By</div>
              <div className={'pass-footer-left-subtitle'}>SJSU</div>
            </div>
            <div className={'pass-footer-right'}>
              <div className={'pass-footer-right-title'}>Issued On</div>
              <div className={'pass-footer-right-subtitle'}>{data.createdAt}</div>
            </div>
          </div>
        </div>
      </div>
    </div> : <>Loading...</>
  );
};

export default Pass;
