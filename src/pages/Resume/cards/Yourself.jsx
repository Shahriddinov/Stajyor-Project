import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./Yourself.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hobbies, positions, positionUpload } from "reduxToolkit/ResumeSlice";
import Select from "react-select";
import { useState } from "react";
import { useRef } from "react";
import "./styles.scss";

function Yourself() {
	const dispatch = useDispatch();
	const positionList = useSelector(state => state.resume.positionList);
	const hobbies = useSelector(state => state.resume.hobbiesList);

	const street = useRef("");
	const description = useRef("");
	const [userChoice, setUserChoice] = useState([0, 0]);
	const [userChoice2, setUserChoice2] = useState(0);
	const [hobby, setHobby] = useState([]);
	let options = [];
	let skills = [];
	for (let i = 0; i < positionList.length; i++) {
		options.push({ value: [positionList[i].id, positionList.indexOf(positionList[i])], label: positionList[i].name });
		skills.push(positionList[i].skills);
	}

	let skillsList = [];
	for (let i = 0; i < skills[userChoice[1]].length; i++) {
		skillsList.push({ value: skills[userChoice[1]][i].id, label: skills[userChoice[1]][i].name });
	}
	let hobbiesList = [];
	for (let i = 0; i < hobbies.length; i++) {
		hobbiesList.push({ value: hobbies[i].name, label: hobbies[i].name });
	}

	const handleSubmit = event => {
		let payload = {
			description: description.current.value,
			positionId: userChoice[0],
			freelancerHobbies: hobby,
			freelancerSkills: userChoice2
		};

		dispatch(positionUpload(payload));
		event.preventDefault();
	};

	return (
		<div className={classes.yourselfCard}>
			<h2>Write little about yourself</h2>
			<form method="post" className={classes.inputBox} onSubmit={handleSubmit}>
				<div className={classes.firstInput}>
					<div>
						<label>Select your Positions*</label>
						<Select
							className="position"
							classNamePrefix="mySelect"
							options={options}
							placeholder="Positions*"
							onChange={choice => setUserChoice(choice.value)}
						/>
					</div>
					<div>
						<label>Date of birth*</label>
						<input type="date" placeholder="DD/MM/YYYY" />
					</div>
				</div>
				<div>
					<label>Write down your skills*</label>
					<Select
						isMulti
						name="colors"
						className="basic-multi-select"
						classNamePrefix="mySelect"
						options={skillsList}
						placeholder="Skills*"
						onChange={e => setUserChoice2(Array.isArray(e) ? e.map(x => x.value) : [])}
					/>
					<br />
					<label>Hobbies*</label>
					<br />
					<Select
						isMulti
						name="colors"
						className="basic-multi-select"
						classNamePrefix="mySelect"
						options={hobbiesList}
						placeholder="Hobbies*"
						onChange={e => setHobby(Array.isArray(e) ? e.map(x => x.value) : [])}
					/>
					<textarea type="textarea" required placeholder="Describe yourself to buyers" ref={description} />
				</div>
				<button className={classes.backButton}>Back</button>
				<button className={classes.nextButton}>Next</button>
			</form>
		</div>
	);
}

export default Yourself;
