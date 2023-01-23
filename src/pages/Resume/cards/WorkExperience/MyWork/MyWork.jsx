import React from "react";
import "./style.scss";

function MyWork() {
	return (
		<div className="mywork">
			<div className="mywork__inner">
				<form>
					<h2 className="mywork__text">Work experience</h2>

					<div className="mywork__content">
						<input className="mywork__input" type="text" placeholder="Company name" />
					</div>

					<div className="mywork__content">
						<input className="mywork__input" type="text" placeholder="Job" />
					</div>

					<div className="mywork__checkbox">
						<input className="mywork__inputCheckbox" type="checkbox" id="work" name="work" />
						<label className="mywork__labelCheckbox" for="work">
							I am currently working in this role
						</label>
					</div>

					<div className="mywork__wrapper">
						<div className="mywork__wrapperDate">
							<label className="mywork__label" htmlFor="data">
								Date from
							</label>
							<input className="mywork__inputDate" type="date" id="data" />
						</div>

						<div className="mywork__wrapperDate">
							<label className="mywork__label" htmlFor="time">
								To
							</label>
							<input className="mywork__inputDate" type="date" id="time" />
						</div>
					</div>

					<div className="mywork__descriptionWrapper">
						<input className="mywork__description" type="text" placeholder="Description" />
					</div>

					<div className="experience__button">
						<button className="experience__back">Cancel</button>
						<button className="experience__next">Save</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default MyWork;
