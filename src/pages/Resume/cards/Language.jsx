import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./Language.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import "./styles.scss";
import cancel from "../../../assets/images/Resume/cancel.png";

function Language() {
	const languageList = useSelector(state => state.resume.languageList);
	const [theArray, setTheArray] = useState([{ test: "test", test2: "test2", id: 0 }]);
	let options1 = [];
	let level = [
		{ value: "A1 - Beginner", label: "A1 - Beginner" },
		{ value: "A2 - Elementary", label: "A2 - Elementary" },
		{ value: "B1 - Intermediate", label: "B1 - Intermediate" },
		{ value: "B2 - Advanced", label: "B2 - Advanced" }
	];

	for (let i = 0; i < languageList.length; i++) {
		options1.push({ value: languageList[i].id, label: languageList[i].name });
	}

	let singleLang = true;
	if (theArray.length > 1) {
		singleLang = false;
	}

	const removeLang = id => {
		const newLang = theArray.slice(id);
		// setTheArray(...theArray);
		console.log(newLang);
	};
	const handleSubmit = event => {
		event.preventDefault();
	};

	return (
		<div className={classes.languageCard}>
			<h2>Write what languages you speak</h2>
			<p>
				The more languages ​​you know, <br /> the more foreign employers will contact you.
			</p>
			<form action="submit" className={classes.languageForm} onSubmit={handleSubmit}>
				<label htmlFor="laguages">Language*</label>
				{singleLang && (
					<div className={classes.select}>
						<Select className="languageSelect" classNamePrefix="mySelectLang" options={options1} placeholder="Language*" />
						<Select className="languageSelect" classNamePrefix="mySelectLang" options={level} placeholder="Level*" />
					</div>
				)}
				{!singleLang &&
					theArray.map(lang => (
						<div key={lang.id} className={classes.select}>
							<Select className="languageSelect" classNamePrefix="mySelectLang" options={options1} placeholder="Language*" />
							<Select className="languageSelect" classNamePrefix="mySelectLang" options={level} placeholder="Level*" />
							<div className="cancelLang" onClick={() => removeLang(lang.id)}>
								<img src={cancel} alt="cancel" />
							</div>
						</div>
					))}

				<div
					className={classes.addLanguage}
					onClick={() => {
						setTheArray(oldArray => [...theArray, { test: "test", test2: "test2", id: theArray.length }]);
					}}>
					+ Add Language
				</div>
				<button className={classes.backButton}>Back</button>
				<button className={classes.nextButton}>Next</button>
			</form>
		</div>
	);
}

export default Language;
