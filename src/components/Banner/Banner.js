import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://image.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-white border-start border-5 border-info w-50 mx-auto text-start p-5 lh-lg block ">
                        <h6 className="text-color">Welcome To Our Hospital</h6>
                        <h1 className="text-color">We Provide Total <br />
                            <span className="text-info">Healthcare</span> Solutions</h1>
                        <p className="text-color fs-5">Find The Top Level  Service From Top level<br /> Doctors. Proudly helping people from 1993.</p>
                        <button className="btn btn-info text-white px-4">About Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/doctor-nurse-special-equipment_23-2148980714.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="bg-white border-start border-5 border-info w-50 mx-auto text-start p-5 lh-lg block">
                        <h6 className="text-color">Welcome To Our Hospital</h6>
                        <h1 className="text-color">We Provide Total <br /> <span className="text-info">Healthcare</span> Solutions</h1>
                        <p className="text-color fs-5">Find The Top LevelService From Top level<br />  Doctors. Proudly helping people  from 1993.</p>
                        <button className="btn btn-info text-white px-4 ">About Us</button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;