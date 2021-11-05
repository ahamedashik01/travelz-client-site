import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ibb.co/zbpZS1z/Screenshot-7.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-banner border-start border-5 border-dark w-50 mx-auto text-start p-5 lh-lg block ">
                        <h1 className="text-dark">Backpacking Trips For Solo<br />
                            <span className="text-white">Travellers</span></h1>
                        <p className="text-dark fs-5">Travel & make new friends!</p>
                        <button className="btn btn-dark text-white px-4">About Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/n8hMM8C/Screenshot-8.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="bg-banner border-start border-5 border-info w-50 mx-auto text-start p-5 lh-lg block">
                        <h1 className="text-dark">Backpacking Trips For Solo <br /> <span className="text-info">Travellers</span></h1>
                        <p className="text-dark fs-5">Travel & make new friends!</p>
                        <button className="btn btn-dark text-white px-4 ">About Us</button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;