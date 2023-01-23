import React from "react";
import "./Photo.scss";

function Country() {
	return (
		<div className="photoCard">
			<div className="country">
				<form className="country__form">
					<h2 className="country__title">Welcome Dilmurod</h2>
					<p className="country__text">
						Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
					</p>

					<div className="country__content">
						<h5 className="country__subtitle">Living address</h5>
						<div className="country__wrapper">
							<div className="country__info">
								<input className="country__input" type="text" placeholder="Country*" />
							</div>

							<div className="country__info">
								<input className="country__input" type="text" placeholder="Region*" />
							</div>
						</div>

						<input className="country__inputStreet" type="text" placeholder="Street, apartment" />
					</div>

					<div className="country__button">
						<button className="country__back">Back</button>
						<button className="country__next">Next</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Country;
