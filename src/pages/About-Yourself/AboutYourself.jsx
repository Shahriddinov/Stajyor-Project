import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

import Select from "react-select";
import "./style.scss";
import myCareer from "../../assets/images/icons/my-career.svg";

function AboutYourself() {
	const [position, setPosition] = React.useState("");

	const handleChangePosition = event => {
		setPosition(event.target.value);
	};

	const options = [
		{ value: "jack", label: "Jack", color: "#ff8b00" },
		{ value: "john", label: "John", color: "#36b37e" },
		{ value: "mike", label: "Mike", color: "#0052cc" }
	];

	const colorStyles = {
		control: styles => ({ ...styles, backgroundColor: "white" })
	};

	const handleChange = selectedOption => {
		console.log("handleChange", selectedOption);
	};

	const moveBtn = e => {
		e.preventDefault();
		const btns = document.getElementsByClassName("myabout__round");
		const text = document.getElementsByClassName("myabout__text");

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
		<div className="about">
			<div className="container">
				<div className="about__inner">
					<form onSubmit={moveBtn} method="POST" className="about__form">
						<div className="about__intro">
							<div className="about__selectWrapper">
								<label className="about__labelForm">Select your Positions*</label>
								<br />
								<FormControl className="about__select">
									<Select
										className="about__select"
										value={position}
										onChange={handleChangePosition}
										displayEmpty
										inputProps={{ "aria-label": "Without label" }}
										required>
										<MenuItem value="">Web Designer*</MenuItem>
										<MenuItem value="frontend">Frontend</MenuItem>
										<MenuItem value="backend">Backend</MenuItem>
										<MenuItem value="web development">Web Development</MenuItem>
										<MenuItem value="full stack">Full Stack</MenuItem>
										<MenuItem value="mobile developer">Mobile Developer</MenuItem>
										<MenuItem value="ios developer">IOS Developer</MenuItem>
										<MenuItem value="ui / ux">UI / UX</MenuItem>
									</Select>
								</FormControl>
							</div>

							<div>
								<input type="date" />

								<Select options={options} onChange={handleChange} isMulti style={colorStyles} />
							</div>
						</div>

						<div className="about__btnWrapper">
							<Link to="../Address">
								<button className="about__back">Back</button>
							</Link>

							<button type="submit" className="about__btn">
								Next
							</button>
						</div>
					</form>

					<div className="myabout">
						<img className="myabout__image" src={myCareer} alt="My career" />

						<div className="myabout__content">
							<div className="myabout__round"></div>
							<div className="myabout__round"></div>

							<div className="myabout__round myabout__round--active">
								<span className="myabout__text">About yourself and skills</span>
							</div>

							<div className="myabout__round"></div>
							<div className="myabout__round"></div>
							<div className="myabout__round"></div>
							<div className="myabout__round"></div>
							<div className="myabout__round"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutYourself;
