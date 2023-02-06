import React from "react";
import "./style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { educationPost, temporary7 } from "reduxToolkit/ResumeSlice";

function AddEducations() {
	const [post,setPost] = useState(
		{
			schoolName: "",
			educationDegree: "",
			typeStudy: "",
			location: "",
			currentStudy: false,
		}
	)

	const dispatch = useDispatch()
	let data = new FormData()
	data.append("schoolName", post.schoolName)
	data.append("educationDegree", post.educationDegree)
	data.append("typeStudy", post.typeStudy)
	data.append("location", post.location)
	data.append("currentStudy", post.currentStudy)

	const submitHandler = (e) => {
		e.preventDefault()
		console.log(post);
		dispatch(educationPost(data))
	}

	const changeEducationPage = (e) => {
		e.preventDefault()
		dispatch(temporary7())
	}



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
						onChange={(e) => setPost(prev => ({...prev, schoolName: e.target.value}))}
						required
						/>
					</div>

					<div className="addEducations__content">
						<input 
						className="addEducations__inputSelect" 
						type="text" 
						placeholder="Select degree" 
						value={post.educationDegree} 
						onChange={(e) => setPost(prev => ({...prev, educationDegree: e.target.value}))}
						required
						/>
					</div>

					<div className="addEducations__content">
						<input 
						className="addEducations__inputStudy" 
						type="text" 
						placeholder="Type of study" 
						value={post.typeStudy} 
						onChange={(e) => setPost(prev => ({...prev, typeStudy: e.target.value}))}
						required
						/>
					</div>

					<div className="addEducations__content">
						<input 
						className="addEducations__inputLocation" 
						type="text" 
						placeholder="Location of school" 
						value={post.location} 
						onChange={(e) => setPost(prev => ({...prev, location: e.target.value}))}
						required
						/>
					</div>

					<div className="addEducations__wrapper">
						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="data">
								Date from
							</label>
							<input 
							className="addEducations__inputDate" 
							type="date" 
							id="data" 
							/>
						</div>

						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="time">
								To
							</label>
							<input 
							className="addEducations__inputDate" 
							type="date" 
							id="time" 
							/>
						</div>
					</div>

					<div className="addEducations__checkboxWrapper">
						<div className="addEducations__checkbox">
							<input 
							className="addEducations__inputCheckbox" 
							type="checkbox" 
							id="checkbox"
							checked={post.currentStudy} 
							onChange={(e) => setPost(prev => ({...prev, currentStudy: !prev.currentStudy}))} 
							/>
							<label className="addEducations__labelCheckbox" htmlFor="checkbox">
								I currently attend here
							</label>
						</div>

						<div className="addEducations__button">
							<button className="addEducations__back" type="button" onClick={changeEducationPage}>Cancel</button>
							<button className="addEducations__next">Save</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddEducations;
