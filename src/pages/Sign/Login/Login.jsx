import React from 'react';
import './Login.scss'
import sign_logo from '../../../assets/images/Sign/sign_logo.svg'
import login_ellipse from '../../../assets/images/Sign/Ellipse-6.png'


import apple from '../../../assets/images/Sign/apple.svg'
import google from '../../../assets/images/Sign/google.svg'
import github from '../../../assets/images/Sign/github.svg'
import facebook from '../../../assets/images/Sign/facebook.svg'
import { useState } from 'react';
import Company from '../component/Company';
import Carusel from '../component/Carusel';

const Login = () => {

    const [ frilanc ] = useState(false)

    return (
        <section className='login' >
            <div className='login_container' >
                {
                    frilanc ? <Carusel /> : null
                }

                <img  className='login_bg_img' src={login_ellipse} alt="login background images" />
                <div className="login_container_wrapper">
                  {
                    frilanc ? <>
                    <img src={sign_logo}  className='login_container_wrapper_logo' alt="" />
                    <form className='login_form' method='POST'>
                            <h3 className='login_form_title' >Log in</h3>
                            <p className='login_form_info'>
                                Still don't have an account? <a href="/signup">Sign up</a> now!
                            </p>
                            <input required   className='login_form_inp' type="email"  placeholder='Email' name='email' />
                            <input required   className='login_form_inp login_form_inp2' type="password"  placeholder='Password' name='password' />
                            <button className='login_form_btn' >Continue</button>
                            <div className="login_form_wrapper">

                                <p className="login_form_wrapper_info">Or continue with</p>

                                <div className="login_form_wrapper_socials">
                                    <a   href="facebook.com"><img className='login_form_wrapper_socials_icon' src={facebook} alt="social media icon facebook" /></a>
                                    <a   href="facebook.com"><img className='login_form_wrapper_socials_icon' src={github} alt="social media icon github" /></a>
                                    <a   href="facebook.com"><img className='login_form_wrapper_socials_icon' src={google} alt="social media google" /></a>
                                    <a   href="facebook.com"><img className='login_form_wrapper_socials_icon' src={apple} alt="social media apple" /></a>
                                </div>
                            </div>
                    </form>
                    </> :
                    <>
                    <Company />
                    </>
                  }
                </div>
            </div>
        </section>
    );
};

export default Login;