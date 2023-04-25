import React from "react";
import "./style.scss";
import { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { educationEdit, educationPost } from "reduxToolkit/extraReducers";

function AddEducations({ removeModal, defaultInputData }) {
	const { schoolName, educationDegree, typeStudy, location, currentStudy, type, id } = defaultInputData;
	const [post, setPost] = useState({ schoolName, educationDegree, typeStudy, location, currentStudy });
	const dispatch = useDispatch();

	let data = new FormData();
	data.append("schoolName", post.schoolName);
	data.append("educationDegree", post.educationDegree);
	data.append("typeStudy", post.typeStudy);
	data.append("location", post.location);
	data.append("currentStudy", post.currentStudy);

	const submitHandler = e => {
		e.preventDefault();
		if (type === "add") {
			dispatch(educationPost(data));
			removeModal(prev => ({ ...prev, educationAdd: false }));
		} else {
			dispatch(educationEdit({ id, data }));
			removeModal(prev => ({ ...prev, educationEdit: false }));
		}
	};

	const [isChecked, setIsChecked] = useState(false);

	const isCheskedFunc = () => {
		setIsChecked(!isChecked);
	};
	const [selectedDegree, setSelectedDegree] = useState([]);
	const selectedDegreeChange = value => {
		setSelectedDegree(value);
	};
	// const [selectedTypeofChange, setSelectedTypeofChange] = useState([])
	// const selectedTypeofChange
	const TypeOptions = [
		{ value: "online", label: "online", id: 1 },
		{ value: "offline", label: "offline", id: 2 }
	];
	const option = [
		{ value: "sredniy", label: "sredniy", id:1},
		{ value: "vishiy", label: "vishiy", id:2},
		{value: "Bachelour", label: "Bachelour", id:3}
	];
	console.log(option);
	return (
		<div className="addEducations">
			<div className="addEducations__inner">
				<h2 className="addEducations__title">Add Education History</h2>

				<form onSubmit={submitHandler}>
					<div className="addEducations__content">
						<input
							className="addEducations__inputName"
							type="text"
							placeholder="School name"
							value={post.schoolName}
							onChange={e => setPost(prev => ({ ...prev, schoolName: e.target.value }))}
							required
						/>
					</div>

					<div className="addEducations__content">
						<Select options={option} value={selectedDegree} onChange={selectedDegreeChange} />
					</div>
					<br/>

					<div className="addEducations__content">
						<Select options={TypeOptions}/>
					</div>
					<br />
					<div className="addEducations__content">
						<input
							className="addEducations__inputLocation"
							type="text"
							placeholder="Location of school"
							value={post.location}
							onChange={e => setPost(prev => ({ ...prev, location: e.target.value }))}
							required
						/>
					</div>

					<div className="addEducations__wrapper">
						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="data">
								Date from
							</label>
							<input className="addEducations__inputDate" type="date" id="data" />
						</div>

						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="time">
								To
							</label>
							{post.currentStudy ? (
								<input disabled={true} className="addEducations__inputDate" type="date" id="time" />
							) : (
								<input disabled={false} className="addEducations__inputDate" type="date" id="time" />
							)}
						</div>
					</div>

					<div className="addEducations__checkboxWrapper">
						<div className="addEducations__checkbox">
							<input
								className="addEducations__inputCheckbox"
								type="checkbox"
								id="checkbox"
								checked={post.currentStudy}
								onChange={e => setPost(prev => ({ ...prev, currentStudy: !prev.currentStudy }))}
							/>
							<label className="addEducations__labelCheckbox" htmlFor="checkbox">
								I currently attend here
							</label>
						</div>

						<div className="addEducations__button">
							<button className="addEducations__back" type="button" onClick={() => removeModal(false)}>
								Cancel
							</button>
							<button className="addEducations__next" type="submit">
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddEducations;
