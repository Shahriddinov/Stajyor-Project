import React from "react";
import "./Signup.scss";
import sign_logo from "../../../assets/images/Sign/sign_logo.svg";
// import login_circle from '../../../assets/images/Sign/login_circle.png'
import login_ellipse from "../../../assets/images/Sign/Ellipse-6.png";
import apple from "../../../assets/images/Sign/apple.svg";
import google from "../../../assets/images/Sign/google.svg";
import github from "../../../assets/images/Sign/github.svg";
import facebook from "../../../assets/images/Sign/facebook.svg";
import { useState } from "react";
import Checkemal from "../component/Checkemail";
import Carusel from "../component/Carusel";
import { useSelector } from "react-redux";
import { Eye, EyeOff } from 'tabler-icons-react';
import { registerRequest } from "reduxToolkit/extraReducers";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Signup = () => {
	const [checkemail] = useState(true);
	// const logIn = useSelector(state => state.LoginSlice.logIn);
	// console.log(logIn);

	const auth_path = window.location.pathname.split("/")[1];

		const [ passwordEye, setPasswordEye ] = useState('password')
		const [ passwordEye1, setPasswordEye1 ] = useState('password')

	const PasswordFunc = () => {
		setPasswordEye( passwordEye === 'password' ? 'text' : 'password' )
	}


	const PasswordFunc1 = () => {
		setPasswordEye1( passwordEye1 === 'password' ? 'text' : 'password' )
	}

	return (
		<section className="login">
			<div className="login_container">
				<Carusel />
				<img className="login_bg_img" src={login_ellipse} alt="login background images" />
				<div className="login_container_wrapper">
					<img src={sign_logo} className="login_container_wrapper_logo" alt="" />
					{checkemail ? (
						<form className="login_form" method="POST">
							<h3 className="login_form_title">Sign up</h3>
							<p className="login_form_info">
								Do you have an account? <a href={`${auth_path}/signup`}>Log in </a>now!
							</p>
							<input required className="login_form_inp" type="email" placeholder="Email" name="email" />
							<div style={{'position':"relative"}}>
								<input required className="login_form_inp login_form_inp2" type={`${passwordEye}`} placeholder="Password" name="password" />
								<span className="password_span" onClick={()=> PasswordFunc()} >
									{
										passwordEye === 'password' ? <EyeOff /> : <Eye />
									}
								</span>
							</div>
							<div style={{'position':"relative"}}>
								<input required className="login_form_inp login_form_inp2" type={`${passwordEye1}`} placeholder="Confirm password" name="confirm_password" />
								<span className="password_span" onClick={()=> PasswordFunc1()} >
																		{
										passwordEye1 === 'password' ? <EyeOff /> : <Eye />
									}</span>
							</div>
							<button className="login_form_btn">Continue</button>
							<div className="login_form_wrapper">
								<p className="login_form_wrapper_info">Or continue with</p>

								<div className="login_form_wrapper_socials">
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={facebook} alt="social media icon facebook" />
									</a>
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={github} alt="social media icon github" />
									</a>
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={google} alt="social media google" />
									</a>
									<a href="/facebook.com">
										<img className="login_form_wrapper_socials_icon" src={apple} alt="social media apple" />
									</a>
								</div>
							</div>
						</form>
					) : (
						<>
							<Checkemal />
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Signup;
