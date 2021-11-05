import React, { useEffect, useState } from 'react';
import { Row, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css'

const MyOrders = () => {
    const [booking, setBooking] = useState([]);
    const { user } = useAuth();

    const url = 'https://fierce-lowlands-27228.herokuapp.com/booking';


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);
    const filterBooking = booking.filter(e => e.recipientEmail === user.email);

    return (
        <div className="container h100">
            <h1 className="my-4"> MY ORDER</h1>


            {booking.length === 0 ?
                <Spinner className="mx-auto" animation="grow" />
                :
                filterBooking.map(singleBooking => <MyOrder
                    key={singleBooking._id}
                    singleBooking={singleBooking}
                >

                </MyOrder>)
            }

        </div>
    );
};

export default MyOrders;