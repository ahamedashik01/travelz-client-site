import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Quality = () => {
    return (
        <div className="my-5 py-5 quality">
            <Container className="my-5 pb-5">
                <Row>
                    <Col sm={12} md={6}>
                        <div className="text-start">
                            <h6 className="mb-4">Our Promise</h6>
                            <h1 className="mb-4">Who We Are Pioneering in Health.</h1>
                            <i className="text-info fs-1 fas fa-heartbeat mb-5"></i> <br />
                            <p className="text-color mb-5">Where you are at the heart of our mission. We hope you will consider us as your medical home—the place where you feel safe, comfortable and cared for. As a multi-specialty medical group,</p>
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
                                            Whether you're taking your first steps, just finding your stride,
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
                                            Whether you're taking your first steps, just finding your stride,
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="h-card shadow p-4 text-start rounded-3" >
                                        <div className="icon">
                                            <i className="fs-1 fas fa-user-md mb-5"></i>
                                        </div>
                                        <h4>Qualified Doctors</h4>
                                        <p>
                                            Whether you're taking your first steps, just finding your stride,
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="h-card shadow p-4 text-start rounded-3" >
                                        <div className="icon">
                                            <i className="fs-1 fas fa-medkit mb-5"></i>
                                        </div>
                                        <h4>Medical Professionals</h4>
                                        <p>
                                            Whether you're taking your first steps, just finding your stride,
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className=" mt-5 pt-5">
                            <img className="img-fluid" src="https://i.ibb.co/608SWJ2/image-5.jpg" alt="" />
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
                                    <i className="text-info fs-1 fas fa-user-nurse"></i>
                                </div>
                                <h6>Years of Experience</h6>
                                <h1>25</h1>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div>
                                <div className="mb-3">
                                    <i className="text-info fs-1 fas fa-users"></i>
                                </div>
                                <h6>Clinic Spesialities</h6>
                                <h1>470</h1>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div>
                                <div className="mb-3">
                                    <i className="text-info fs-1 far fa-hospital"></i>
                                </div>
                                <h6>Medical Spesialities</h6>
                                <h1>689</h1>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div>
                                <div className="mb-3">
                                    <i className="text-info fs-1 fas fa-smile-beam"></i>
                                </div>
                                <h6>Happy Patients</h6>
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