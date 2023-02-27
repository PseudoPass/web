import React, { useEffect } from 'react';
import './styles/HomePage.scss';
import { Layout, Typography } from 'antd';
import Logo from './img/logo.png';
import FirstImg from './img/firstImg.png';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';
import { AiFillPlayCircle } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = (props) => {
  const { setProfile } = props;
  return (
    <>
      <Layout className="layout">
        <Header style={{ background: '#DFFFD8', height: '150px' }}>
          <div style={{ marginTop: '44px' }}>
            <img className="logo" src={Logo} alt="logo" />
          </div>
        </Header>
        <Content>
          <div className="content">
            <div className="first-layout-content">
              <div className="left_content">
                <img src={FirstImg} className="firstImg" />
              </div>
              <div className="fist_right_content">
                <Title level={2}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        'Leave your ID at home!',
                        'Just bring your pseudo pass!',
                      ],
                    }}
                  />
                </Title>
                <Paragraph style={{ fontSize: 20 }}>
                  Once you generate your DID and Issue a credentials,
                  <br /> you will be given a pseudo pass, Mobile digital <br />{' '}
                  identification card secured by blockchain.
                </Paragraph>

                <div className="loginPart">
                  <Paragraph
                    style={{
                      fontSize: 17,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Login using&nbsp;<b>SJSU</b>&nbsp;Credentials
                  </Paragraph>
                </div>
                <div className="googleBtn">
                  <GoogleLoginButton setProfile={setProfile} />
                </div>
              </div>
            </div>
            <div className="layout-content" style={{ background: '#defcf9' }}>
              <div className="left_content">
                <Title level={2}>Pseudo Pass 101</Title>
                <Paragraph style={{ fontSize: 17 }}>
                  Pseudo Pass is a project aimed at providing a digital form of
                  identification for users. The project utilizes decentralized
                  identifiers (DIDs) and verifiable credentials (VCs) to create
                  a secure and private digital identity for users. A DID is a
                  new type of identifier that allows for a verifiable,
                  decentralized digital identity. VCs are a sub-technology used
                  to express credentials on the Web in a cryptographically
                  secure, privacy-preserving, and machine-verifiable manner. The
                  Dock.io API is used to support the creation of DIDs and VCs.
                  Pseudo Pass has the potential to bring a lot of positive
                  changes globally as it gives users control over their own
                  identity and protects their privacy. By converting physical
                  forms of identification to digital forms, the project can save
                  time and money for busy individuals and benefit society
                  economically.
                </Paragraph>
              </div>
              <div className="right_content">
                <iframe
                  style={{ border: 'none' }}
                  title="pseudo pass"
                  src="https://rive.app/s/UCwCVZW5mECdeVn6dWKQoQ/embed"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="layout-content" style={{ background: '#dfffd8' }}>
              <div className="right_content">
              <iframe
                  style={{ border: 'none' }}
                  title="Finger Print"
                  src="https://rive.app/s/LXIEKoNUAkO9hNuPmrPsdA/embed"
                  allowFullScreen
                />
              </div>
              <div className="left_content">
                <Title level={2}>Pseudo Pass 101</Title>
                <Paragraph style={{ fontSize: 17 }}>
                  The quick brown fox jumps over the lazy dog. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce viverra, ligula a
                  efficitur vestibulum, ipsum tellus bibendum lorem, quis
                  euismod enim ante vel nibh. Suspendisse potenti. Sed eget
                  mauris blandit, malesuada eros et, dignissim
                </Paragraph>
              </div>
            </div>
            <div className="layout-content" style={{ background: '#defcf9' }}>
              <div className="left_content">
                <Title level={2}>VCs</Title>
                <Paragraph style={{ fontSize: 17 }}>
                  Verifiable Credentials (VCs) are secure digital certificates
                  that represent claims made by individuals or organizations.
                  They provide a tamper-proof way to verify information and are
                  signed by the issuer to create a digital signature. VCs are
                  used for identity management and can store information such as
                  name, address, and qualifications. They are portable and can
                  be used across different systems, making them a useful tool
                  for secure identity systems. VCs follow the W3C Verifiable
                  Credentials Data Model, which includes components such as
                  subject, issuer, claim, and signature to create a secure
                  representation of information that can verify claims.
                </Paragraph>
              </div>
              <div className="right_content">
                <iframe
                  style={{ border: 'none' }}
                  title="server"
                  src="https://rive.app/s/dlQ_86dYH06ZyXgR9BSd_g/embed"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#DFFFD8' }}>
          @ copyright 2023 by Pseudo Pass
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
