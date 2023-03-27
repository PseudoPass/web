import styles from './IDCardPage.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button, Input } from 'antd';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

// const ImgUpload = ({ onChange, src }) => (
//   <label htmlfor="photo-upload" className={styles.customFileUpload}>
//     <div className={styles.imgWrap}>
//       <div className={styles.imgUpload} style={{ height: '200px' }}>
//         <img className={styles.img} for="photo-upload" src={src} />
//       </div>
//     </div>
//     <input className={styles.input} type="file" onChange={onChange} />
//   </label>
// );

// const Edit = ({ onSubmit, children }) => (
//   <div className={styles.card}>
//     <form className={styles.form} onSubmit={onSubmit}>
//       {children}
//     </form>
//   </div>
// );

// const CardProfile = () => {
//   const [imagePreviewUrl, setImagePreviewUrl] = useState(
//     'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true'
//   );
//   const [file, setFile] = useState('');
//   const [active, setActive] = useState('edit');

//   const photoUpload = (e) => {
//     e.preventDefault();
//     const reader = new FileReader();
//     const file = e.target.files[0];
//     reader.onloadend = () => {
//       setFile(file);
//       setImagePreviewUrl(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let activeP = active === 'edit' ? 'profile' : 'edit';
//     setActive(activeP);
//     alert('clicked');
//   };

//   return (
//     <div className={styles.upload}>
//       <Edit onSubmit={handleSubmit}>
//         <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
//       </Edit>
//     </div>
//   );
// };

const TypeId = () => {
  const [typedId, setTypedId] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  //   // NEED TO INTEGRATE WITH NEXT PAGE AND BACKEND
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setMsg(`pass this id ', ${typedId}`);
  //     alert(`pass this id ', ${typedId}`);
  //     setMsg('');
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Navigate to the Dashboard component
      navigate('/dashboard');
      // Navigate to the Dashboard component
      const apiUrl = 'http:localhost:3000';

      // Send a POST request to the backend with the typedId as payload
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sjsuId: typedId }),
      });

      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json();
        // You can update the state or navigate to the next page here based on the response
        console.log(responseData);
      } else {
        throw new Error('Failed to submit SJSU ID');
      }
    } catch (error) {
      console.error('Error submitting SJSU ID:', error);
    }
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
        {/* <br></br>Please upload your profile image and type your student ID */}
        <br></br>Please type your student ID
      </Paragraph>

      {/* <CardProfile /> */}
      <TypeId />
    </div>
  );
};

export default IDCardPage;
