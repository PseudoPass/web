import React, { useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './styles/HomePage.scss';
import Animation from '../components/Animation/Animation';
import { Breadcrumb, Layout, Typography, theme } from 'antd';
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
            <div className="green-site-layout-content">
              <div className="left_content">
                <img src={FirstImg} className="firstImg" />
              </div>
              <div className="right_content">
                <Title level={2}>
                  PseudoPass believes there is a better way
                </Title>
                <Paragraph style={{ fontSize: 20 }}>
                  You don’t know you… until you pseudo pass through.<br></br>{' '}
                  Your identity is eternal, Pseudo Pass it on the blockchain.
                  <br></br> Can you really trust yourself, if you aren’t
                  PseudoPassed?
                </Paragraph>
                <div className={'login-text'}>
                  Login using <b>SJSU</b> Credentials
                </div>
                <GoogleLoginButton setProfile={setProfile} />
              </div>
            </div>
            <div className="blue-site-layout-content">
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
            <div
              className="green-site-layout-content"
              style={{ minHeight: '28rem' }}
            >
              <div className="left_content" style={{ paddingRight: '6rem' }}>
                <iframe
                  style={{ border: 'none' }}
                  title="Finger Print"
                  src="https://rive.app/s/LXIEKoNUAkO9hNuPmrPsdA/embed"
                  allowFullScreen
                />
              </div>
              <div className="right_content" style={{ paddingRight: '20rem' }}>
                <Title level={2}>DIDs</Title>
                <Paragraph style={{ fontSize: 17 }}>
                  The quick brown fox jumps over the lazy dog.
                </Paragraph>
              </div>
            </div>
            <div className="blue-site-layout-content">
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

      {/* <div className="main-container">
        <div className="logo-text">Pseudo Pass</div>
        <div className="catchphrase">
          PseudoPass believes there is a better way
        </div>
        <div className="carousel">
          <Carousel>
            <CarouselItem>
              You don’t know you… until you pseudo pass through.
            </CarouselItem>
            <CarouselItem>
              Your identity is eternal, Pseudo Pass it on the blockchain.
            </CarouselItem>
            <CarouselItem>
              Can you really trust yourself, if you aren’t PseudoPassed?
            </CarouselItem>
          </Carousel>
        </div>

        <iframe
          style={{ border: 'none' }}
          title="pseudo pass"
          width="540"
          height="540"
          src="https://rive.app/s/UCwCVZW5mECdeVn6dWKQoQ/embed"
          allowFullScreen
        />
        <iframe
          style={{ border: 'none' }}
          title="Finger Print"
          width="500"
          height="500"
          src="https://rive.app/s/LXIEKoNUAkO9hNuPmrPsdA/embed"
          allowFullScreen
        />
        <iframe
          style={{ border: 'none' }}
          title="server"
          width="700"
          height="700"
          src="https://rive.app/s/dlQ_86dYH06ZyXgR9BSd_g/embed"
          allowFullScreen
        />
      </div> */}
    </>
  );
};

export default HomePage;
