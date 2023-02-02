import React from "react";
import classes from "./Links.module.scss";
import { BsChevronLeft } from "react-icons/bs";

function Links({ setCount, openDotsContent }) {
	return (
		<div className={classes.linksContainer}>
			<button
				className={classes.backBtn}
				onClick={() => {
					setCount(1);
					openDotsContent();
				}}>
				<BsChevronLeft />
				Back
			</button>
			<>
				<div className={classes.linksBlock}></div>
				<div className={classes.linksBlock}></div>
				<div className={classes.linksBlock}></div>
				<div className={classes.linksBlock}></div>
			</>
		</div>
	);
}

export default Links;
