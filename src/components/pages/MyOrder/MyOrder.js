import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = (props) => {
    const { booking, _id, status } = props.singleBooking;


    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cance?');
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
                            <Link to={`/packages/${booking._id}`}>
                                <button className="btn btn-dark mb-2">See Details</button>
                            </Link>
                        </td>
                        <td className="p-2">
                            <button onClick={() => handleDelete(_id)} className="btn btn-danger">Cancel Booking</button>
                        </td>
                        <td className="p-2">
                            <p>{status}</p>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;