import React from 'react';
import './Home.css';
import ReservationFilterBar from '../components/Reservation Filter Bar/ReservationFilterBar';
import Banner from '../components/Banner/Banner';
import { NavMenu } from '../components/NavMenu';
import BookNowButton from '../components/Book Now Button/BookNowBtn';

function Home() {
    return(
        <React.StrictMode>
            <NavMenu />
            <section className='d-flex home-header'>
                <div className='header-content d-flex justify-content-center align-items-center col-6'>
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
                <div className='side-image col-6'>
                    <div className="bg-overlay-si d-flex justify-content-end">
                        <BookNowButton />
                    </div>
                </div>
            </section>
            <ReservationFilterBar />
            <section className='our-services-sect'>
                <div className="d-flex justify-content-evenly">
                    <div className='col-5 align-self-center'>
                        <div className="col-12 align-self-center">
                            <h2 className='mt-w'>Our Services</h2>
                            <p className='mt-4'>Discover a world of comfort and impeccable hospitality at Hotel Lake and City View. Located in the heart of Kandy city. Our hotel offers an unforgettable experience for leisure travelers. From the moment you step through our doors, you will be greeted by our friendly staff, dedicated to ensuring your stay is nothing short of extraordinary.</p>
                        </div>
                    </div>
                    <div className="col-5 mt-5 services-bg">
                        <div className='bg-overlay' />
                    </div>
                </div>
                <div className="d-flex mt-4 mb-5 justify-content-evenly">
                    <div className="col-3 bg-stay-in rounded">
                        <div className='bg-overlay rounded d-flex align-items-center justify-content-center'>
                            <h4 className='m-0 text-white'>Stay-In</h4>
                        </div>
                    </div>
                    <div className="col-3 bg-stay-in rounded">
                        <div className='bg-overlay rounded d-flex align-items-center justify-content-center'>
                            <h4 className='m-0 text-white'>Restaurant</h4>
                        </div>
                    </div>
                    <div className="col-3 bg-stay-in rounded">
                        <div className='bg-overlay rounded d-flex align-items-center justify-content-center'>
                            <h4 className='m-0 text-white'>Spa</h4>
                        </div>
                    </div>
                </div>
            </section>
            <Banner />
        </React.StrictMode>
    )
};

export default Home;