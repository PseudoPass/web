import React, { useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './styles/HomePage.css';
import Animation from '../components/Animation/Animation';

const HomePage = () => {
  return (
    <div className="main-container">
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
      {/* <Animation /> */}
    </div>
  );
};

export default HomePage;
