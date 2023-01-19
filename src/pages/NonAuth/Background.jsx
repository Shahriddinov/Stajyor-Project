import React from "react";
import classes from "./Background.module.scss";
import blue from "../../assets/images/blueRound.png";
import logo from "../../assets/images/text.png";
import career from "../../assets/images/career.png";
import Round from "./Round";

function Background() {
	return (
		<div className={classes.background}>
			<div>
				<img src={blue} alt="blue image" />
				<img className={classes.automative} src={logo} alt="Automative logo" />
				<img className={classes.career} src={career} alt="My career" />
				<Round />
			</div>
		</div>
	);
}

export default Background;
