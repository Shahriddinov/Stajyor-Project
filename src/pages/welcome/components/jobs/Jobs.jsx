import React from "react";
import LoginDesc from "../talents/login/LoginDesc";
import classes from "./Jobs.module.scss";
import JobsDesc from "./JobsDesc";
function Jobs() {
	return (
		<div className={classes.jobs}>
			<div className="container">
				<div className={classes.jobs__container}>
					<JobsDesc />
					<LoginDesc />
				</div>
			</div>
		</div>
	);
}

export default Jobs;