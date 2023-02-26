import React, { useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './styles/HomePage.scss';
import { Breadcrumb, Layout, Typography, theme } from 'antd';
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
            <div className="green-site-layout-content">
              <div className="left_content">
                <img src={FirstImg} className="firstImg" />
              </div>
              <div className="right_content">
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
                <div className={'login-text'}>
                  Login using <b>SJSU</b> Credentials
                </div>
                <GoogleLoginButton setProfile={setProfile} />
                <a href={'https://www.example.com/watch-demo'}>
                  <div className={'login-text'}>
                    Watch demo video to learn more <AiFillPlayCircle />
                  </div>
                </a>
              </div>
            </div>
            <div className="blue-site-layout-content">
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
                  DIDs (Decentralized Identifiers) are a type of digital
                  identifier that provide secure and private digital identities.
                  Unlike traditional digital identities, DIDs are managed by the
                  individual and stored on a decentralized platform, usually a
                  blockchain, making them tamper-proof and secure. DIDs give the
                  individual control over their digital identity and allow for
                  self-sovereign identity. They can be used with verifiable
                  credentials to authenticate and verify information, making
                  them useful for secure online transactions and access to
                  physical premises. The W3C has made DIDs a standard for
                  decentralized identity.
                </Paragraph>
              </div>
            </div>
            <div className="blue-site-layout-content">
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
