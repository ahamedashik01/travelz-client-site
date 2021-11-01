import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mt-5 pt-5" >
            <Container>
                <div style={{ backgroundImage: "url('https://image.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className=" text-dark py-5">
                    <Container className="p-5">
                        <Row className="5">
                            <Col sm={12} md={6} className="text-start my-5">
                                <h1 className="fs-large fw-bold">Who are we</h1>
                                <p className="fs-5 mt-4 sf-text-color text-start">We are a multi-national team based in Bangkok, Thailand who provide a simple, affordable way for solo backpackers to travel and meet new friends with an around-the-clock focus on comfort, convenience, and safety!</p>
                                <button className="btn btn-dark rounded-pill px-3 text-white mt-5">Make A Tour Now</button>
                            </Col>
                            <Col sm={12} md={6} className="shadow mt-4">
                                <img className="img-fluid" src="https://image.freepik.com/free-photo/group-friends-have-holiday-together-meeting-consult-about-plan_1150-4625.jpg" alt="hero" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container className="my-5 py-5">
                <Row>
                    <Col md={6} sm={12}>
                        <img className="img-fluid" src="http://blog.westminster.ac.uk/wp-content/uploads/sites/16/2019/07/f-a-q-4226.png?resize=823%2C400" alt="" />
                    </Col>
                    {/* accordion  */}
                    <Col md={6} sm={12} className="my-auto py-5 my-5">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header > <h6> How do I make an Booking? </h6></Accordion.Header>
                                <Accordion.Body className="text-start">
                                    To make Booking for Consultation with our Consultants who sit in our Out-patient Departments, please call our hotline 10666 from any phone anywhere in the country or you can call in our booking Desk landline 02 22 22 62 466 you can call in these numbers to make booking for any investigations or procedures as well.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <h6> Do you have Consultants available for 24 hours? </h6></Accordion.Header>
                                <Accordion.Body className="text-start">
                                    In our agency, to provide Consultation services, our Consultants are available from 7am till 9pm on weekdays (Saturday to Thursday); of course the time varies from Consultant to Consultant; in Friday as well we have few Consultants sitting their OPD. To know details as per your choice of Consultant, please call in our  hotline number 10666 from any phone anywhere in the country or you can call in our booking Desk landline 02 22 22 62 466
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h6> Who can I call for assistance in the Agency during odd hours or on holidays?</h6></Accordion.Header>
                                <Accordion.Body className="text-start">
                                    For enquiries within the Agency during odd hours and on holidays, please call our Duty Manager at 01914001399. For any enquiry about any clinical condition.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <h6>How will I make an insurance claim?</h6></Accordion.Header>
                                <Accordion.Body className="text-start">First please check whether you have GOP (Guarantee of Payment) letter issued by your Insurance Company to avail the specific service that you have come for (either in OPD or IPD). Also check whether your insurance company has any formal agreement with United Agency, being enlisted makes the job faster. As a note of authentification, during the time of service, you need to show your Health Card and GOP issued by your Insurance Company.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default About;