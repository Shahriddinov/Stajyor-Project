import React from "react";
import sign_logo from "../../../assets/images/Sign/sign_logo.svg";
import left_arrow from "../../../assets/images/Sign/left_arrow.svg";
import computer_img from "../../../assets/images/Sign/computer.png";
import comp from "../../../assets/images/Sign/comp.svg";
import user from "../../../assets/images/Sign/frilancer_user.svg";

import telegram_icon from "../../../assets/images/Sign/white-telegram.svg";
import instagram_icon from "../../../assets/images/Sign/white-instagram.svg";
import facebook_icon from "../../../assets/images/Sign/white-facebook.svg";

import "./Company.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { removeToken } from "reduxToolkit/LoginSlice";

const Company = () => {
	const navigate = useNavigate()
	const len = useSelector(state => state.lenguage.lenguage)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeToken())
		navigate(`/${len}/`)
	}
	return (
		<div className="login_company">
			<div className="login_company_wrapper">
				<img src={sign_logo} className="login_container_wrapper_logo" alt="" />
				<button className="login_company_wrapper_back" type="button" onClick={handleClick}>
					{" "}
					<img src={left_arrow} alt="left arrow icon" /> Back
				</button>
			</div>
			<div className="login_company_wrapper1">
				<Link to={`/${len}/resume`}>
					<div className="login_company_wrapper1_frilanc">
						<h4 className="login_company_wrapper1_frilanc_title">
							<img src={user} alt="user icon" /> Freelancer
						</h4>
						<p className="login_company_wrapper1_frilanc_info">
							Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur.
						</p>
					</div>
				</Link>
				<div className="login_company_wrapper1_frilanc">
					<h4 className="login_company_wrapper1_frilanc_title">
						{" "}
						<img src={comp} alt="user icon" /> Company
					</h4>
					<p className="login_company_wrapper1_frilanc_info">
						Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur.
					</p>
				</div>
				<img src={computer_img} className="computer_img" alt="comp images" />
			</div>

			<div className="login_company_social">
				<a href="www.facebook.com">
					{" "}
					<img src={telegram_icon} alt="social media icons" />{" "}
				</a>
				<a href="www.facebook.com">
					{" "}
					<img src={facebook_icon} alt="social media icons" />{" "}
				</a>
				<a href="www.facebook.com">
					{" "}
					<img src={instagram_icon} alt="social media icons" />{" "}
				</a>
			</div>
		</div>
	);
};

export default Company;
