import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const MemberShip = () => {
    return (
        <div className="pricing my-5 py-5">
            <h6 >Our</h6>
            <h1>Membership Plan</h1>
            <i className="text-dark fs-1 fas fa-comment-dollar my-4 py-3"></i>
            <Container>
                <Row className="g-5">
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$299</h1>
                                <h5>Per Year</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Primium</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i> Business Class Flight</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i> Personal Room</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i>  Personal Photographer</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i>  Primium Meal</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-dark rounded-pill text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$150</h1>
                                <h5>Per Year</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Detal Care</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-danger far fa-times-circle my-3 me-3"></i> Business Class Flight</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i> Personal Room</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i>   Personal Photographer</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i>  Primium Meal</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-dark rounded-pill text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$120</h1>
                                <h5>Per Year</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Body Checkup</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-danger far fa-times-circle my-3 me-3"></i> Business Class Flight</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-danger far fa-times-circle my-3 me-3"></i>  Personal Room</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i>  Personal Photographer</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i>  Primium Meal</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-dark rounded-pill text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$100</h1>
                                <h5>Per Year</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Blood Test</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-danger far fa-times-circle my-3 me-3"></i> Business Class Flight</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-danger far fa-times-circle my-3 me-3"></i> Personal Room</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-danger far fa-times-circle my-3 me-3"></i> Personal Photographer</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-dark fas fa-check my-3 me-3"></i> Primium Meal</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-dark rounded-pill text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MemberShip;