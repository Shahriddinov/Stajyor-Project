import React from "react";
import "./style.scss";
import MyCareerLogo from "../../../assets/images/Resume/my-career.svg";
import { useSelector } from "react-redux";

function CareerSlider() {
	const resumeSteps = useSelector(state => state.resume);
	const moveBtn = e => {
		e.preventDefault();
		const btns = document.getElementsByClassName("mycareer__round");
		const text = document.getElementsByClassName("mycareer__text");

		btns[0].style.top = "20px";
		btns[0].style.width = "30px";
		btns[0].style.height = "30px";
		btns[0].style.background = "#1d71b8";
		btns[0].style.border = "3px solid  #f5f5f7";
		text[0].style.display = "none";

		btns[1].style.top = "150px";
		btns[1].style.width = "30px";
		btns[1].style.height = "30px";
		btns[1].style.background = "#f6f8fa";
		btns[1].style.border = "10px solid #1d71b8";
	};

	const pageInfo = [
		{ photoPage: "Personal information" },
		{ countryPage: "Address" },
		{ yourselfPage: "About yourself and skills" },
		{ languagePage: "Language" },
		{ experiencePage: "Experience" },
		{ newExperiencePage: "Experience" },
		{ educationPage: "Educations" },
		{ createEducationPage: "Educations" },
		{ contactsPage: "Contacts" },
		{ resumePage: "Resume" },
		{ resumeFinishPage: "Resume" }
	];

	for (let i = 0; i < pageInfo.length; i++) {
		if (pageInfo[i] === resumeSteps) {
			console.log(resumeSteps);
		}
	}

	return (
		<div>
			<form onSubmit={moveBtn}>
				<div className="mycareer">
					<img className="mycareer__image" src={MyCareerLogo} alt="My Career" />

					<div className="mycareer__content">
						<div className="mycareer__round mycareer__round--active">
							<span className="mycareer__text">Personal information</span>
						</div>
						<div className="mycareer__round"></div>
						<div className="mycareer__round"></div>
						<div className="mycareer__round"></div>
						<div className="mycareer__round"></div>
						<div className="mycareer__round"></div>
						<div className="mycareer__round"></div>
						<div className="mycareer__round"></div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default CareerSlider;
