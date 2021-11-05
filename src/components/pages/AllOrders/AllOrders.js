import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import MangeBooking from '../../MangeBooking/MangeBooking';

const AllOrders = () => {
    const [bookings, setBookings] = useState([]);

    const url = 'https://fierce-lowlands-27228.herokuapp.com/booking'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div className="container">
            <h1 className="my-4">Manage All Bookings</h1>

            {
                bookings.length === 0 ?
                    <Spinner className="mx-auto" animation="grow" />
                    :
                    bookings.map(singleBooking => <MangeBooking
                        key={singleBooking._id}
                        singleBooking={singleBooking}
                    >

                    </MangeBooking>)
            }

        </div>
    );
};

export default AllOrders;