import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PackageDetails = () => {
    const [packages, setPackages] = useState([]);
    const { id } = useParams();

    const url = `https://fierce-lowlands-27228.herokuapp.com/packages/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    const { _id, tourTittle, thumNail, detailDes, headerDes, pakageInc, tourCost, tourLength, noOFMeal, noOFAct, avgGrpSize_min, avgGrpSize_max } = packages;

    return (
        <div className="my-5 py-5 ">
            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        <div className="text-start">
                            <h1 className="mb-4">Backpacking {tourTittle}</h1>
                            <p className="mb-4 fs-4">{headerDes}</p>
                            <img className="img-fluid" src={thumNail} alt="" />
                            <p>{detailDes}</p>
                            <h3 className="mb-4">Package Includes</h3>
                            <ul>
                                {
                                    pakageInc?.map(p => <li> {p} </li>)
                                }
                            </ul>
                            <Link to={`/booking/${_id}`}>
                                <button className="btn btn-dark text-white mt-4 px-4 rounded-pill">Book Now</button>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="mb-5">
                        <div className="p-3 shadow ">
                            <div className="des text-start mt-2">
                                <h3 className="mb-3">{tourTittle} <Badge className="ms-2" pill bg="dark"><i className="fas fa-pound-sign me-2"></i>{tourCost}</Badge></h3>
                                <hr />
                            </div>
                            <div className="des text-start py-3">
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
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link to={`/booking/${_id}`}>
                                        <button className="btn btn-dark text-white px-4 rounded-pill">Book Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default PackageDetails;