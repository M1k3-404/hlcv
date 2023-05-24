import React from 'react';
import './AdminPortal.css';

function AdminPortal() {
    return (
        <React.StrictMode>
            <section>
                <h1 className="text-center mt-5">Welcome <span className='text-indie-flower'>to</span></h1>
                <h1 className='text-center'>Hotel Lake and City View</h1>
            </section>
            <section>
                <div className='mx-auto mt-5 form-group col-8'>
                    <label for="userId" className='mt-5 form-label'>Service ID</label>
                    <input type="text" className="rounded-0 form-control" id="userId"></input>
                </div>
                <div className='mx-auto mt-1 form-group col-8'>
                    <label for="password" className='mt-5 form-label'>Password</label>
                    <input type="password" className="rounded-0 form-control" id="password"></input>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='px-5 py-3 mt-5 btn-log-in text-center'>Log In</button>
                </div>
            </section>
        </React.StrictMode>
    )
}

export default AdminPortal;