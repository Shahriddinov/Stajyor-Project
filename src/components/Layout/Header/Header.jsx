import React from "react";
import './Header.scss'

import header_logo from '../../../assets/images/Freelancer/Freelancer_logo.svg'
import header_logo_bg from '../../../assets/images/Freelancer/frilancer_ellipse.png'
import Dropdown from "./components/Dropdown";
import LangDrop from "./components/LangDrop";

const Header = () => {

	return (
		<header className="header" >
			<div className="header_container">
				<img src={header_logo} alt="" />
				<img src={header_logo_bg} className='header_container_bg_img'  alt="header bg img" />

				
				<div className="header_wrapper">

				<ul className="header_container_list">
					<li className="header_container_list_item">
						<a href="/" className="header_container_list_item">Jobs</a>
					</li>
					
					<li className="header_container_list_item">
						<a href="/" className="header_container_list_item">Talants</a>
					</li>
					
					<li className="header_container_list_item">
						<a href="/" className="header_container_list_item">Contact us</a>
					</li>
					
					<li className="header_container_list_item">
						<a href="/" className="header_container_list_item">About us</a>
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
