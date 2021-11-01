import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, tourTittle, thumNail, des, tourCost, tourLength, noOFMeal, noOFAct, avgGrpSize_min, avgGrpSize_max } = props.package
    return (
        <Col sm={12} md={4}>
            <div className="p-3 shadow ">
                <div className="des text-start mt-2">
                    <h4 className="mb-3">{tourTittle} <Badge className="ms-2" pill bg="dark"><i className="fas fa-pound-sign me-2"></i>{tourCost}</Badge></h4>
                </div>
                <div className="service-card-img">
                    <img src={thumNail} alt="packageImage" />
                </div>
                <div className="des text-start py-3">
                    <p className="p-3">{des}</p>
                    <Row className="p-2 quality">
                        <Col sm={6} md={6}>
                            <div className="d-flex justify-content-start align-items-top">
                                <i className="far fa-calendar-alt fs-2 me-3"></i>
                                <div className="d-flex flex-column align-items-start justify-content-center">
                                    <h6>Tour Length</h6>
                                    <p>{tourLength} Days</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6}>
                            <div className="d-flex justify-content-start align-items-top">
                                <i className="fas fa-hiking fs-2 me-3"></i>
                                <div className="d-flex flex-column align-items-start justify-content-center">
                                    <h6>No. Of Activities</h6>
                                    <p>{noOFAct}</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6}>
                            <div className="d-flex justify-content-start align-items-top">
                                <i className="fas fa-utensils fs-2 me-3"></i>
                                <div className="d-flex flex-column align-items-start justify-content-center">
                                    <h6>No. Of Meal</h6>
                                    <p>{noOFMeal}</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6}>
                            <div className="d-flex justify-content-start align-items-top">
                                <i className="fas fa-users fs-2 me-2"></i>
                                <div className="d-flex flex-column align-items-start justify-content-center">
                                    <h6>Group Size</h6>
                                    <p>{avgGrpSize_min} - {avgGrpSize_max}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <div >
                            <Link className="text-dark" to={`/packages/${_id}`}>
                                <p className="fs-5 text-center text-dark">see what's inclued?</p>
                            </Link>
                        </div>
                        <button className="btn btn-dark text-white px-4 rounded-pill">Book Now</button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Package;