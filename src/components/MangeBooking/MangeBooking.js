import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MangeBooking = (props) => {
    const { booking, _id, status, recipientName, recipientEmail } = props.singleBooking;

    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cancel?');
        if (procced) {
            const url = `https://fierce-lowlands-27228.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Booking cancled')
                        window.location.reload();
                    }
                });
        }

    }
    return (
        <div className="mb-5 p-3 shadow quality">

            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Package Name</th>
                        <th>Cost</th>
                        <th>Recipient Name</th>
                        <th>Recipient Email</th>
                        <th>Package Details</th>
                        <th>Cancle Booking</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="p-2">
                            <div className="order-img me-5">
                                <img src={booking.thumNail} alt="" />
                            </div>
                        </td>
                        <td className="p-2">
                            <h5>{booking.tourTittle}</h5>
                        </td>
                        <td className="p-2">
                            <h6>Total : ${booking.tourCost}</h6>
                        </td>
                        <td className="p-2">
                            <p>{recipientName}</p>
                        </td>
                        <td className="p-2">
                            <p>{recipientEmail}</p>
                        </td>
                        <td className="p-2">
                            <Link to={`/packages/${booking._id}`}>
                                <button className="btn btn-dark mb-2">See Details</button>
                            </Link>
                        </td>
                        <td className="p-2">
                            <button onClick={() => handleDelete(_id)} className="btn btn-danger">Cancel Booking</button>
                        </td>
                        <td className="p-2">
                            <p>{status}</p> <br />
                            <button className="btn btn-success">Approve</button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default MangeBooking;