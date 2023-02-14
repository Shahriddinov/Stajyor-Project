import React from "react";
import './Header.scss'

import header_logo from '../../../assets/images/header/logo.svg'
import header_logo_bg from '../../../assets/images/header/ellipse.png'
import Dropdown from "./components/Dropdown";
import LangDrop from "./components/LangDrop";

const Header = () => {

	const auth_path = window.location.pathname.split('/')[1]

	console.log(auth_path);

	return (
		<header className="header" >
			<div className="header_container">
				<img src={header_logo} className='header_container_bg_logo' alt="" />
				<img src={header_logo_bg} className='header_container_bg_img'  alt="header bg img" />

				
				<div className="header_wrapper">

				<ul className="header_container_list">
					<li className="header_container_list_item">
						<a href={`${auth_path}/jobs`} className="header_container_list_item">Jobs</a>
					</li>
					
					<li className="header_container_list_item">
						<a href={`${auth_path}/talants`} className="header_container_list_item">Talants</a>
					</li>
					
					<li className="header_container_list_item">
						<a href={`${auth_path}/about_us`} className="header_container_list_item">About us</a>
					</li>
					
					<li className="header_container_list_item">
						<a href={`${auth_path}/contact_us`} className="header_container_list_item">Contact us</a>
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
