import React from 'react';
import './Banner.css';

function Banner() {
    const handleCheckout = () => {
        window.location.href = '/experience';
    };

    return(
        <React.StrictMode>
            <div className='mt-5 banner-bg'>
                <div className="bg-overlay d-flex align-items-center justify-content-center">
                    <div className='text-center'>
                        <h4 className='text-center text-white'>Immerse yourself in the rich cultural heritage and<br />discover a world of exciting activities and experiences.</h4>
                        <button className='btn mt-3 px-5 rounded-0 btn-explore' onClick={handleCheckout}>Explore</button>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Banner;