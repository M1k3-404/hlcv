import React, { useEffect, useState } from 'react';
import './Bookings.css';
import Booking from '../components/Booking/Booking';
import axios from 'axios';
import { BookingsData } from '../data/bookingsData';

function Bookings() {
    const [bookingRecords, setBookingRecords] = useState([]);
    const bookings = BookingsData;

    // useEffect(() => {
    //     fetchRecords();
    // }, []);

    // async function fetchRecords() {
    //     const response = await axios.get('http://localhost:5175/api/WebApi/GetAllBookingDetails');
    //     const bookings = response.data;
    //     setBookingRecords(bookings);
    //     console.log(response.data);
    //     console.log(bookingRecords);
    // }

    return(
        <React.StrictMode>
            <div className='booking-bg col-12'>
                <h3 className='py-3 text-white text-center'>Hotel Lake and City View</h3>
            </div>
            <h3 className='py-3 text-center title'>Bookings</h3>
            <div className='bookings-container'>
                {bookings.map((booking) => 
                    <Booking booking={booking} />
                )}
            </div>
        </React.StrictMode>
    )
}

export default Bookings;