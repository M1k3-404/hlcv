import React, { useState } from 'react';
import './AdminPortal.css';

function AdminPortal() {
    const userServiceId = 'staff1310';
    const userPassword = '1310@hlcv';

    const [serviceId, setServiceID] = useState('');
    const [password, setPassword] = useState('');

    const handleServiceId = (e) => {
        setServiceID(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogIn = () => {
        if (serviceId === userServiceId && password === userPassword) {
            window.location.href = '/bookings';
        }
    } 

    return (
        <React.StrictMode>
            <section className='full-width mt-5'>
                <h1 className="text-center mt-5">Welcome <span className='text-indie-flower'>to</span></h1>
                <h1 className='text-center'>Hotel Lake and City View</h1>
            </section>
            <section className='full-width'>
                <div className='mx-auto mt-5 form-group col-8'>
                    <label for="userId" className='h3 mt-5 form-label'>Service ID</label>
                    <input type="text" className="rounded-0 form-control" id="userId" onChange={handleServiceId}></input>
                </div>
                <div className='mx-auto mt-1 mb-5 form-group col-8'>
                    <label for="password" className='h3 mt-5 form-label'>Password</label>
                    <input type="password" className="rounded-0 form-control" id="password" onChange={handlePassword}></input>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='px-5 py-3 mt-5 btn-log-in text-center' disabled={serviceId === '' || password === ''} onClick={handleLogIn}>Log In</button>
                </div>
            </section>
        </React.StrictMode>
    )
}

export default AdminPortal;