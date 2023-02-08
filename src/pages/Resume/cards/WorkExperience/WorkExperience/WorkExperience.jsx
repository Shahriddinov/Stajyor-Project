import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { exsperienceDelete, exsperienceGet, temporary2, temporary3 } from "reduxToolkit/ResumeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function WorkExperience() {

	const {experienceList}  = useSelector(state => state.resume)
	const dispatch = useDispatch()

	useEffect(() => {
		console.log("salom");
		dispatch(exsperienceGet())
	}, [dispatch])

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(temporary3())
	}

	const handleClick = () => {
		dispatch(temporary2())
	}

	const deletExperience = (id) => {
		dispatch(exsperienceDelete(id))
		dispatch(exsperienceGet())
	}

	const changePage = (e) => {
		e.preventDefault();
		dispatch()
	}


	return (
		<div className="experience">
			<div className="experience__inner">
				<div>
					<h2 className="experience__title">Work Experience</h2>
					<p className="experience__text">
						<span className="experience__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
						<span className="experience__textSpan">But if you're just starting out, you can still create a great profile.</span>
						<span className="experience__textSpan">Just head on to the next page.</span>
					</p>
					
					<div className="experience__box">
						{
							experienceList.map(el => (
								<div className="experience__content" key={el.id}>
									<div className="experience__texts">
										<span className="experience__subtitle">{el.companyName}</span>
										<span className="experience__span">{el.job}</span>
									</div>

									<div className="experience__icons">
										<span className="experience__icon--create">
											<ion-icon name="create-outline"></ion-icon>
										</span>

										<span className="experience__icon--delete" onClick={() => deletExperience(el.id)}>
											<ion-icon name="trash-outline"></ion-icon>
										</span>
									</div>
								</div>
							))
						}
					</div>
					

					<div className="experience__wrapper">
						<button className="experience__buttonAdd" onClick={handleClick}>+ Add new</button>
					</div>

					<div className="experience__button">
						<button className="experience__back" type="button" onClick={changePage}>Back</button>
						<button className="experience__next" type="submit" onClick={handleSubmit}>Next</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkExperience;
