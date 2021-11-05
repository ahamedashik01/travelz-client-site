import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import './Booking.css'

const Booking = () => {
    const [packages, setPackages] = useState([]);
    const { id } = useParams();
    const { user } = useAuth();
    const { _id, tourTittle, tourCost, tourLength, noOFMeal, noOFAct, avgGrpSize_min, avgGrpSize_max } = packages;

    // alert 
    const showAlert = () => {
        swal({
            title: "Succesfully Booked!",
            text: "We are meeting soon!",
            icon: "success",
            button: "Aww yiss!",
        })
    }

    const url = `https://fierce-lowlands-27228.herokuapp.com/packages/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    // form 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.booking = packages;
        data.status = 'pending';
        axios.post('https://fierce-lowlands-27228.herokuapp.com/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    showAlert();
                    reset();
                }
            })
    }

    return (
        <div>
            <Container className="py-5">
                <Row className="g-4">
                    <Col sm={12} md={5} className="mb-5">
                        <div className="p-3 shadow ">
                            <div className="des text-start mt-2">
                                <h3 className="mb-3">{tourTittle}</h3>
                                <hr />
                                <div className="p-2 rounded-pill bg-dark text-white d-flex justify-content-between align-items-center">
                                    <h4 className="ps-3">Total Cost</h4>
                                    <h4 className="pe-3"><i className="fas fa-pound-sign me-1"></i>{tourCost} GBP</h4>
                                </div>
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
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Link className="text-dark" to={`/packages/${_id}`}>
                                                <p className="fs-5  text-dark">see what's inclued?</p>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className="booking-adder shadow p-2 quality">
                            <h4 className="my-4 text-center px-4"> Your Details</h4>
                            <hr />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Recipient Full Name" readonly type="text" {...register("recipientName", { required: true })} value={user.displayName} />
                                <input placeholder="Recipient Email" type="email" value={user.email} readOnly {...register("recipientEmail", { required: true })} />
                                <input placeholder="Recipient Phone Number" type="number" {...register("phoneNumber", { required: true })} />
                                <input placeholder="Adrress" type="text" {...register("address", { required: true })} />
                                <input placeholder="City" type="text" {...register("City", { required: true })} />
                                <input placeholder="Country" type="text" {...register("Country", { required: true })} />
                                <input placeholder="Zip code" type="text" {...register("zipCode", { required: true })} />
                                <input className="btn btn-dark" type="submit" value="BOOK PACKAGE" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;