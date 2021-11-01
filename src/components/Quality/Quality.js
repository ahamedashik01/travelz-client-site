import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Quality = () => {
    return (
        <div className="my-5 py-5 quality">
            <Container className="my-5 pb-5">
                <Row className="d-flex justify-content-between align-items-center g-5">
                    <Col sm={12} md={6}>
                        <div className="text-start">
                            <h6 className="mb-4">Our Promise</h6>
                            <h1 className="mb-4">What We Offer In Situations.</h1>
                            <i className="text-secondary fs-1 fas fa-people-carry mb-5"></i> <br />
                            <p className="text-color mb-5">Where you are at the heart of our mission. We hope you will consider us as your dream Tracel agency—the place where you feel safe, comfortable and cared for. As a multi-specialty travelers group,</p>
                        </div>
                        <div>
                            <Row className="g-4">
                                <Col xs={12} sm={12} md={6}>
                                    <div className="h-card shadow p-4 text-start rounded-3" >
                                        <div className="icon">
                                            <i className="fs-1 fas fa-stethoscope mb-5"></i>
                                        </div>
                                        <h4>Medical Treatment</h4>
                                        <p>
                                            Whether you're taking your first steps, just finding your stride.
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="h-card shadow p-4 text-start rounded-3" >
                                        <div className="icon">
                                            <i className="fs-1 fas fa-ambulance mb-5"></i>
                                        </div>
                                        <h4>Emergency Help</h4>
                                        <p>
                                            Whether you're taking your first steps, just finding your stride.
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="h-card shadow p-4 text-start rounded-3" >
                                        <div className="icon">
                                            <i className="fs-1 fab fa-accessible-icon mb-5"></i>
                                        </div>
                                        <h4>Accessible Care </h4>
                                        <p>
                                            Special looking for the accessible for better experience in travel.
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="h-card shadow p-4 text-start rounded-3" >
                                        <div className="icon">
                                            <i className="fs-1 fas fa-globe-africa mb-5"></i>
                                        </div>
                                        <h4>Gobal Translator</h4>
                                        <p>
                                            We have the best translator for every native language.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className=" mt-5 pt-5">
                            <img className="img-fluid" src="https://image.freepik.com/free-photo/two-hands-united-middle-diversity_53876-98410.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="mt-5 p-5 shadow-lg">
                <Container>
                    <Row className="g-5">
                        <Col sm={12} md={3}>
                            <div>
                                <div className="mb-3">
                                    <i className="text-dark fs-1 fas fa-user-nurse"></i>
                                </div>
                                <h6>Years of Experience</h6>
                                <h1>11</h1>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div>
                                <div className="mb-3">
                                    <i className="text-dark fs-1 fas fa-flag-usa"></i>
                                </div>
                                <h6>Country Traveled</h6>
                                <h1>12</h1>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div>
                                <div className="mb-3">
                                    <i className="text-dark fs-1 far fa-hospital"></i>
                                </div>
                                <h6>Medical Team</h6>
                                <h1>68</h1>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div>
                                <div className="mb-3">
                                    <i className="text-dark fs-1 fas fa-smile-beam"></i>
                                </div>
                                <h6>Happy Travelers</h6>
                                <h1>9036</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Quality;