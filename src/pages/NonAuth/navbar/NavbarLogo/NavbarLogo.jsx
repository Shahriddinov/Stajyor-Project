import React from "react";
import "./NavbarLogo.scss";
import { ReactComponent as LogoSvg } from "../../../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

function NavbarLogo(props) {
	return (
		<div className="navbar-logo">
			<Link to="/non-auth">
				<LogoSvg />
			</Link>
		</div>
	);
}

export default NavbarLogo;
