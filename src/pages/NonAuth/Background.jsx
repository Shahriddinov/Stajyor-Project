import React from "react";
import classes from "./Background.module.scss";
import blue from "../../assets/images/blueRound.png";
import logo from "../../assets/images/text.png";
import Round from "./Round";
import MyCareer from "./MyCareer";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { useState } from "react";
import lineV from "../../assets/images/lineV.png";
import classesNav from "./Navigation.module.scss";
import Talants from "./Talants";
import CircleSlider from "./CircleSlider";
import Jobs from "./Jobs";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";

function Background() {
	const [count, setCount] = useState(1);

	let step0 = false,
		step1 = false,
		step2 = false,
		step3 = false,
		step4 = false,
		step5 = false,
		step6 = false,
		step7 = false,
		step8 = false;
	switch (count) {
		case 1:
			step1 = true;
			break;
		case 2:
			step2 = true;
			break;
		case 3:
			step3 = true;
			break;
		case 4:
			step4 = true;
			break;
		case 5:
			step5 = true;
			break;
		case 6:
			step6 = true;
			break;

		case 7:
			step7 = true;
			break;

		case 8:
			step8 = true;
			break;

		default:
			step1 = true;
	}

	return (
		<div className={classes.background}>
			<div className={classesNav.menu}>
				<ul className={classesNav.menu__links}>
					<li className={`${classesNav.menu__link} active`} onClick={() => setCount(1)}>
						Home
					</li>
					<li className={classesNav.menu__link} onClick={() => setCount(5)}>
						Talants
					</li>
					<li className={classesNav.menu__link} onClick={() => setCount(6)}>
						Jobs
					</li>
					<li className={classesNav.menu__link} onClick={() => setCount(7)}>
						About us
					</li>
					<li className={classesNav.menu__link} onClick={() => setCount(8)}>
						Contact us
					</li>
				</ul>

				<div className={classesNav.menu__buttons}>
					<button className={classesNav.menu__login}>Log in</button>
					<button className={classesNav.menu__signup}>Sign up</button>
				</div>
			</div>
			<div className={classesNav.menu__underline}></div>
			{step1 ? <MyCareer /> : ""}
			{step2 ? <Page2 /> : ""}
			{step3 && <Page3 />}
			{step4 && <Page4 />}
			{step5 && <Talants />}
			{step6 && <Jobs />}
			{step7 && <Aboutus />}
			{step8 && <Contactus />}
		
			<div>
				<img src={blue} alt="blue" />
				<img className={classes.automative} src={logo} alt="Automative logo" />
				<div className={step1 ? classes.round1 : step2 ? classes.round2 : step3 ? classes.round3 : step4 ? classes.round4 : ""}>
					<Round />
				</div>
			</div>
		</div>
	);
}

export default Background;

// {/*<div className={classes.circleSlider}>
// 			<div className={step1 ? classes.dotactive : classes.dot} onClick={() => setCount(1)}></div>
// 			<img src={lineV} alt="line vertical" />
// 			<div className={step2 ? classes.dotactive : classes.dot} onClick={() => setCount(2)}></div>
// 			<img src={lineV} alt="line vertical" />
// 			<div className={step3 ? classes.dotactive : classes.dot} onClick={() => setCount(3)}></div>
// 			<img src={lineV} alt="line vertical" />
// 			<div className={step4 ? classes.dotactive : classes.dot} onClick={() => setCount(4)}></div>
// </div>*/}
