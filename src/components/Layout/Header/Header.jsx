import React, { useEffect } from "react";
import './Header.scss'

import header_logo from '../../../assets/images/Freelancer/Freelancer_logo.svg'
import header_logo_bg from '../../../assets/images/Freelancer/frilancer_ellipse.png'
import Dropdown from "./components/Dropdown";
import LangDrop from "./components/LangDrop";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getFreelancerData } from "reduxToolkit/FreelancerSlice";

const Header = () => {
	const len = useSelector(state => state.lenguage.lenguage)
	const { freelancerData } = useSelector( state => state.freelance)
	const {t} = useTranslation()
	const dispatch = useDispatch()
	console.log(freelancerData);

	useEffect(() => {
		dispatch(getFreelancerData())
	}, [dispatch])

	return (
		<header className="header" >
			<div className="header_container">
				 <img src={header_logo} className='header_container_bg_logo' alt="" />
				<img src={header_logo_bg} className='header_container_bg_img'  alt="header bg img" />

				
				<div className="header_wrapper">

				<ul className="header_container_list">


					<li className="header_container_list_item">
						{/* <a href={`${auth_path}/contact_us`} className="header_container_list_item">Contact us</a> */}
						<Link to={`/${len}/jobs`} className="header_container_list_item">Jobs</Link>
					</li>
					
					<li className="header_container_list_item">
						<Link to={`/${len}/contact`} className="header_container_list_item">{t("contact")}</Link>
					</li>
					
					<li className="header_container_list_item">
						<Link to={`/${len}/about`} className="header_container_list_item">{t("about")}</Link>
					</li>
					<span className="header_container_list_span"></span>
				</ul>
						<Dropdown/>
						<LangDrop/>

				</div>

			
			</div>
		</header>
	);
};

export default Header;
