import React from 'react';
import './Banner.css';

function Banner() {
    return(
        <React.StrictMode>
            <div className='col-12 banner-bg d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <h4 className='text-center text-white'>Immerse yourself in the rich cultural heritage and<br />discover a world of exciting activities and experiences.</h4>
                    <button className='btn mt-1 px-5 rounded-0 btn-explore'>Explore</button>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Banner;