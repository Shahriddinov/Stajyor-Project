import React, { useState } from "react";
import "./index.scss";
import StepSlider from "./StepSlider";
function CircleSlider(props) {
	const labelArray = [1, 2, 3, 4];
	const [currentStep, updateCurrentStep] = useState(3);

	function updateStep(step) {
		updateCurrentStep(step);
	}

	return (
		<div className="circle-slider">
			<StepSlider labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepSlider>
		</div>
	);
}

export default CircleSlider;
