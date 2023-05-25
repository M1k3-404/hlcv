import React, { useState } from 'react';
import Modal from 'react-modal';
import './Booking.css';

function Booking(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isComponentVisible, setComponentVisible] = useState(true);

    const hideComponent = () => {
        setComponentVisible(false);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        hideComponent();
    };

    return(
        <React.StrictMode>
            { isComponentVisible &&
                <div>
                    <div className='col-11 mx-auto mt-4 booking-border d-flex justify-content-around'>
                <div className='col-2 my-3 booking-img' /> 
                <div className='col-9 mt-3'>
                    <h3>Booking Id: <span>{props.booking.BookingCode}</span></h3>
                    <div className='mt-2 col-12 d-flex'>
                        <div className='col-6'>
                            <h5>Checking-In Date: <span>{props.booking.Arrival}</span></h5>
                            <h5>Checking-Out Date: <span>{props.booking.Departure}</span></h5>
                            <h5>No. of Guests: <span>{props.booking.NumberOfPeople}</span></h5>
                        </div>
                        <div className='col-6'>
                            <h5>Rooms: </h5>
                            <h5><span>{props.booking.SDR}</span> <span> x Standard Double Room</span></h5>
                            <h5><span>{props.booking.STR}</span> <span> x Standard Triple Room</span></h5>
                            <h5><span>{props.booking.DRB}</span> <span> x Double Room with Balcony</span></h5>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-2 col-12 d-flex'>
                        <div className='col-6'>
                            <h5>First Name: <span>{props.booking.FirstName}</span></h5>
                            <h5>Last Name: <span>{props.booking.LastName}</span></h5>
                            <h5>NIC: <span>{props.booking.NIC}</span></h5>
                        </div>
                        <div className='col-6'>
                            <h5>Contact No: <span>{props.booking.Email}</span></h5>
                            <h5>Email: <span>{props.booking.MobileNumber}</span></h5>
                        </div>
                    </div>
                    <div className='my-3 d-flex col-12 justify-content-end'>
                        <button className='px-3 mx-3 py-0 btn-theme-dark' onClick={openModal}>Proceed</button>
                        <button className='px-3 mx-3 py-0 btn-theme-dark' onClick={hideComponent}>Cancel Reservation</button>
                    </div>
                </div>
            </div>

            <Modal className={'success-modal bg-white mx-auto rounded d-flex align-items-center justify-content-center'} isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className='mt-5'>
                    <h1 className='mt-5 text-center'>Thank You</h1>
                    <p className='mt-3 text-center'>Reservation is successful</p>
                    <div className='col-12 d-flex justify-content-center'>
                        <button className='py-3 px-5 btn-close-modal' onClick={closeModal}>Done</button>
                    </div>
                </div>
            </Modal>
                </div>
                
            }
            
        </React.StrictMode>
    )
}

export default Booking;