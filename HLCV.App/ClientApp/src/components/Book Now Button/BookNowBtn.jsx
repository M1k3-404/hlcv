import React from 'react';
import './BookNowBtn.css';

const handleCheckout = () => {
    window.location.href = '/reserve';
};

function BookNowButton() {
    return(
        <React.StrictMode>
            <button className='mt-3 mx-5 px-5 py-2 btn-book-now' onClick={handleCheckout}>Book Now</button>
        </React.StrictMode>
    )
}

export default BookNowButton;