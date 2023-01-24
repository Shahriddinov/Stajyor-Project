import Round from "components/Round/Round.jsx";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Background.module.scss";
import back from "../../../assets/images/Resume/back.png";
import Photo from "../cards/Photo.jsx";
import CareerSlider from "../CareerSlider/CareerSlider";
import Yourself from "../cards/Yourself";
import Language from "../cards/Language";
import Country from "../cards/Country";
import SocialMedia from "../cards/SocialMedia";
import SelectResume from "../cards/SelectResume";
import Educations from "../cards/Educations/Educations/Educations";
import AddEducations from "../cards/Educations/AddEducations/AddEducations";
import MyWork from "../cards/WorkExperience/MyWork/MyWork";
import WorkExperience from "../cards/WorkExperience/WorkExperience/WorkExperience";

function Background() {
	return (
		<div className={classes.allBackground}>
			<div className={classes.backSign}>
				<Link to="./">
					<img src={back} alt="back sign" />
					Back
				</Link>
				<div className={classes.round}>
					<Round />
				</div>
			</div>
			<div className={classes.cards}>
				{/* <Photo /> */}
				{/* <Country /> */}
				{/* <Yourself /> */}
				{/* <Language /> */}
				<WorkExperience />
				{/* <MyWork /> */}
				{/* <Educations /> */}
				{/* <AddEducations /> */}
				{/* <SocialMedia /> */}
				{/* <SelectResume /> */}
			</div>
			<div className={classes.career}>
				<CareerSlider />
			</div>
		</div>
	);
}

export default Background;
