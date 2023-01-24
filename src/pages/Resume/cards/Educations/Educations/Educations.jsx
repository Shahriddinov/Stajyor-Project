import React from "react";
import "./style.scss";

function Educations() {
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

					<div className="educations__content">
						<div className="educations__texts">
							<span className="educations__subtitle">TATU</span>
							<div className="educations__study">
								<span className="educations__span">Bachelor</span>
								<span className="educations__telecommunication">Telecommunication</span>
							</div>
						</div>

						<div className="educations__icons">
							<span className="educations__icon--create">
								<ion-icon name="create-outline"></ion-icon>
							</span>

							<span className="educations__icon--delete">
								<ion-icon name="trash-outline"></ion-icon>
							</span>
						</div>
					</div>

					<div className="educations__wrapper">
						<button className="educations__buttonAdd">+ Add new</button>
					</div>

					<div className="educations__button">
						<button className="educations__back">Back</button>
						<button className="educations__next">Next</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Educations;
