import React from "react";
import Step from "./Step";

function StepSlider({ labelArray, updateStep, currentStep }) {
	return (
		<div className="stepWrapper">
			{labelArray.map((item, index) => (
				<Step key={index} index={index} label={item} updateStep={updateStep} selected={currentStep === index + 1}></Step>
			))}
		</div>
	);
}

export default StepSlider;
