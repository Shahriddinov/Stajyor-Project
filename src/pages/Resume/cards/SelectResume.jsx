import React from "react";
import classes from "./SelectResume.module.scss";
import resume1 from "../../../assets/images/Resume/resume1.png";

function SelectResume() {
	const resume = [
		{ id: 1, img: resume1 },
		{ id: 2, img: resume1 },
		{ id: 2, img: resume1 }
	];
	return (
		<div className={classes.selectResume}>
			<h2>Select your resume design</h2>
			<p>Your resume is ready! You need to choose one of this templates and all your info will be filled in it already.</p>
			<div className={classes.eachResume}>
				{resume.map(eachResume => (
					<div>
						<img src={eachResume.img} alt="Resume image" />
					</div>
				))}
			</div>
			<form action="submit" className={classes.socialForm}>
				<button className={classes.backButton}>Back</button>
				<button className={classes.nextButton}>Next</button>
			</form>
		</div>
	);
}

export default SelectResume;
