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

function Background() {
	const [count, setCount] = useState(1);
	let step1 = false,
		step2 = false,
		step3 = false,
		step4 = false;
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
	}

	return (
		<div className={classes.background}>
			{step1 && <MyCareer />}
			{step2 && <Page2 />}
			{step3 && <Page3 />}
			{step4 && <Page4 />}
			<div className={classes.circleSlider}>
				<div className={step1 ? classes.dotactive : classes.dot} onClick={() => setCount(1)}></div>
				<img src={lineV} alt="line vertical" />
				<div className={step2 ? classes.dotactive : classes.dot} onClick={() => setCount(2)}></div>
				<img src={lineV} alt="line vertical" />
				<div className={step3 ? classes.dotactive : classes.dot} onClick={() => setCount(3)}></div>
				<img src={lineV} alt="line vertical" />
				<div className={step4 ? classes.dotactive : classes.dot} onClick={() => setCount(4)}></div>
			</div>
			<div>
				<img src={blue} alt="blue image" />
				<img className={classes.automative} src={logo} alt="Automative logo" />
				<div className={step1 ? classes.round1 : step2 ? classes.round2 : step3 ? classes.round3 : step4 ? classes.round4 : ""}>
					<Round />
				</div>
			</div>
		</div>
	);
}
// ? classes.round2 : "" ? step3 ? classes.round3 : "" ? step4 ? classes.round4 : ""
export default Background;
