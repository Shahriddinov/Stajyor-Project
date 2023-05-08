import React from "react";
import "./style.scss";
import { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { educationEdit, educationPost } from "reduxToolkit/extraReducers";

function AddEducations({ removeModal, 	defaultInputData, TypeOptions, option, updateIdToStudy, updateToTypeOption }) {
	const { name, degree, typeOfStudy, location, currentStudy, dateFrom, dateTo, type, id } = defaultInputData;

	const dispatch = useDispatch();


	const [data, setData] = useState({
		name,
		degree,
		typeOfStudy,
		location,
		dateFrom,
		dateTo,
		currentStudy
	})
	console.log(data);
	console.log(data.degree);

	const submitHandler = e => {
		e.preventDefault();
		if (type === "add") {
				dispatch(educationPost(data));
				removeModal(prev => ({ ...prev, educationAdd: false }));
		} else {
			dispatch(educationEdit({ id, data }));
			removeModal(false)
		}
	};

	const [isChecked, setIsChecked] = useState(false);

	const isCheskedFunc = () => {
		setIsChecked(!isChecked);
	};
	console.log();
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
							value={data.name}
							onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
							required
						/>
					</div>

					<div className="addEducations__content">
						<Select placeholder={'Select degree'} options={option} onChange={(e) => setData(prev => ({ ...prev, degree: e.id }))} />
					</div>
					<br />

					<div className="addEducations__content">
						<Select placeholder={'Type of study'} options={TypeOptions} onChange={(e) => setData(prev => ({ ...prev, typeOfStudy: e.id }))} />
					</div>
					<br />
					<div className="addEducations__content">
						<input
							className="addEducations__inputLocation"
							type="text"
							placeholder="Location of school"
							value={data.location}
							onChange={e => setData(prev => ({ ...prev, location: e.target.value }))}
							required
						/>
					</div>

					<div className="addEducations__wrapper">
						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="data">
								Date from
							</label>
							<input
								value={data.dateTo.slice(0, 10)}
								className="addEducations__inputDate"
								type="date" id="data"
								data-date-format="YYYY:MMMM:DD"
								onChange={e => setData(prev => ({ ...prev, dateTo: new Date(e.target.value).toISOString()}))}
							/>
						</div>

						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="time">
								To
							</label>
							{data.dateTo ? (
								<input
									disabled={true} className="addEducations__inputDate"
									type="date" id="time"
									value={data.dateTo.slice(0,10)}
									// onChange={e => setSelectedDateTo(e.target.value)}
									   onChange={e => setData(prev => ({ ...prev, dateTo: new Date(e.target.value).toISOString()}))}
								// onChange={e => setData(prev => ({ ...prev, dateTo: e.target.value }))}
								/>
							) : (
								<input disabled={false}
									   value={data.dateTo.slice(0,10)}
									   onChange={e => setData(prev => ({ ...prev, dateTo: new Date(e.target.value).toISOString()}))}
									   className="addEducations__inputDate" type="date" id="time" />
							)}
						</div>
					</div>

					<div className="addEducations__checkboxWrapper">
						<div className="addEducations__checkbox">
							<input
								className="addEducations__inputCheckbox"
								type="checkbox"
								id="checkbox"
								// checked={data.currentStudy}
								onClick={isCheskedFunc}
								onChange={e => setData(prev => ({ ...prev, currentStudy: e.target.value }))}
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
