import Navigation from "./Navigation";
import Background from "./Background";
import React from "react";
import classes from "./index.module.scss";

function index() {
	return (
		<div className={classes.index}>
			<Navigation />
			<Background />
		</div>
	);
}

export default index;
