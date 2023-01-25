import React from "react";
import LoginDesc from "../LoginDesc";
import classes from "./Jobs.module.scss";
import JobsDesc from "./JobsDesc";
function Jobs(props) {
	return (
		<div className={classes.jobsContainer}>
			<JobsDesc />
			<LoginDesc />
		</div>
	);
}

export default Jobs;
