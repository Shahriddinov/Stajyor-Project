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
import PersonalInformation from "../company/PersonalInformation/PersonalInformation";
import YourCompany from "../company/YourCompany/YourCompany";
import AboutYourCompany from "../company/AboutYourCompany/AboutYourCompany";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./Background.scss";

function Background() {
	const resumeSteps = useSelector(state => state.resume);
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
				<CSSTransition in={resumeSteps.photoPage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<Photo />
				</CSSTransition>
				<CSSTransition in={resumeSteps.countryPage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<Country />
				</CSSTransition>
				<CSSTransition in={resumeSteps.yourselfPage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<Yourself />
				</CSSTransition>
				<CSSTransition in={resumeSteps.languagePage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<Language />
				</CSSTransition>
				<CSSTransition in={resumeSteps.experiencePage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					{/* <WorkExperience /> */}
					<SocialMedia />
				</CSSTransition>
				{/* <MyWork /> */}
				{/* <Educations /> */}
				{/* <AddEducations /> */}
				<CSSTransition in={resumeSteps.experiencePage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<WorkExperience />
				</CSSTransition>
				<CSSTransition in={resumeSteps.newExperiencePage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<MyWork />
				</CSSTransition>
				<CSSTransition in={resumeSteps.educationPage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<Educations />
				</CSSTransition>
				<CSSTransition in={resumeSteps.createEducationPage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<AddEducations />
				</CSSTransition>
				{/* <SocialMedia /> */}
				<CSSTransition in={resumeSteps.resumePage} timeout={500} unmountOnExit={true} mountOnEnter={true} classNames="cardTransition">
					<SelectResume />
				</CSSTransition>
				{/* <PersonalInformation /> */}
				{/* <YourCompany /> */}
				{/* <AboutYourCompany /> */}
				{/* <SocialMedia /> */}
			</div>
			<div className={classes.career}>
				<CareerSlider />
			</div>
		</div>
	);
}

export default Background;
