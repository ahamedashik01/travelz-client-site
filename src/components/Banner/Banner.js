import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-banner border-start border-5 border-info w-50 mx-auto text-start p-5 lh-lg block ">
                        <h1 className="text-white">Backpacking Trips For Solo<br />
                            <span className="text-info">Travellers</span></h1>
                        <p className="text-white fs-5">Travel & make new friends!</p>
                        <button className="btn btn-info text-white px-4">About Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGhpbmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="bg-banner border-start border-5 border-info w-50 mx-auto text-start p-5 lh-lg block">
                        <h1 className="text-white">Backpacking Trips For Solo <br /> <span className="text-info">Travellers</span></h1>
                        <p className="text-white fs-5">Travel & make new friends!</p>
                        <button className="btn btn-info text-white px-4 ">About Us</button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;