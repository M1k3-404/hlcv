import React from 'react';
import './Booking.css';

function Booking() {
    return(
        <React.StrictMode>
            <div className='col-11 mx-auto mt-4 booking-border d-flex justify-content-around'>
                <div className='col-2 my-3 booking-img' /> 
                <div className='col-9 mt-3'>
                    <h3>Booking Id: <span>02hdj238</span></h3>
                    <div className='mt-2 col-12 d-flex'>
                        <div className='col-6'>
                            <h5>Checking-In Date: <span>06/04/2023</span></h5>
                            <h5>Checking-Out Date: <span>08/04/2023</span></h5>
                            <h5>No. of Guests: <span>03</span></h5>
                        </div>
                        <div className='col-6'>
                            <h5>Rooms: </h5>
                            <h5><span>1</span> <span>Deluxe Double Room</span></h5>
                            <h5><span>1</span> <span>Deluxe Twin Room</span></h5>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-2 col-12 d-flex'>
                        <div className='col-6'>
                            <h5>First Name: <span>Andrew</span></h5>
                            <h5>Last Name: <span>San</span></h5>
                            <h5>NIC: <span>0323452132</span></h5>
                        </div>
                        <div className='col-6'>
                            <h5>Contact No: <span>453543254524</span></h5>
                            <h5>Email: <span>Andrew.San@gmail.com</span></h5>
                        </div>
                    </div>
                    <div className='my-3 d-flex col-12 justify-content-end'>
                        <button className='px-3 mx-3 py-0 btn-theme-dark'>Proceed</button>
                        <button className='px-3 mx-3 py-0 btn-theme-dark'>Cancel Reservation</button>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Booking;