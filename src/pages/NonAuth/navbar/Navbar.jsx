import React from "react";
import "./Navbar.scss";
import NavbarLogin from "./NavbarLogin/NavbarLogin";
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavMenu from "./NavMenu/NavMenu";
import NavbarSignup from "./NavbarSignup/NavbarSignup";

function Header() {
	return (
		<div className="header">
			<NavbarLogo />
			<NavMenu />
			<NavbarLogin />
			<NavbarSignup />
		</div>
	);
}

export default Header;
