import React from "react";
import "./NavbarSignup.scss";
import { Link } from "react-router-dom";

function NavbarSignup(props) {
	return (
		<Link to="/non-auth" className="navbar-signup">
			<button className="navbar__btn-signup">Sign up</button>
		</Link>
	);
}

export default NavbarSignup;
