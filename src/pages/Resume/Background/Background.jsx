import Round from "components/Round/Round.jsx";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Background.module.scss";
import back from "../../../assets/images/Resume/back.png";
import Photo from "../cards/Photo.jsx";
import CareerSlider from "../CareerSlider/CareerSlider";
import Country from "../cards/Country";
import WorkExperience from "../cards/WorkExperience/WorkExperience/WorkExperience";
import MyWork from "../cards/WorkExperience/MyWork/MyWork";
import Educations from "../cards/Educations/Educations/Educations";
import AddEducations from "../cards/Educations/AddEducations/AddEducations";

function Background() {
	return (
		<div className={classes.allBackground}>
			<div className={classes.backSign}>
				{/* <Link to="./">
					<img src={back} alt="back sign" />
					Back
				</Link>
				<div className={classes.round}>
					<Round />
				</div> */}
			</div>
			{/* <div className={classes.cards}>
				<Photo />
			</div>
			<div className={classes.career}>
				<CareerSlider />
			</div> */}
			{/* <Educations /> */}
			<AddEducations />
		</div>
	);
}

export default Background;
