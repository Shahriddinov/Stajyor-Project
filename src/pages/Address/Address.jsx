import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import PersonalInformation from "pages/Personal-Information/PersonalInformation";
import "./style.scss";
import myCareer from "../../assets/images/icons/my-career.svg";

function Address() {
	const [country, setCountry] = React.useState("");
	const [region, setRegion] = React.useState("");

	const handleChangeCountry = event => {
		setCountry(event.target.value);
	};

	const handleChangeRegion = event => {
		setRegion(event.target.value);
	};

	const moveBtn = e => {
		e.preventDefault();
		const btns = document.getElementsByClassName("mycontent__round");
		const text = document.getElementsByClassName("mycontent__text");

		btns[1].style.top = "50px";
		btns[1].style.width = "30px";
		btns[1].style.height = "30px";
		btns[1].style.background = "#1d71b8";
		btns[1].style.border = "3px solid  #f5f5f7";
		text[0].style.display = "none";

		btns[2].style.top = "180px";
		btns[2].style.width = "30px";
		btns[2].style.height = "30px";
		btns[2].style.background = "#f6f8fa";
		btns[2].style.border = "10px solid #1d71b8";
	};

	return (
		<div className="personal">
			<div className="container">
				<div className="personal__inner">
					<form onSubmit={moveBtn} method="POST" className="personal__form">
						<div className="personal__wrapper">
							<h2 className="personal__title">Welcome Dilmurod</h2>
							<p className="personal__subtitle">
								Complete your profile to join our global community of freelancers and start selling your services to our growing network of
								businesses.
							</p>

							<div className="personal__contentInput">
								<label className="personal__labelForm">Living address</label>
								<br />

								<div className="personal__selectWrapper">
									<FormControl className="personal__select">
										<Select
											className="personal__select"
											value={country}
											onChange={handleChangeCountry}
											displayEmpty
											inputProps={{ "aria-label": "Without label" }}
											required>
											<MenuItem value="">Country*</MenuItem>
											<MenuItem value="uzbekistan">Uzbekistan</MenuItem>
											<MenuItem value="russia">Russia</MenuItem>
											<MenuItem value="china">China</MenuItem>
											<MenuItem value="usa">USA</MenuItem>
											<MenuItem value="france">France</MenuItem>
											<MenuItem value="spain">Spain</MenuItem>
											<MenuItem value="germany">Germany</MenuItem>
										</Select>
									</FormControl>

									<FormControl className="personal__select">
										<Select
											className="personal__select"
											value={region}
											onChange={handleChangeRegion}
											displayEmpty
											inputProps={{ "aria-label": "Without label" }}
											required>
											<MenuItem value="">Region*</MenuItem>
											<MenuItem value="andijan">Andijan</MenuItem>
											<MenuItem value="bukhara">Bukhara</MenuItem>
											<MenuItem value="samarkand">Samarkand</MenuItem>
											<MenuItem value="tashkent">Tashkent</MenuItem>
										</Select>
									</FormControl>
								</div>

								<input
									className="personal__inputFormText"
									type="text"
									name="firstname"
									placeholder="Street, apartment"
									autoComplete="off"
									required
								/>
							</div>
						</div>

						<div className="personal__btnWrapper">
							<Link to="../PersonalInformation">
								<button className="personal__back">Back</button>
							</Link>

							<button type="submit" className="personal__btn">
								Next
							</button>
						</div>
					</form>

					<div className="mycontent">
						<img className="mycontent__image" src={myCareer} alt="My career" />

						<div className="mycontent__content">
							<div className="mycontent__round"></div>

							<div className="mycontent__round mycontent__round--active">
								<span className="mycontent__text">Address</span>
							</div>

							<div className="mycontent__round"></div>
							<div className="mycontent__round"></div>
							<div className="mycontent__round"></div>
							<div className="mycontent__round"></div>
							<div className="mycontent__round"></div>
							<div className="mycontent__round"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Address;
