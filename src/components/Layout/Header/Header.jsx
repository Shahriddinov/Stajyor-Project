import React from "react";
import './Header.scss'

// import header_logo from '../../../assets/images/Freelancer/Freelancer_logo.svg'
// import header_logo_bg from '../../../assets/images/Freelancer/frilancer_ellipse.png'
import Dropdown from "./components/Dropdown";
import LangDrop from "./components/LangDrop";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const len = useSelector(state => state.lenguage.lenguage)

	return (
		<header className="header" >
			<div className="header_container">
				{/* <img src={header_logo} alt="" /> */}
				{/* <img src={header_logo_bg} className='header_container_bg_img'  alt="header bg img" /> */}

				
				<div className="header_wrapper">

				<ul className="header_container_list">
					<li className="header_container_list_item">
						<Link to={`/${len}/jobs`} className="header_container_list_item">Jobs</Link>
					</li>
					
					<li className="header_container_list_item">
						<Link to={`/${len}/talants`} className="header_container_list_item">Talants</Link>
					</li>
					
					<li className="header_container_list_item">
						<Link to={`/${len}/contact`} className="header_container_list_item">Contact us</Link>
					</li>
					
					<li className="header_container_list_item">
						<Link to={`/${len}/about`} className="header_container_list_item">About us</Link>
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
