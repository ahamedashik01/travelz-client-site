import React, { useState } from 'react';
import { Col, Container, Button, Nav, Navbar, Row, Offcanvas, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    const userImg = user.photoURL;

    //react-offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="secondary-color">
            <div >
                <Container className="border-top border-5 border-dark">
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
                                <div className="me-2">
                                    {
                                        user.email &&
                                        <h6>{user.displayName}</h6>
                                    }
                                </div>
                                <div className="me-2">
                                    {
                                        !user.displayName && <div className="user">
                                            <h6>{user.displayName}</h6>
                                        </div>
                                    }
                                </div>
                                <div>
                                    {
                                        user.email || userImg ?
                                            <div>
                                                <Button style={{ backgroundImage: `url(${userImg})`, backgroundSize: 'cover', height: '50px', width: '50px', borderRadius: '50%' }} variant="dark" onClick={handleShow} className="text-white">
                                                </Button>
                                                <Offcanvas show={show} onHide={handleClose} placement="end">
                                                    <Offcanvas.Header className="ms-auto" closeButton>
                                                    </Offcanvas.Header>
                                                    <Offcanvas.Body>
                                                        <div className=" d-flex justify-content-center align-items-center">
                                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                                <div className="user-profile mb-4">
                                                                    <img src={userImg} alt="user-profile" />
                                                                </div>
                                                                <h4 className="mb-3">{user.displayName}</h4>
                                                                <button onClick={logOut} className="px-5 btn btn-danger text-white rounded-pill"> Logout</button>
                                                            </div>
                                                        </div>
                                                        <Table hover className="mt-5">
                                                            <tbody>
                                                                <Link to=""></Link>
                                                                <tr>
                                                                    <td>
                                                                        <Link className="text-uppercase text-decoration-none text-color" to="">My Orders</Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link className="text-uppercase text-decoration-none text-color" to="">Manage All Orders</Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link className="text-uppercase text-decoration-none text-color" to="">Add A Package<span class="badge bg-dark rounded-pill ms-2">New</span></Link>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Offcanvas.Body>
                                                </Offcanvas>
                                            </div>
                                            :
                                            <Link to="/login"><button className="px-3 text-dark btn btn-info text-white"><i className="fas fa-user me-2"></i>Log In</button></Link>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Navbar className="py-3 " sticky="top" collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Link className="text-decoration-none" to="/home">
                        <Navbar.Brand className="fs-4 fw-bold"><i className="fas fa-plane-departure me-2"></i>Travelz</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className="text-dark text-uppercase" to="/home">Home</Nav.Link>
                            <Nav.Link>
                                <NavHashLink className="text-dark text-uppercase text-decoration-none" to="/home#services">packages</NavHashLink>
                            </Nav.Link>
                            <Nav.Link as={Link} className="text-dark text-uppercase" to="/about">About us</Nav.Link>
                            <Nav.Link as={Link} className="text-dark text-uppercase" to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;