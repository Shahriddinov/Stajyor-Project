import React from "react";
import LoginDesc from "../LoginDesc";
import classes from "./Talants.module.scss";
import TalantsDesc from "./TalantsDesc";

function Talants(props) {
	return (
		<div className={classes.talantsContainer}>
			<TalantsDesc />
			<LoginDesc />
		</div>
	);
}

export default Talants;
