import React from "react";
import "./style.scss";
import MyCareerLogo from "../../../assets/images/Resume/my-career.svg";

function MyCareer() {
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

				<button type="submit">Next</button>
			</form>
		</div>
	);
}

export default MyCareer;
