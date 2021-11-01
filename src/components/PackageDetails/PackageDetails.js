import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PackageDetails = () => {
    const [packages, setPackages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://fierce-lowlands-27228.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    const found = packages.find(e => e._id === id);


    return (
        <div className="my-5 py-5 ">
            <Container>
                <Row>
                    <Col sm={12} md={9}>
                        <div className="text-start">
                            <h1 className="mb-4">Backpacking {found ? found.tourTittle : ''}</h1>
                            <p className="mb-4 fs-4">{found ? found.headerDes : ''}</p>
                            <img className="img-fluid" src={found ? found.thumNail : ''} alt="" />
                            <p>{found ? found.detailDes : ''}</p>
                            <h3 className="mb-4">Package Includes</h3>
                            <ul>
                                {
                                    found ? found.pakageInc.map(e => <li className="mb-2">{e}</li>) : ''
                                }
                            </ul>
                            <button className="btn btn-dark text-white mt-3 px-4 rounded-pill">Book Now</button>
                        </div>
                    </Col>
                    <Col sm={12} md={3} className="mb-5">
                        <div className="p-3 shadow ">
                            <div className="des text-start mt-2">
                                <h3 className="mb-3">{found ? found.tourTittle : ''} <Badge className="ms-2" pill bg="dark"><i className="fas fa-pound-sign me-2"></i>{found ? found.tourCost : ''}</Badge></h3>
                                <hr />
                            </div>

                            <div className="des text-start py-3">
                                <Row className="p-2 quality">
                                    <Col sm={6} md={6}>
                                        <div className="d-flex justify-content-start align-items-top">
                                            <i className="far fa-calendar-alt fs-2 me-3"></i>
                                            <div className="d-flex flex-column align-items-start justify-content-center">
                                                <h6>Tour Length</h6>
                                                <p>{found ? found.tourLength : ''} Days</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} md={6}>
                                        <div className="d-flex justify-content-start align-items-top">
                                            <i className="fas fa-hiking fs-2 me-3"></i>
                                            <div className="d-flex flex-column align-items-start justify-content-center">
                                                <h6>No. Of Activities</h6>
                                                <p>{found ? found.noOFAct : ''}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} md={6}>
                                        <div className="d-flex justify-content-start align-items-top">
                                            <i className="fas fa-utensils fs-2 me-3"></i>
                                            <div className="d-flex flex-column align-items-start justify-content-center">
                                                <h6>No. Of Meal</h6>
                                                <p>{found ? found.noOFMeal : ''}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} md={6}>
                                        <div className="d-flex justify-content-start align-items-top">
                                            <i className="fas fa-users fs-2 me-2"></i>
                                            <div className="d-flex flex-column align-items-start justify-content-center">
                                                <h6>Group Size</h6>
                                                <p>{found ? found.avgGrpSize_min : ''} - {found ? found.avgGrpSize_max : ''}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button className="btn btn-dark text-white px-4 rounded-pill">Book Now</button>
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