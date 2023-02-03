import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { temporary6,temporary7, educationDelete, educationGet, temporary4 } from "reduxToolkit/ResumeSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Educations() {
	const dispatch = useDispatch()
	const {educationList} = useSelector(state => state.resume)

	useEffect(() => {
		dispatch(educationGet())
	},[dispatch])

	const handleClick = (e) => {
		e.preventDefault()
		dispatch(temporary6())
	}

	const deletEducation = (id) => {
		dispatch(educationDelete(id))
		dispatch(educationGet())
	}

	const changeEducationPage = (e) => {
		e.preventDefault()
		dispatch(temporary7())
	}

	const changePage = (e) => {
		e.preventDefault()
		dispatch(temporary4())
	}
	
	return (
		<div className="educations">
			<div className="educations__inner">
						<form>
							<h2 className="educations__title">Educations</h2>
							<p className="educations__text">
								<span className="educations__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
								<span className="educations__textSpan">But if you're just starting out, you can still create a greatprofile.</span>
								<span className="educations__textSpan">Just head on to the next page.</span>
							</p>
							<div className="educations__box">
								{
									educationList.map(el => (
										<div className="educations__content">
											<div className="educations__texts">
												<span className="educations__subtitle">{el.schoolName}</span>
												<div className="educations__study">
													<span className="educations__span">{el.typeStudy}</span>
													<span className="educations__telecommunication">{el.educationDegree}</span>
												</div>
											</div>
					
											<div className="educations__icons">
												<span className="educations__icon--create" type="button" onClick={changeEducationPage}>
													<ion-icon name="create-outline"></ion-icon>
												</span>
					
												<span className="educations__icon--delete" onClick={() => deletEducation(el.id)} >
													<ion-icon name="trash-outline"></ion-icon>
												</span>
											</div>
										</div>
									))
								}
							</div>
		
							<div className="educations__wrapper">
								<button type="click" className="educations__buttonAdd" onClick={handleClick}>+ Add new</button>
							</div>
		
							<div className="educations__button">
								<button className="educations__back" type="button" onClick={changePage}>Back</button>
								<button className="educations__next" type="submit">Next</button>
							</div>
						</form>

			</div>
		</div>
	);
}

export default Educations;
