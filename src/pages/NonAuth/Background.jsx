import React from "react";
import classes from "./Background.module.scss";
import blue from "../../assets/images/blueRound.png";
import logo from "../../assets/images/text.png";
import Round from "./Round";
import MyCareer from "./MyCareer";

function Background() {
	return (
		<div className={classes.background}>
			<MyCareer />
			<div>
				<img src={blue} alt="blue image" />
				<img className={classes.automative} src={logo} alt="Automative logo" />
				<Round />
			</div>
		</div>
	);
}

export default Background;
