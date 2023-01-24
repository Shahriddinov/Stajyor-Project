import React from "react";
import "./style.scss";

function AddEducations() {
	return (
		<div className="addEducations">
			<div className="addEducations__inner">
				<h2 className="addEducations__title">Add Education History</h2>

				<form>
					<div className="addEducations__content">
						<input className="addEducations__inputName" type="text" placeholder="School name" />
					</div>

					<div className="addEducations__content">
						<input className="addEducations__inputSelect" type="text" placeholder="Select degree" />
					</div>

					<div className="addEducations__content">
						<input className="addEducations__inputStudy" type="text" placeholder="Type of study" />
					</div>

					<div className="addEducations__content">
						<input className="addEducations__inputLocation" type="text" placeholder="Location of school" />
					</div>

					<div className="addEducations__wrapper">
						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="data">
								Date from
							</label>
							<input className="addEducations__inputDate" type="date" id="data" />
						</div>

						<div className="addEducations__wrapperDate">
							<label className="addEducations__label" htmlFor="time">
								To
							</label>
							<input className="addEducations__inputDate" type="date" id="time" />
						</div>
					</div>

					<div className="addEducations__checkboxWrapper">
						<div className="addEducations__checkbox">
							<input className="addEducations__inputCheckbox" type="checkbox" id="checkbox" />
							<label className="addEducations__labelCheckbox" for="checkbox">
								I currently attend here
							</label>
						</div>

						<div className="addEducations__button">
							<button className="addEducations__back">Cancel</button>
							<button className="addEducations__next">Save</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddEducations;
