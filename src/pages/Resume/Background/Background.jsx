import Round from "components/Round/Round.jsx";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Background.module.scss";
import back from "../../../assets/images/Resume/back.png";
import MyCareer from "../MyCareer/MyCareer";

function Background() {
	return (
		<div>
			<div className={classes.backSign}>
				<Link to="./">
					<img src={back} alt="back sign" />
					Back
				</Link>
			</div>

			{/* <div className={classes.round}>
				<Round />
			</div> */}

			<div className={classes.mycareer}>
				<MyCareer />
			</div>
		</div>
	);
}

export default Background;
