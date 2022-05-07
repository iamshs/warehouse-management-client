import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner from  '../../Images/banner.jpg'
import banner1 from  '../../Images/banner1.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 img"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Explore Your Wild Life</h1>
                    <p>We do not own the planet Earth, we belong to it. And we must share it with our wildlife. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Explore the Nature</h1>
                    <p>Look deep into nature, and then you will understand everything better.</p>
                </Carousel.Caption>
            </Carousel.Item>
          
        </Carousel>
        </div>
    );
};

export default Banner;
