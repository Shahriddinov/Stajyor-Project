import React from "react";
import "./style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { exsperienceGet, exsperiencePost,temporary5 } from "reduxToolkit/ResumeSlice";

function MyWork() {
	const [experience,setExperience] = useState({
		companyName: "",
		job: "",
		currentWorking: false,
		descripeion: "",
	})

	const dispatch = useDispatch()


	const handleClick = (e) => {
		e.preventDefault();
		dispatch(exsperiencePost(JSON.stringify(experience)))
	}

	const changePage = (e) => {
		e.preventDefault();
		dispatch(temporary5())
	}

	return (
		<div className="mywork">
			<div className="mywork__inner">
				<form onSubmit={handleClick}>
					<h2 className="mywork__text">Work experience</h2>

					<div className="mywork__content">
						<input 
						className="mywork__input" 
						type="text" 
						placeholder="Company name" 
						value={experience.companyName}
						onChange={(e) => setExperience(prev => ({...prev, companyName: e.target.value}))}
						/>
					</div>

					<div className="mywork__content">
						<input 
						className="mywork__input" 
						type="text" placeholder="Job" 
						value={experience.job}
						onChange={(e) => setExperience(prev => ({...prev, job: e.target.value}))}
						/>
					</div>

					<div className="mywork__checkbox">
						<input 
						className="mywork__inputCheckbox" 
						type="checkbox" id="checkbox" 
						checked={experience.currentWorking}
						onChange={() => setExperience(prev => ({...prev, currentWorking: !prev.role}))}
						/>
						<label className="mywork__labelCheckbox" htmlFor="checkbox">
							I am currently working in this role
						</label>
					</div>

					<div className="mywork__wrapper">
						<div className="mywork__wrapperDate">
							<label className="mywork__label" htmlFor="data">
								Date from
							</label>
							<input className="mywork__inputDate" type="date" id="data" />
						</div>

						<div className="mywork__wrapperDate">
							<label className="mywork__label" htmlFor="time">
								To
							</label>
							<input className="mywork__inputDate" type="date" id="time" />
						</div>
					</div>

					<div className="mywork__descriptionWrapper">
						<input 
						className="mywork__description" 
						type="text" 
						placeholder="Description" 
						value={experience.descripeion}
						onChange={(e) => setExperience(prev => ({...prev, descripeion: e.target.value}))}
						/>
					</div>

					<div className="mywork__button">
						<button className="mywork__back" type="button" onClick={changePage}>Cancel</button>
						<button type="submit" className="mywork__next">Save</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default MyWork;
