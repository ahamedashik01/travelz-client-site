import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();

    const userImg = user.photoURL;
    return (
        <div className="secondary-color">
            <div >
                <Container className="border-top border-5 border-info">
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="py-2 d-flex ">
                                <div className="d-flex justify-content-center align-items-center me-5">
                                    <i className="block secondary-color fs-1 me-3 fas fa-map-marker-alt"></i>
                                    <div className="block">
                                        <small className="text-color">234 Islampur, <br /> Dhamrai,
                                            Dhaka, Bd</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <i className="block secondary-color far fa-clock fs-1 me-3"></i>
                                    <div className="block">
                                        <small className="text-color">Mon - Sat 8.00 - 18.00.<br />
                                            Sunday CLOSED</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="d-flex p-3 user-div justify-content-end align-items-center" >

                                <div className="me-3">
                                    {
                                        userImg &&
                                        <div className="user">
                                            <img src={userImg} alt="" />
                                        </div>
                                    }
                                </div>
                                <div className="me-3">
                                    {
                                        user.email &&
                                        <h6>{user.displayName}</h6>
                                    }
                                </div>
                                <div className="me-3">
                                    {
                                        !user.displayName && <div className="user">
                                            <h6>{user.displayName}</h6>
                                        </div>
                                    }
                                </div>
                                <div>
                                    {
                                        user.email ?
                                            <button onClick={logOut} className="px-2 btn btn-danger text-white"> Logout</button> :
                                            <Link to="/login"><button className="px-3 text-white btn btn-info">Log In</button></Link>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar className="py-3 primary-color-bg" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Link className="text-decoration-none" to="/home">
                        <Navbar.Brand className="fs-3 fw-bold"><i className="fas fa-clinic-medical"></i> Medicoz</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className="text-white text-uppercase" to="/home">Home</Nav.Link>
                            <Nav.Link>
                                <NavHashLink className="text-white text-uppercase text-decoration-none" to="/home#services">Services</NavHashLink>
                            </Nav.Link>
                            <Nav.Link as={Link} className="text-white text-uppercase" to="/about">About us</Nav.Link>
                            <Nav.Link as={Link} className="text-white text-uppercase" to="/pharmacy">Pharmacy</Nav.Link>
                            <Nav.Link as={Link} className="text-white text-uppercase" to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;