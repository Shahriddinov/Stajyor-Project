import React from "react";
import "./style.scss";

function WorkExperience() {
	return (
		<div className="experience">
			<div className="experience__inner">
				<form>
					<h2 className="experience__title">Work Experience</h2>
					<p className="experience__text">
						<span className="experience__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
						<span className="experience__textSpan">But if you're just starting out, you can still create a great profile.</span>
						<span className="experience__textSpan">Just head on to the next page.</span>
					</p>

					<div className="experience__content">
						<div className="experience__texts">
							<span className="experience__subtitle">NAPA Automotive</span>
							<span className="experience__span">UX UI Designer</span>
						</div>

						<div className="experience__icons">
							<span className="experience__icon--create">
								<ion-icon name="create-outline"></ion-icon>
							</span>

							<span className="experience__icon--delete">
								<ion-icon name="trash-outline"></ion-icon>
							</span>
						</div>
					</div>

					<div className="experience__wrapper">
						<button className="experience__buttonAdd">+ Add new</button>
					</div>

					<div className="experience__button">
						<button className="experience__back">Back</button>
						<button className="experience__next">Next</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default WorkExperience;
