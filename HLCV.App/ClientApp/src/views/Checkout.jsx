import React, { useState } from "react";
import "./Checkout.css";
import Bedroom from "../media/Bedroom.jpg";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { NavMenu } from "../components/NavMenu";

function Reservation() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    lastName: "",
    NIC: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or validation logic here
    setShowPopup(true);
    
  };

  const isSubmitDisabled = Object.values(formValues).some(
    (value) => value === ""
  );

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.href = "/"; // Redirect back to the home page
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const arrivalDate = searchParams.get("arrivalDate");
  const departureDate = searchParams.get("departureDate");
  const numOfPeople = searchParams.get("numOfPeople");
  const totalCount = searchParams.get("totalCount");
  const totalPayable = totalCount * 11000;


  // Constants for the first accordion
  const [isOpen1, setIsOpen1] = useState(false);
  const [count1, setCount1] = useState(0);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  const handleDecrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

  return (
    <>
        <NavMenu />
        <section>
            <div>
            <div className="Book-content ">
                <h1 className="headingContact">Book A Stay</h1>
                <hr className="hrBook"></hr>
            </div>
            </div>
        </section>
        <section>
            <div
            className={`accordion ${isOpen1 ? "open" : ""} line3 Accordion-body`}
            >
            <div className="accordion-header d-flex my-4" onClick={toggleAccordion1}>
                <img src={Bedroom} alt="Accordion Image" className="accordion-image" />
                <div className="mt-4 ms-5 my-3">
                    <h5 className="accordion-title">Deluxe Room</h5>
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
                    <div className="me-4 counter-content">
                        <p className="ms-3 mt-3">LKR 11,000</p>
                        <div className="d-flex">
                            <button className="counter-button-Minus" onClick={(e) => {e.stopPropagation(); handleDecrement1();}}>-</button>
                            <span className="counter-value h4">{count1}</span>
                            <button className="counter-button-Plus" onClick={(e) => {e.stopPropagation(); handleIncrement1();}}>+</button>
                        </div>
                        <p className="ms-2 mt-3">More Details</p>
                    </div>
                </div>

                {isOpen1 && (
                    <>
                    <div className="accordion-content line2">
                        <div className="mt-5 d-flex">
                        <p className="col-3">Free Wifi</p>
                        <p className="col-3">42' LED Tv</p>
                        <p className="col-3">24hr Room Service</p>
                        <p className="col-3">Rain Shower</p>
                        </div>
                    </div>
                    <div className="accordion-content d-flex mb-3 ">
                        <p className="col-3">Ground Floor Balcony</p>
                        <p className="col-3">Two Bathrobes</p>
                        <p className="col-3">Queen Sized Bed</p>
                        <p className="col-3">Mini Bar</p>
                    </div>
                    </>
                )}
            </div>
        </section>
        <section className="d-flex ">
            <div className="col-6 reservation-content ">
                <div className="d-flex mt-3">
                    <h5 style={{ fontSize: 17 }}>Check - In date:</h5>
                    <Form.Control className="date-picker form check-in" type="date" name="arrival" value={arrivalDate} />
                </div>
          <div className="d-flex mt-3">
            <h5 style={{ fontSize: 17 }}>Departure</h5>
            <Form.Control
              className="date-picker form Departure"
              type="date"
              name="departure"
              value={departureDate}
            />
          </div>
          <div className="d-flex mt-3">
            <h5 style={{ fontSize: 17 }}>Number of People</h5>
            <input
              type="number"
              className="number-input form people"
              placeholder="00"
              value={numOfPeople}
            />
          </div>
        </div>
        <div className="col-6 reservation-content">
          <div className="d-flex mt-3">
            <h5 style={{ fontSize: 17 }}>Rooms</h5>
            <input
              type="number"
              className="number-input form room"
              placeholder="00"
              value={totalCount}
            />
          </div>
          <div className="d-flex mt-3">
      <h5 style={{ fontSize: 17 }}>Total Payable</h5>
      <input
        type="text"
        className="number-input form Total"
        placeholder="00"
        value={totalPayable}
        readOnly
      />
    </div>


        </div>
      </section>

      <section>
        <h4 style={{ marginLeft: 70, marginTop: 40 }}>
          Book Now with Your Information
        </h4>

        <Form className="forms d-flex mt-5">
          <div className="col-6">
            <Row>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label style={{ fontSize: 14 }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ width: 430, height: 40 }}
                    className="mb-3 "
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="email">
                  <Form.Label style={{ fontSize: 14 }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    style={{ width: 430, height: 40 }}
                    className="mb-3"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="mobileNumber">
                  <Form.Label style={{ fontSize: 14 }}>
                    Mobile Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    style={{ width: 430, height: 40 }}
                    className="mb-3"
                    value={formValues.mobileNumber}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div className="col-6">
            <Row>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label style={{ fontSize: 14 }}>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ width: 430, height: 40 }}
                    className="mb-3"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="NIC">
                  <Form.Label style={{ fontSize: 14 }}>
                    NIC/Passport No
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    style={{ width: 430, height: 40 }}
                    className="mb-3 "
                    value={formValues.NIC}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button style={{ marginLeft: 350, marginTop: 32 }} className="btn btn-theme-dark px-5 rounded-0" type="submit" disabled={isSubmitDisabled} onClick={handleSubmit}>Book Now</Button>
            
          </div>
        </Form>
      </section>
      <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Body>
          <h3 className="text-center">Thank You</h3>
          <br></br>
          <p className="text-center">Your request is being processed. You will recieve a confirmation email shortly</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Reservation;
