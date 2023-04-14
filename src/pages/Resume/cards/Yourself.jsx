import React from "react";
// import downIcon from "../../../assets/images/Resume/down.png";
import "./Yourself.scss";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useState } from "react";
import "./styles.scss";
import { MultiSelect } from "@mantine/core";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { languages, positionsUpload, getPositionsSkillsWithId } from "reduxToolkit/extraReducers";
import { useEffect } from "react";

function Yourself() {
	const dispatch = useDispatch();
	const { positionGetLoading, positionList, hobbiesList, loading, skillsData } = useSelector(state => state.resume);
	const [skil, setSkil] = useState("");
	const [hobbiesorg, setHobbiesorg] = useState([]);
	const [orgSkills, setOrgSkills] = useState("");
	const [datas, setData] = useState({
		description: "",
		positionId: null,
		freelancerHobbies: [],
		freelancerSkills: [],
		newHobbies: [],
		newSkills: []
	});
	useEffect(() => {
		setHobbiesorg(hobbiesList.map(hobbie => ({ value: hobbie.id, label: hobbie.name })));
	}, [hobbiesList]);
	useEffect(() => {
		dispatch(getPositionsSkillsWithId(skil));
	}, [skil]);

	if (positionGetLoading && loading) {
		return <b>Loading...</b>;
	}

	const handleSubmit = event => {
		console.log(datas);
		dispatch(languages());
		event.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 4, label: "Language" },
				{ id: 4, type: "lenguage" }
			])
		);
	};

	const prevPage = event => {
		event.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 2, label: "Address" },
				{ id: 2, type: "country" }
			])
		);
	};
	const PositionChange = pos => {
		setSkil(pos.id);
		console.log(pos);
	};
	const options = skillsData.map(item => ({
		value: item.content,
		label: item.content
	}));
	const changeSkill = ({ value, type }) => {
		console.log(value);
		if (type === "skills") {
			setData(prev => ({
				...prev,
				freelancerSkills: value.filter(el => !isNaN(el * 1)).map(el => el * 1),
				newSkills: value.filter(el => isNaN(el * 1))
			}));
		} else {
			setData(prev => ({
				...prev,
				freelancerHobbies: value.filter(el => !isNaN(el * 1)).map(el => el * 1),
				newHobbies: value.filter(el => isNaN(el * 1))
			}));
		}
	};
// console.log(data)
	return (
		<div className="yourselfCard">
			<h2 className="yourselfCard_title">Write little about yourself</h2>
			<form method="post" className="yourselfCard_form" onSubmit={handleSubmit}>
				<div className="yourselfCard_form_wrapper">
					<div className="yourselfCard_form_wrapper_top">
						<label className="yourselfCard_label">Select your Positions*</label>
						<Select
							required
							classNamePrefix="mySelect"
							options={positionList.map(el => ({ id: el.id, label: el.name }))}
							onChange={PositionChange}
							placeholder="Positions*"
						/>
					</div>

					<div className="yourselfCard_form_wrapper_bottom">
						<label className="yourselfCard_label">Date of birth*</label>
						<input type="date" required placeholder="DD/MM/YYYY"/>
					</div>
				</div>

				<div>
					<label className="yourselfCard_label">Write down your skills*</label>
					<MultiSelect
						data={options}
						// onChange={handleSelectChange}
						searchable
						creatable
						getCreateLabel={query => `+ Create ${query}`}
						onCreate={query => {
							const item = { value: query, label: query };
							setOrgSkills(current => [...current, item]);
							return item;
						}}
					/>

					<label className="yourselfCard_label">Hobbies*</label>
					<br />
					<MultiSelect
						className="yourself_select"
						required
						data={hobbiesorg}
						placeholder="Select hobbie or create a new"
						nothingFound="Nothing found"
						// searchable
						// creatable
						// getCreateLabel={query => `+ Create ${query}`}
						// onCreate={query => {
						// 	const item = { value: query, label: query.toLowerCase() };
						// 	setHobbiesorg(current => [...current, item]);
						// 	return item;
						// }}
						// onChange={value => changeSkill({ value, type: "hobbies" })}
					/>

					<textarea
						className="yourselfCard_textarea"
						type="textarea"
						placeholder="Describe yourself to buyers"
						onChange={event => setData(prev => ({ ...prev, description: event.target.value.trim() }))}></textarea>
				</div>
				<div className="yourselfCard_btn">
					<button className="backButton" type="button" onClick={prevPage}>
						Back
					</button>
					<button className="nextButton">Next</button>
				</div>
			</form>
		</div>
	);
}

export default Yourself;
