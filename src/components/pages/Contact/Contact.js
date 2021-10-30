import React from 'react';
import { Col, Container, Form, Row, } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="text-dark py-5 my-5 quality">
            <Container className="py-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14589.303025975083!2d90.2275441!3d23.9135162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2176788be7d11a1!2sUpazila%20Health%20Complex%20Dhamrai!5e0!3m2!1sen!2sbd!4v1634674506179!5m2!1sen!2sbd" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
            </Container>
            <Container className="py-5">
                <h1 className="text-start mb-5">Feel Free To Reach us.</h1>
                <Row className="g-5">
                    <Col sm={12} md={6}>
                        <div>
                            <img className="img-fluid" src="https://image.freepik.com/free-photo/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard_1098-20374.jpg" alt="hero" />
                        </div>

                    </Col>
                    <Col sm={12} md={6} className="text-start mx-auto">

                        <h2 className="mb-5">Have any question?</h2>

                        {/* contract From  */}
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" placeholder="How can we help you?" rows={3} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Where you from?" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>
                            <button className="btn btn-info text-white px-5 mt-3">
                                Send
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Contact;