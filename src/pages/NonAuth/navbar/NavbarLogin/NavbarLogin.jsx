import React from "react";
import "./NavbarLogin.scss";
import { Link } from "react-router-dom";

function NavbarLogin(props) {
	return (
		<Link to="/non-auth">
			<button className="navbar__btn-login">Log in</button>
		</Link>
	);
}

export default NavbarLogin;
