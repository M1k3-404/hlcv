import React from "react";
import "./ContactUs.css";
import { NavMenu } from "../components/NavMenu";
import BookNowButton from "../components/Book Now Button/BookNowBtn";

function ContactUs() {
    return(
        <>
            <NavMenu />
            <section className="d-flex home-header">
                <div className="header-content d-flex justify-content-center align-items-center col-6">
                    <div className="content Contact">
                        <h1 className="headingContact">Contact Us</h1>
                        <hr className="hrStory col-11"></hr>
                        <div className="text-center Contact-Info">
                            <p className="mt-5">+94 77 305 0668</p>
                            <p className="mt-5">Hotel@hotel.lk</p>
                            <p className="mt-5">43,Saranankara rd,Kandy</p>
                        </div>
                    </div>
                </div>
                <div className="ContactImage col-6">
                    <div className="bg-overlay-si d-flex justify-content-end">
                        <BookNowButton />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs;