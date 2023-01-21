import React from 'react';
import email from '../../../assets/images/Sign/email.png'

import './Checkemail.scss'
const Checkemal = () => {
    return (
        <>
            <div className="check_email">
                <h2 className="check_email_title">Check your email</h2>
                <img src={email} alt="check email images" />
                <p className='check_email_info' >Check your qwerty123@gmail.com inbox for instructions from us on how to verify your account.</p>
                <a className='check_email_link' href="/login">Go to login screen</a>
            </div>
        </>
    );
};

export default Checkemal;