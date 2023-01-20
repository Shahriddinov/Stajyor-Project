import React from "react";
import business2 from "../../assets/images/business_page2.png";
import classes from "./Page2.module.scss";
import searchIcon from "../../assets/images/searchIcon.png";

function Page2() {
	return (
		<div className={classes.page2Box}>
			<img src={business2} alt="business environment" />
			<div>
				<h2>Search talants!</h2>
				<p>Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur.</p>
				<form action="sibmit">
					<input type="text" placeholder="Job title, keywords..." />
					<button type="submit">
						<img src={searchIcon} alt="search Icon" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default Page2;
