import IdentificationCard from './IdentificationCard';
import styles from './IDCardPage.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button, Input } from 'antd';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

const ImgUpload = ({ onChange, src }) => (
  <label for="photo-upload" className={styles.customFileUpload}>
    <div className={styles.imgWrap}>
      <div className={styles.imgUpload} style={{ height: '200px' }}>
        <img className={styles.img} for="photo-upload" src={src} />
      </div>
    </div>
    <input className={styles.input} type="file" onChange={onChange} />
  </label>
);

const Edit = ({ onSubmit, children }) => (
  <div className={styles.card}>
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  </div>
);

const Profile = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true'
  );
  const [file, setFile] = useState('');
  const [active, setActive] = useState('edit');

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const newFile = e.target.files[0];
    reader.onloadend = () => {
      setFile(newFile);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let activeP = active === 'edit' ? 'profile' : 'edit';
    setActive(activeP);
  };

  return (
    <div className={styles.upload}>
      <Edit onSubmit={handleSubmit}>
        <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
      </Edit>
    </div>
  );
};

const TypeId = () => {
  const [typedId, setTypedId] = useState('');
  const [msg, setMsg] = useState('');

  // NEED TO INTEGRATE WITH NEXT PAGE AND BACKEND
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`pass this id ', ${typedId}`);
    alert(`pass this id ', ${typedId}`);
    setMsg('');
  };
  return (
    <div className={styles.upload} style={{ marginTop: '20px', gap: '5px' }}>
      <Input
       
        placeholder="SJSU ID Number"
        required
        onChange={(e) => setTypedId(e.target.value)}
      />

      <Button onClick={handleSubmit} type="primary">
        Create your profile
      </Button>
    </div>
  );
};

const IDCardPage = (props) => {
  const { profile } = props;
  const navigate = useNavigate();

  return !profile ? (
    navigate('/login')
  ) : (
    <div className={styles.mainContainer}>
      {/* <img src={profile.imageUri} alt="user image" /> */}
      <HeaderLogo />
      <Paragraph
        className={styles.header}
        style={{ fontSize: 25, marginTop: '30px' }}
      >
        Hi {profile.displayName}! <br></br>You are login with {profile.email}{' '}
        <br></br>
        <br></br>Please upload your profile image and type your student ID
      </Paragraph>

      <Profile />
      <TypeId />
    </div>
  );
};

export default IDCardPage;
