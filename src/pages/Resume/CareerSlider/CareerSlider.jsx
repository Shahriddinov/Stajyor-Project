import React from "react";
import "./style.scss";
import MyCareerLogo from "../../../assets/images/Resume/my-career.svg";
import { useSelector } from "react-redux";

function CareerSlider() {
	const {activeDote} = useSelector(state => state.resumeControle)

	let dot = [
		{id:1,label: "Personal information"},
		{id:2,label: "Address"},
		{id:3,label: "About yourself and skills"},
		{id:4,label: "Language"},
		{id:5,label: "Experience"},
		{id:6,label: "Educations"},
		{id:7,label: "Contacts"},
		{id:8,label: "Resume"},
	]

	const mediaWidth = window.innerWidth

	return (
		<div>
			<div className="mycareer">
					<img className="mycareer__image" src={MyCareerLogo} alt="My Career" />

					<div className="mycareer__text_box">
						<span className="mycareer__text">{activeDote.label}</span>
					</div>

					{
						(activeDote.id !== 8 ) && <span className="mycareer__line"></span>
					}

				<div className="mycareer__content">
					{
						dot.map((el,i) => (
							<React.Fragment key={i}>
								<div 
									className={`mycareer__round ${activeDote.label === el.label ? "mycareer__round--active" : ""}`}
									style={{top: activeDote.id === el.id ? mediaWidth > 1500 ? "150px" : "120px" : activeDote.id > el.id ? `${el.id === 1 ? el.id * 10 : el.id * 12 }px` : null }}
								>
								</div>
							</React.Fragment>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default CareerSlider;
