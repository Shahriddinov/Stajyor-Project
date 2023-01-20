import React from "react";
import classes from "./Navigation.module.scss";

function Navigation() {
	return (
		<div className={classes.navBox}>
			<div className={classes.navLinks}>
				<h2>Home</h2>
				<h2>Talants</h2>
				<h2>Jobs</h2>
				<h2>About us</h2>
				<h2>Contact us</h2>
			</div>
			<div className={classes.logButton}>
				<button>Log in</button>
				<button>Sign up</button>
			</div>
		</div>
	);
}

export default Navigation;
