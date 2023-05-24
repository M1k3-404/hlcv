import React from 'react';
import './Home.css';
import ReservationFilterBar from '../components/Reservation Filter Bar/ReservationFilterBar';
import Banner from '../components/Banner/Banner';
import { NavMenu } from '../components/NavMenu';

function Home() {
    return(
        <React.StrictMode>
            <NavMenu />
            <section className='d-flex home-header'>
                <div className='col-6 header-content d-flex justify-content-center align-items-center'>
                    <div className="content">
                        <h1 className="text-center">Experience</h1>
                        <div className="d-flex justify-content-center align-items-center">
                            <h1 className="text-center m-0">Comfort</h1>
                            <h1 className="text-center text-indie-flower px-3 m-0">&</h1>
                            <h1 className="text-center m-0">Luxury</h1>
                        </div>
                        <h1 className="text-center m-0">Beyond Your</h1>
                        <h1 className="text-center text-indie-flower">Expectations</h1>
                    </div>
                </div>
                <div className='col-6 side-image d-flex justify-content-end'>
                    <button className='mt-3 mx-5 px-5 py-2 btn-book-now'>Book Now</button>
                </div>
            </section>
            <ReservationFilterBar />
            <section>
                <div className="d-flex justify-content-evenly">
                    <div className='col-5 align-self-center'>
                        <div className="col-12 align-self-center">
                            <h2 className='mt-w'>Our Services</h2>
                            <p className='mt-4'>Discover a world of comfort and impeccable hospitality at Hotel Lake and City View. Located in the heart of Kandy city. Our hotel offers an unforgettable experience for leisure travelers. From the moment you step through our doors, you will be greeted by our friendly staff, dedicated to ensuring your stay is nothing short of extraordinary.</p>
                        </div>
                        <div>
                            <button className='mt-4 explore-btn px-5'>Explore</button>
                        </div>
                    </div>
                    <div className="col-6 mt-5 services-bg" />
                </div>
                <div className="d-flex mt-4 mb-5 justify-content-evenly">
                    <div className="col-3 bg-stay-in rounded d-flex align-items-center justify-content-center">
                        <h4 className='m-0 text-white'>Stay-In</h4>
                    </div>
                    <div className="col-3 bg-stay-in rounded d-flex align-items-center justify-content-center">
                        <h4 className='m-0 text-white'>Restaurant</h4>
                    </div>
                    <div className="col-3 bg-stay-in rounded d-flex align-items-center justify-content-center">
                        <h4 className='m-0 text-white'>Spa</h4>
                    </div>
                </div>
            </section>
            <Banner />
        </React.StrictMode>
    )
};

export default Home;