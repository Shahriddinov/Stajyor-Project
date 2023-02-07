import React from "react";
import classes from "./SelectResume.module.scss";
import resume1 from "../../../assets/images/Resume/resume1.png";
import resume2 from "../../../assets/images/Resume/resume-img1.png";
import resume3 from "../../../assets/images/Resume/resume-img2.png";
import resume4 from "../../../assets/images/Resume/resume-img3.png";
import resume5 from "../../../assets/images/Resume/resume-img4.png";
import resume6 from "../../../assets/images/Resume/resume-img5.png";
import arrowleft from "../../../assets/images/arrow-left.svg"
import arrowright from "../../../assets/images/arrow-right.svg"
import { useState } from "react";

function SelectResume() {
	const [activeDot,setActiveDot] = useState(1)
	const [translate,setTranslate] = useState(0)
	
	const resume = [
		{ id: 1, img: resume1 },
		{ id: 2, img: resume2 },
		{ id: 3, img: resume3 },
		{ id: 4, img: resume4 },
		{ id: 5, img: resume5 },
		{ id: 6, img: resume6 },
	];

	const handleNextClick = () => {
		if(activeDot < resume.length) {
			setActiveDot(prev => prev + 1)
			setTranslate(-activeDot * 330)
		}
	}

	const handlePrevClick = () => {
		if(activeDot > 1) {
			setActiveDot(prev => prev - 1)
			setTranslate(prev => prev * 1 + 330)
		}
	}

	const handleDotClick = (num) => {
		setActiveDot(num)
		if(num === 1) {
			setTranslate(0)
		}else if(num > 1) {
			
			if(translate < 0) {
				setTranslate(prev => -((num - 1) * 330))
			}else {
				setTranslate(prev => -(prev + ((num - 1) * 330)))
			}
		}
	}

	return (
		<div className={classes.selectResume}>
			<h2>Select your resume design</h2>
			<p>Your resume is ready! You need to choose one of this templates and all your info will be filled in it already.</p>
			<div className={classes.eachResume} style={{transform: `translateX(${translate}px)`}}>
				{resume.map((eachResume, i) => (
					<div key={eachResume.id} className={`${classes.slide} ${activeDot === (i + 1) ? classes.slide__active : ""}`}>
						<img src={eachResume.img} alt="Resume image" />
					</div>
				))}
			</div>
			<div className={classes.resume__footer}>
				<div className={classes.pagination__box}>
					<button className={classes.pagination__arrow} onClick={handlePrevClick}>
						<img src={arrowleft} alt="" />
					</button>
					<ul className={classes.pagination_dots}>
						{
							resume.map((el,i) => (
								<li 
								className={`${classes.pagination_dot} ${activeDot === (i + 1) ? classes.active : null}`} 
								key={i + 1}
								onClick={() => handleDotClick(i + 1)}
								>
								</li>
							))
						}
					</ul>
					<button className={classes.pagination__arrow} onClick={handleNextClick}>
						<img src={arrowright} alt="" />
					</button>
				</div>
				<form action="submit" className={classes.socialForm}>
					<button 
					className={classes.backButton}
					>
						Back
					</button>

					<button 
					className={classes.nextButton}
					>
						Next
					</button>
				</form>
			</div>
			
		</div>
	);
}

export default SelectResume;
