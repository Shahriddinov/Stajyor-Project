import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./Language.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import "./styles.scss";
import cancel from "../../../assets/images/Resume/cancel.png";
import { languageUpload, temporary9 } from "../../../reduxToolkit/ResumeSlice";

function Language() {
	const dispatch = useDispatch();
	const languageList = useSelector(state => state.resume.languageList);
	const [theArray, setTheArray] = useState([{ test: "test", test2: "test2", id: 0 }]);
	const [userLang, setUserLang] = useState([]);
	const [userLevel, setUserLevel] = useState([]);
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
		let newLang = [];
		for (let i = 0; i < theArray.length; i++) {
			if (theArray[i].id !== id) {
				newLang.push(theArray[i]);
			}
		}
		setTheArray(newLang);
	};

	const handleSubmit = event => {
		let formdatas = new FormData();
		for (let i = 0; i < theArray.length; i++) {
			formdatas.append("LanguageId", userLang[i]);
			formdatas.append("Level", userLevel[i]);
		}
		dispatch(languageUpload(formdatas));
		dispatch(temporary9());
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
				{theArray.map(lang => (
					<div key={lang.id} id={!singleLang ? "test" : null} className={classes.select}>
						<Select
							className="languageSelect"
							classNamePrefix="mySelectLang"
							options={options1}
							placeholder="Language*"
							onChange={choice => setUserLang([...userLang, choice.value])}
						/>
						<Select
							className="languageSelect"
							classNamePrefix="mySelectLang"
							options={level}
							placeholder="Level*"
							onChange={choice => setUserLevel([...userLevel, choice.value])}
						/>
						{!singleLang && (
							<div className={classes.cancelLang} onClick={() => removeLang(lang.id)}>
								<img src={cancel} alt="cancel" />
							</div>
						)}
					</div>
				))}

				<div style={{'cursor':'pointer'}}
					className={classes.addLanguage}
					onClick={() => {
						setTheArray(oldArray => [...theArray, { test: "test", test2: "test2", id: Math.random() }]);
					}}>
					+ Add Language
				</div>
				<div className={classes.languageCard_btn}>
					<button className={classes.backButton}>Back</button>
					<button className={classes.nextButton}>Next</button>
				</div>
			</form>
		</div>
	);
}

export default Language;
