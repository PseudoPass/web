import "./styles/HomePage.css";
import React, {useEffect, useState} from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";

const HomePage = () => {

    return (
        <div className={"main-container"}>
            <div className={"logo-text"}>Pseudo Pass</div>
                <div className={"catchphrase"}>PseudoPass believes there is a better way</div>
                <div className={"carousel"}>
                    <Carousel>
                        <CarouselItem>You don’t know you… until you pseudo pass through.</CarouselItem>
                        <CarouselItem>Your identity is eternal, Pseudo Pass it on the blockchain.</CarouselItem>
                        <CarouselItem>  Can you really trust yourself, if you aren’t PseudoPassed?</CarouselItem>
                    </Carousel>
                </div>
        </div>
    );
}
export default HomePage;