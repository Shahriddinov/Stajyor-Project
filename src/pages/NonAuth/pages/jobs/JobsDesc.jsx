import React from "react";
import classes from "./JobsDesc.module.scss";
import searchIcon from "../../../../assets/images/searchIcon.png";

function JobsDesc(props) {
	return (
		<div className={classes.jobsDesc}>
			<div className={classes.jobsSearch}>
				<form action="submit">
					<input type="text" placeholder="Job title, keywords..." />
					<button type="submit">
						<img src={searchIcon} alt="Search Icnon" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default JobsDesc;
