import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer py-3 text-start">
            <Container>
                <Row className="pt-4">
                    <Col sm={12} md={6}>
                        <div className="px-5">
                            <h1 className="text-white mb-4"><i className="fas fa-plane-departure me-2"></i> Travelz</h1>
                            <p className="text-white">We are a multi-national team based in Bangkok, Thailand who provide a simple, affordable way for solo backpackers to travel and meet new friends with an around-the-clock focus on comfort, convenience, and safety!</p><br />
                            <p className="text-white">We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                            <div className="mt-5 px-5 d-flex justify-content-evenly align-items-center">
                                <i className="fs-2 fab fa-facebook"></i>
                                <i className="fs-2 fab fa-google-plus"></i>
                                <i className="fs-2 fab fa-linkedin-in"></i>
                                <i className="fs-2 fab fa-twitter"></i>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="text-start departments">
                            <h3 className="text-white">Tours</h3>
                            <ul className="list-unstyled mt-3 text-white text-start">
                                <li className="mb-2">Thailand</li>
                                <li className="mb-2">Bali</li>
                                <li className="mb-2">Cambodia</li>
                                <li className="mb-2">Srilanka</li>
                                <li className="mb-2">Vietnam</li>
                                <li className="mb-2">Bangladesh</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="text-start text-white p-4 contact">
                            <div className="text-start d-flex justify-content-start align-items-center">
                                <i className="secondary-color fs-1 me-3 fas fa-map-marker-alt"></i>
                                <div>
                                    <p>Islampur,Dharami,Dhaka</p>
                                </div>
                            </div>
                            <div className="text-start d-flex justify-content-start align-items-center">
                                <i className="secondary-color fs-1 me-3 fas fa-phone-alt"></i>
                                <div>
                                    <p>Mon-Fri : 08:30 - 18:00 <br />
                                        +89654 2586 5748</p>
                                </div>
                            </div>
                            <div className="text-start d-flex justify-content-start align-items-center">
                                <i className="secondary-color fs-1 me-3 fas fa-envelope"></i>
                                <div>
                                    <p>If youhave Questions?<br />
                                        Info@gmail.com</p>
                                </div>
                            </div>
                            <div className="text-start d-flex justify-content-start align-items-center">
                                <i className=" secondary-color far fa-clock fs-1 me-3"></i>
                                <div>
                                    <p className="text-white">Mon to Sat 8.00 to 18.00.<br />
                                        Sunday CLOSED</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <p className="mt-5 text-center text-white">Copyright © 2020 travelz All Rights Reserved.</p>
            </Container>
        </div >
    );
};

export default Footer;