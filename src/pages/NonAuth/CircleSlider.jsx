import React, { useState } from "react";
import classes from "./CircleSlider.module.scss";
import lineV from "../../assets/images/lineV.png";

function CircleSlider({ step1, step2, step3, step4, setCount }) {
	return (
		<div className={classes.circleSlider}>
			<div className={step1 ? classes.dotactive : classes.dot} onClick={() => setCount(1)}></div>
			<img src={lineV} alt="line vertical" />
			<div className={step2 ? classes.dotactive : classes.dot} onClick={() => setCount(2)}></div>
			<img src={lineV} alt="line vertical" />
			<div className={step3 ? classes.dotactive : classes.dot} onClick={() => setCount(3)}></div>
			<img src={lineV} alt="line vertical" />
			<div className={step4 ? classes.dotactive : classes.dot} onClick={() => setCount(4)}></div>
		</div>
	);
}

export default CircleSlider;
