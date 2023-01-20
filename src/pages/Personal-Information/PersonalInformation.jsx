import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import "./style.scss";

import myCareer from "../../assets/images/icons/my-career.svg";

function PersonalInformation() {
	const [picture, setPicture] = useState(null);
	const [value, setValue] = useState();

	const uploadPicture = data => {
		setPicture(data);
	};

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
		<div className="personal">
			<div className="container">
				<div className="personal__inner">
					<form onSubmit={moveBtn} method="POST" className="personal__form">
						<div className="personal__imageContent">
							<input
								accept="image/jpg, image/jpeg, image/png, .svg"
								className="personal__input"
								onChange={e => {
									uploadPicture(e.target.files[0]);
								}}
								id="upload-image"
								type="file"
							/>

							<label className="personal__label" htmlFor="upload-image">
								<img style={{ width: 150, height: 150 }} src={!!picture && URL.createObjectURL(picture)} className="personal__image" alt="" />
							</label>

							<p className="personal__text">Add your profile photo</p>
						</div>

						<div className="personal__intro">
							<div className="personal__content">
								<label className="personal__labelForm" htmlFor="firstname">
									Firstname*
								</label>
								<br />
								<input
									className="personal__inputForm"
									type="text"
									id="firstname"
									name="firstname"
									pattern="[A-Za-z]+"
									placeholder="Write in your firstname"
									autoComplete="off"
									required
								/>
							</div>

							<div className="personal__content">
								<label className="personal__labelForm" htmlFor="lastname">
									Lastname*
								</label>
								<br />
								<input
									className="personal__inputForm"
									type="text"
									id="lastname"
									name="lastname"
									pattern="[A-Za-z]+"
									placeholder="Write in your lastname"
									autoComplete="off"
									required
								/>
							</div>

							<div className="personal__content">
								<label className="personal__labelForm" htmlFor="email">
									E-mail*
								</label>
								<br />
								<input
									className="personal__inputForm"
									type="email"
									id="email"
									name="email"
									placeholder="Abcdefg1234@inbox.com"
									autoComplete="off"
									required
								/>
							</div>

							<div className="personal__content">
								<label className="personal__labelForm" htmlFor="number">
									Phone number*
								</label>
								<br />
								<PhoneInput
									className="personal__inputForm"
									type="text"
									id="number"
									name="number"
									placeholder="+XXX (XX) XXX-XX-XX"
									value={value}
									onChange={setValue}
									autoComplete="off"
									required
									minLength={6}
									maxLength={17}
								/>
							</div>
						</div>

						<div className="personal__btnWrapper">
							<button type="submit" className="personal__btn">
								Next
							</button>
						</div>
					</form>

					<div className="mycareer">
						<img className="mycareer__image" src={myCareer} alt="My career" />

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
				</div>
			</div>
		</div>
	);
}

export default PersonalInformation;
