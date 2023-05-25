import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import "./Reservation.css";
import Bedroom from "../media/Bedroom.jpg"
import { NavMenu } from '../components/NavMenu';

function Reservation({ title, image, text }) {
    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [numOfPeople, setNumOfPeople] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const handleButtonClick = () => {
  
        const queryString = `?arrivalDate=${arrivalDate}&departureDate=${departureDate}&numOfPeople=${numOfPeople}&totalCount=${totalCount}`;
        const reservationUrl = `/reservation${queryString}`;
      
        window.location.href = reservationUrl;
    };

    // Constants for the first accordion
    const [isOpen1, setIsOpen1] = useState(false);
    const [count1, setCount1] = useState(0);

    const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    };

    const handleIncrement1 = () => {
    setCount1(count1 + 1);
    setTotalCount(totalCount + 1);
    };

    const handleDecrement1 = () => {
    if (count1 > 0) {
        setCount1(count1 - 1);
        setTotalCount(totalCount - 1);
    }
    };

    // Constants for the second accordion
    const [isOpen2, setIsOpen2] = useState(false);
    const [count2, setCount2] = useState(0);

    const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
    };

    const handleIncrement2 = () => {
    setCount2(count2 + 1);
    setTotalCount(totalCount + 1);
    };

    const handleDecrement2 = () => {
    if (count2 > 0) {
        setCount2(count2 - 1);
        setTotalCount(totalCount - 1);
    }
    };

    // Constants for the third accordion
    const [isOpen3, setIsOpen3] = useState(false);
    const [count3, setCount3] = useState(0);

    const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
    };

    const handleIncrement3 = () => {
    setCount3(count3 + 1);
    setTotalCount(totalCount + 1);
    };

    const handleDecrement3 = () => {
    if (count3 > 0) {
        setCount3(count3 - 1);
        setTotalCount(totalCount - 1);
    }
    };
 
    return (
        <>
            <NavMenu />
            <section className='full-width'>
                <div>
                    <div className="Book-content ">
                        <h1 className="headingContact">Book A Stay</h1>
                        <hr className="hrBook"></hr>
                    </div>
                </div>
            </section>
            <section className='col-12 d-flex justify-content-around align-items-center sub-nav-border'>
                <div className="my-3">
                    <h5>Arrival</h5>
                    <Form.Control className="date-picker" type="date" name="arrival" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
                </div>
                <div className="my-3">
                    <h5>Departure</h5>
                    <Form.Control className="date-picker" type="date" name="departure" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
                </div>
                <div className="my-3">
                    <h5>Number of People</h5>
                    <input type="number" className="number-input" placeholder="00" value={numOfPeople} onChange={(e) => setNumOfPeople(parseInt(e.target.value))} />
                </div>
                <button className="btn btn-theme-dark px-5 rounded-0" onClick={handleButtonClick} disabled={numOfPeople === 0 || !arrivalDate || !departureDate || new Date(departureDate) - new Date(arrivalDate) < 86400000 || (count1 === 0 && count2 === 0 && count3 === 0)}>Book a Stay</button>
            </section>
            <section className='full-width'>
                <div className={`accordion ${isOpen1 ? 'open' : ''} line`}>
                    <div className="accordion-header d-flex my-4" onClick={toggleAccordion1}>
                        <img src={Bedroom} alt="Accordion Image" className="accordion-image" />
                        <div className="mt-4 ms-5 my-3">
                            <h5 className="accordion-title">Standard Double Room</h5>
                            <p>
                                Enhance your stay in our Standard Double Room, where comfort meets convenience. Unwind in the cozy double 
                                bed, enveloped in soft linens for a restful night's sleep. Stay connected and entertained with modern 
                                amenities such as a flat-screen TV and complimentary Wi-Fi. Freshen up in the private bathroom, equipped 
                                with a rejuvenating shower and complimentary toiletries. Start your day right with a steaming cup of 
                                coffee from the in-room coffee maker. Our Standard Double Room offers a delightful retreat for both 
                                business and leisure travelers, providing a comfortable space to relax and recharge during your stay. 
                                Immerse yourself in the warm ambiance and enjoy the attentive service from our friendly staff.
                            </p>
                        </div>
                        <div className="vl" />
                            <div className='me-4 counter-content'>
                                <p className='ms-3 mt-3'>LKR 11,000</p>
                                <div className='d-flex'>
                                    <button className="counter-button-Minus" onClick={(e) => { e.stopPropagation(); handleDecrement1(); }}>-</button>
                                    <span className="counter-value h4">{count1}</span>
                                    <button className="counter-button-Plus" onClick={(e) => { e.stopPropagation(); handleIncrement1(); }}>+</button>
                                </div>
                                <p className='ms-2 mt-3'>More Details</p>
                            </div>
                        </div>
                    {isOpen1 && (
                        <>
                            <div className="accordion-content line2">
                                <div className='mt-5 d-flex'>
                                    <p className='col-3'>Free Wifi</p>
                                    <p className='col-3'>Toiletries</p>
                                    <p className='col-3'>Desk and Chair</p>
                                </div>
                            </div>  
                            <div className="accordion-content d-flex mb-3 ">
                                <p className='col-3'>Attach bathroom</p>
                                <p className='col-3'>Dressing table</p>
                                <p className='col-3'>Night stand</p>
                            </div>
                        </>
                    )}
                </div>
            
            {/* --------------------------------------------------------------------------------------------------------------------- */}

            <div className={`accordion2 ${isOpen2 ? 'open' : ''} line`}>
                <div className="accordion-header d-flex my-4" onClick={toggleAccordion2}>
                    <img src={Bedroom} alt="Accordion Image" className="accordion-image" />
                    <div className="mt-4 ms-5 my-3">
                        <h5 className="accordion-title">Standard Triple Room</h5>
                        <p>
                            Unwind and create lasting memories in our spacious Standard Triple Room. With three comfortable beds, 
                            there's plenty of space for everyone to relax and recharge after a day of adventure. Embrace the modern 
                            amenities, including a flat-screen TV, complimentary Wi-Fi, and a convenient work desk, catering to your 
                            entertainment and productivity needs. The private bathroom offers a refreshing retreat with its rejuvenating 
                            shower and complimentary toiletries. To make your stay even more enjoyable, take advantage of the in-room 
                            mini-refrigerator to store your favorite snacks and beverages. Our Standard Triple Room is the perfect haven 
                            for groups and families, ensuring a comfortable and memorable stay for all. Let our friendly staff assist you 
                            with any requests to make your experience truly exceptional.
                        </p>
                    </div>
                    <div className="vl" />
                        <div className='me-4 counter-content'>
                            <p className='ms-3 mt-3'>LKR 16,000</p>
                            <div className='d-flex'>
                                <button className="counter-button-Minus" onClick={(e) => { e.stopPropagation(); handleDecrement2(); }}>-</button>
                                <span className="counter-value h4">{count2}</span>
                                <button className="counter-button-Plus" onClick={(e) => { e.stopPropagation(); handleIncrement2(); }}>+</button>
                            </div>
                            <p className='ms-2 mt-3'>More Details</p>
                        </div>
                    </div>
                    {isOpen2 && (
                        <>
                            <div className="accordion-content line2">
                                <div className='mt-5 d-flex'>
                                    <p className='col-3'>Free Wifi</p>
                                    <p className='col-3'>Toiletries</p>
                                    <p className='col-3'>Desk and Chair</p>
                                </div>
                            </div>
                            <div className="accordion-content d-flex mb-3 ">
                                <p className='col-3'>Attach bathroom</p>
                                <p className='col-3'>Dressing table</p>
                                <p className='col-3'>Night stand</p>
                            </div>
                        </>  
                    )}
                </div>

            {/* --------------------------------------------------------------------------------------------------------------------- */}

            <div className={`accordion3 ${isOpen3 ? 'open' : ''} line`}>
                <div className="accordion-header d-flex my-4" onClick={toggleAccordion3}>
                    <img src={Bedroom} alt="Accordion Image" className="accordion-image" />
                    <div className="mt-4 ms-5 my-3">
                        <h5 className="accordion-title">Double Room with Balcony</h5>
                        <p>
                            Experience the ultimate blend of comfort and scenic beauty in our Double Room with Balcony. Relax in the 
                            cozy double bed while taking in breathtaking views of the cultural city of Kandy and the picturesque Kandy 
                            Lake from your private balcony. Immerse yourself in the charm of the surroundings as you sip a cup of coffee 
                            or enjoy a quiet moment of serenity. The room is equipped with modern amenities, ensuring a comfortable stay. 
                            Indulge in the soothing ambiance of the room and wake up refreshed to explore the rich cultural heritage of 
                            Kandy. Our Double Room with Balcony offers a unique opportunity to immerse yourself in the beauty of Kandy, 
                            combining comfort, convenience, and stunning views for an unforgettable stay.
                        </p>
                    </div>
                    <div className="vl" />
                        <div className='me-4 counter-content'>
                            <p className='ms-3 mt-3'>LKR 22,000</p>
                            <div className='d-flex'>
                                <button className="counter-button-Minus" onClick={(e) => { e.stopPropagation(); handleDecrement3(); }}>-</button>
                                <span className="counter-value h4">{count3}</span>
                                <button className="counter-button-Plus" onClick={(e) => { e.stopPropagation(); handleIncrement3(); }}>+</button>
                            </div>
                            <p className='ms-2 mt-3'>More Details</p>
                        </div>
                    </div>
                    {isOpen2 && (
                        <>
                            <div className="accordion-content line2">
                                <div className='mt-5 d-flex'>
                                    <p className='col-3'>Free Wifi</p>
                                    <p className='col-3'>Toiletries</p>
                                    <p className='col-3'>Desk and Chair</p>
                                </div>
                            </div>
                            <div className="accordion-content d-flex mb-3 ">
                                <p className='col-3'>Attach bathroom</p>
                                <p className='col-3'>Dressing table</p>
                                <p className='col-3'>Night stand</p>
                            </div>
                        </>  
                    )}
                </div>
            </section>
            <section>
                <button className='checkout-button py-5 btn-dark full-width' onClick={handleButtonClick} disabled={numOfPeople === 0 || !arrivalDate || !departureDate || new Date(departureDate) - new Date(arrivalDate) < 86400000 || (count1 === 0 && count2 === 0 && count3 === 0)}>
                    Checkout
                </button>
            </section>
    </>
  );
}

export default Reservation;