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
                                <p className="fs-5 mt-4 sf-text-color text-start">Our highly skilled team of nursing and medical staff take pride in developing a distinctive private hospital experience and a quality of care that is recognised by the community. Throughout our patients’ stay, from pre-admission to discharge, each patient is treated with the utmost respect and dignity. Our five modern operating theatres are equipped with the latest technical equipment, supporting minor and complex surgery..</p>
                                <button className="btn btn-info px-3 text-white mt-5">Start Learning Now</button>
                            </Col>
                            <Col sm={12} md={6} className="shadow mt-4">
                                <img className="img-fluid" src="https://image.freepik.com/free-photo/team-doctors-standing-together-hospital-premises_107420-84768.jpg" alt="hero" />
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
                                <Accordion.Header > <h6> How do I make an Appointment? </h6></Accordion.Header>
                                <Accordion.Body className="text-start">
                                    To make appointment for Consultation with our Consultants who sit in our Out-patient Departments, please call our hotline 10666 from any phone anywhere in the country or you can call in our Appointment Desk landline 02 22 22 62 466 you can call in these numbers to make appointment for any investigations or procedures as well.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <h6> Do you have Consultants available in United Hospital for 24 hours? </h6></Accordion.Header>
                                <Accordion.Body className="text-start">
                                    In out-patient department, to provide Consultation services, our Consultants are available from 7am till 9pm on weekdays (Saturday to Thursday); of course the time varies from Consultant to Consultant; in Friday as well we have few Consultants sitting their OPD. To know details as per your choice of Consultant, please call in our  hotline number 10666 from any phone anywhere in the country or you can call in our Appointment Desk landline 02 22 22 62 466
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h6> Who can I call for assistance in the hospital during odd hours or on holidays?</h6></Accordion.Header>
                                <Accordion.Body className="text-start">
                                    For enquiries within the hospital during odd hours and on holidays, please call our Duty Manager at 01914001399. For any enquiry about any clinical condition of any admitted patient, please call Clinical Coordinators at 01914001310 who are available in the hospital 24/7; they are doctors and they can answer your queries about any admitted patient
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <h6>How will I make an insurance claim?</h6></Accordion.Header>
                                <Accordion.Body className="text-start">First please check whether you have GOP (Guarantee of Payment) letter issued by your Insurance Company to avail the specific service that you have come for (either in OPD or IPD). Also check whether your insurance company has any formal agreement with United Hospital, being enlisted makes the job faster. As a note of authentification, during the time of service, you need to show your Health Card and GOP issued by your Insurance Company.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <h6>Does the hospital offer any spiritual services?</h6></Accordion.Header>
                                <Accordion.Body className="text-start">For the Male Muslims the prayer room is located at the ground floor in the hospital lobby just besides Blood Bank and for the Female at 1st floor beside the Ultrasonography wing.
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