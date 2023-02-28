import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { temporary6,temporary7, educationDelete, educationGet, temporary4, temporary8 } from "reduxToolkit/ResumeSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Trash } from '../../../../../assets/images/icons/trash.svg'
import { ReactComponent as Edit } from '../../../../../assets/images/icons/edit.svg'

function Educations() {
	const dispatch = useDispatch()
	const {educationList} = useSelector(state => state.resume)


  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (index) => {
    setIsHovering(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

    const [isHoveringT, setIsHoveringT] = useState(false);

  const handleMouseEnterT = (index) => {
    setIsHoveringT(index);
  };

  const handleMouseLeaveT = () => {
    setIsHoveringT(false);
  };





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

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(temporary8())
	}
	
	return (
		<div className="educations">
			<div className="educations__inner">
						<form onSubmit={handleSubmit}>
							<h2 className="educations__title">Educations</h2>
							<p className="educations__text">
								<span className="educations__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
								<span className="educations__textSpan">But if you're just starting out, you can still create a greatprofile.</span>
								<span className="educations__textSpan">Just head on to the next page.</span>
							</p>
							<div className="educations__box">
								{
									educationList.map((el, index) => (
										<div className="educations__content" key = {el.id}>
											<div className="educations__texts">
												<span className="educations__subtitle">{el.schoolName}</span>
												<div className="educations__study">
													<span className="educations__span">{el.typeStudy}</span>
													<span className="educations__telecommunication">{el.educationDegree}</span>
												</div>
											</div>
					
											<div className="educations__icons">
												<span className="educations__icon--create" type="button" onClick={changeEducationPage}>
													<Edit name="create-outline" 
													className={`${ isHovering === index ? 'experience__box__hovering ' : null }`}
											          onMouseEnter={() => handleMouseEnter(index)}
          												onMouseLeave={handleMouseLeave}
													/>
												</span>
					
												<span className="educations__icon--delete" onClick={() => deletEducation(el.id)} >
													<Trash name="trash-outline" 
													className={`${ isHoveringT === index ? 'experience__box__hoveringT ' : null }`}
											          onMouseEnter={() => handleMouseEnterT(index)}
          												onMouseLeave={handleMouseLeaveT}
													/>
												</span>
											</div>
										</div>
									))
								}
							</div>
		
							<div className="educations__wrapper">
								<button style={{'cursor':'pointer'}} type="click" className="educations__buttonAdd" onClick={handleClick}>+ Add new</button>
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
