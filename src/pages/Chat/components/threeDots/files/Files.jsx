import React from "react";
import classes from "./Files.module.scss";
import { BsChevronLeft } from "react-icons/bs";
function Files({ setCount, openDotsContent }) {
	return (
		<div className={classes.filesContainer}>
			<button
				className={classes.backBtn}
				onClick={() => {
					setCount(1);
					openDotsContent();
				}}>
				<BsChevronLeft />
				Back
			</button>
			<div className={classes.filesBlock}></div>
			<div className={classes.filesBlock}></div>
			<div className={classes.filesBlock}></div>
			<div className={classes.filesBlock}></div>
		</div>
	);
}

export default Files;
