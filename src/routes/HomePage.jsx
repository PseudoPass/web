import React, { useEffect } from 'react';
import { Carousel, CarouselItem } from "react-bootstrap";
import { gsap } from "gsap";
import { SplitText } from "split-text-js";
import "./styles/HomePage.css";
import "./styles/HomePage.scss";

const HomePage = () => {

    useEffect(() => {
        const titles = gsap.utils.toArray('.text-wrapper p');
        const tl = gsap.timeline();
        titles.forEach((title => {
            const splitTitle = new SplitText(title);
            tl.from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: 0.2
            }, "<").to (splitTitle.chars, {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: 0.2
            }, "<1")
        }));
        
    }, []);

    return (
        <div className="main-container">
            <div className="logo-text">Pseudo Pass</div>
            <div className="catchphrase">PseudoPass believes there is a better way</div>
            <div className="carousel">
                <Carousel>
                    <CarouselItem>You don’t know you… until you pseudo pass through.</CarouselItem>
                    <CarouselItem>Your identity is eternal, Pseudo Pass it on the blockchain.</CarouselItem>
                    <CarouselItem>Can you really trust yourself, if you aren’t PseudoPassed?</CarouselItem>
                </Carousel>
                <div className="container">
                    <div className="text-wrapper">
                        <p>You don’t know you… until you pseudo pass through.</p>
                        <p>Your identity is eternal, Pseudo Pass it on the blockchain.</p>
                        <p>Can you really trust yourself, if you aren’t PseudoPassed?</p>
                        <p>You never really know how much you can handle until you Pseudo Pass your limits.</p>
                        <p>You never really know how far you can go until you Pseudo Pass the point of no return.</p>
                    </div>
                    <iframe style={{ border: 'none' }} title="pseudo pass" width="540" height="540" src="https://rive.app/s/UCwCVZW5mECdeVn6dWKQoQ/embed" allowFullScreen />
                    <iframe style={{ border: 'none' }} title="Finger Print" width="500" height="500" src="https://rive.app/s/LXIEKoNUAkO9hNuPmrPsdA/embed" allowFullScreen />
                    <iframe style={{ border: 'none' }} title="server" width="700" height="700" src="https://rive.app/s/dlQ_86dYH06ZyXgR9BSd_g/embed" allowFullScreen />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
