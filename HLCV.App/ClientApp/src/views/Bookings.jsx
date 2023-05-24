import React from 'react';
import './Bookings.css';
import Booking from '../components/Booking/Booking';

function Bookings() {
    return(
        <React.StrictMode>
            <div className='booking-bg col-11'>
                <h3 className='py-3 text-white text-center'>Hotel Lake and City View</h3>
            </div>
            <h3 className='py-3 text-center title'>Bookings</h3>
            <Booking />
            <Booking />
        </React.StrictMode>
    )
}

export default Bookings;