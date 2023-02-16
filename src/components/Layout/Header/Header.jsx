import React from "react";
import './Header.scss'

<<<<<<< HEAD
=======
import header_logo from '../../../assets/images/header/logo.svg'
import header_logo_bg from '../../../assets/images/header/ellipse.png'
>>>>>>> cd612be4ffdd9ad2f287915a88609d7dca1a6a47
// import header_logo from '../../../assets/images/Freelancer/Freelancer_logo.svg'
// import header_logo_bg from '../../../assets/images/Freelancer/frilancer_ellipse.png'
import Dropdown from "./components/Dropdown";
import LangDrop from "./components/LangDrop";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
	const len = useSelector(state => state.lenguage.lenguage)
	const {t} = useTranslation()

	const auth_path = window.location.pathname.split('/')[1]

	console.log(auth_path);

	return (
		<header className="header" >
			<div className="header_container">
<<<<<<< HEAD
				{/* <img src={header_logo} alt="" /> */}
				{/* <img src={header_logo_bg} className='header_container_bg_img'  alt="header bg img" /> */}
=======
				<img src={header_logo} className='header_container_bg_logo' alt="" />
				<img src={header_logo_bg} className='header_container_bg_img'  alt="header bg img" />
>>>>>>> cd612be4ffdd9ad2f287915a88609d7dca1a6a47

				
				<div className="header_wrapper">

				<ul className="header_container_list">
					<li className="header_container_list_item">
						<Link to={`/${len}/jobs`} className="header_container_list_item">{t("jobs")}</Link>
					</li>
					
					<li className="header_container_list_item">
						<Link to={`/${len}/talants`} className="header_container_list_item">{t("talants")}</Link>
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
