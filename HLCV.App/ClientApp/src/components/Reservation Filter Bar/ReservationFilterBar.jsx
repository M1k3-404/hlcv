import React from 'react';
import { Form } from 'react-bootstrap';
import './ReservationFilterBar.css';

function ReservationFilterBar() {
    const handleCheckout = () => {
        window.location.href = '/reserve';
    };

    return (
        <React.StrictMode>
            <section className='col-12 d-flex justify-content-around align-items-center sub-nav-border'>
                <div className="my-3">
                    <h5>Arrival</h5>
                    <Form.Control className="date-picker" type="date" name="arrival" />
                </div>
                <div className="my-3">
                    <h5>Departure</h5>
                    <Form.Control className="date-picker" type="date" name="departure" />
                </div>
                <div className="my-3">
                    <h5>Number of People</h5>
                    <input type="number" className="number-input" placeholder="00" />
                </div>
                <button className="btn btn-theme-dark px-5 rounded-0" onClick={handleCheckout}>Book a Stay</button>
            </section>
        </React.StrictMode>
    )
}

export default ReservationFilterBar;