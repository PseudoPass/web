import React, { useEffect } from 'react';
import './styles/HomePage.scss';
import Animation from '../components/Animation/Animation';
import { Layout, Typography } from 'antd';
import Logo from './img/logo.png';
import FirstImg from './img/firstImg.png';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';

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
                  PseudoPass believes there is a better way
                </Title>
                <Paragraph style={{ fontSize: 20 }}>
                  You don’t know you… until you pseudo pass through.<br></br>{' '}
                  Your identity is eternal, Pseudo Pass it on the blockchain.
                  <br></br> Can you really trust yourself, if you aren’t
                  PseudoPassed?
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
                  The quick brown fox jumps over the lazy dog. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce viverra, ligula a
                  efficitur vestibulum, ipsum tellus bibendum lorem, quis
                  euismod enim ante vel nibh. Suspendisse potenti. Sed eget
                  mauris blandit, malesuada eros et, dignissim
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
                <Title level={2}>Pseudo Pass 101</Title>
                <Paragraph style={{ fontSize: 17 }}>
                  The quick brown fox jumps over the lazy dog. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce viverra, ligula a
                  efficitur vestibulum, ipsum tellus bibendum lorem, quis
                  euismod enim ante vel nibh. Suspendisse potenti. Sed eget
                  mauris blandit, malesuada eros et, dignissim
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
