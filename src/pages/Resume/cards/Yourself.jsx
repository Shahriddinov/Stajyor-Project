import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./Yourself.module.scss";

function Yourself() {
	return (
		<div className={classes.yourselfCard}>
			<h2>Write little about yourself</h2>
			<form method="post" className={classes.inputBox}>
				<div className={classes.firstInput}>
					<div>
						<label>Select your Positions*</label>
						{/* <img className={classes.downIcon} src={downIcon} alt="down icon" /> */}
						<input type="text" placeholder="Web Designer" />
					</div>
					<div>
						<label>Date of birth*</label>
						<input type="text" placeholder="DD/MM/YYYY" />
					</div>
				</div>
				<div>
					<label>Write down your skills*</label>
					<input type="text" required /> <br />
					<label>Hobbies*</label>
					<br />
					<input type="text" required />
					<textarea type="textarea" required placeholder="Describe yourself to buyers" />
				</div>
				<button className={classes.backButton}>Back</button>
				<button className={classes.nextButton}>Next</button>
			</form>
		</div>
	);
}

export default Yourself;
