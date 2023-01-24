import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./Language.module.scss";

function Language() {
	return (
		<div className={classes.languageCard}>
			<h2>Write what languages you speak</h2>
			<p>
				The more languages ​​you know, <br /> the more foreign employers will contact you.
			</p>
			<form action="submit" className={classes.languageForm}>
				<label htmlFor="laguages">Language*</label>
				<div className={classes.select}>
					<select name="language" id="language" value="Choose">
						<option>Choose</option>
						<option>2</option>
					</select>
					<select name="language" id="language" value="Choose">
						<option>Choose</option>
						<option>2</option>
					</select>
				</div>
				<button className={classes.addLanguage}>+ Add Language</button>
				<button className={classes.backButton}>Back</button>
				<button className={classes.nextButton}>Next</button>
			</form>
		</div>
	);
}

export default Language;
