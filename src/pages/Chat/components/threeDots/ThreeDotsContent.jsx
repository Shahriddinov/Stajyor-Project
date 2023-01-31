import React from "react";
import classes from "./ThreeDotsContent.module.scss";

function ThreeDotsContent(props) {
	
	return (
		<div className={classes.container}>
			<span className={classes.media}>Media</span>
			<span className={classes.files}>Files</span>
			<span className={classes.links}>Links</span>
			<span className={classes.seeProfile}>See profile</span>
			<span className={classes.clearTheHistory}>Clean the history</span>
		</div>
	);
}

export default ThreeDotsContent;
