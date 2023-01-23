import React from "react";
import { ReactComponent as SearchIconSvg } from "../../../../assets/images/SearchIcon.svg";
import classes from "./TalantsDesc.module.scss";
function TalantsDesc(props) {
	return (
		<div className={classes.talantsDesc}>
			<div className={classes.talantsSearch}>
				<input className={classes.talantsSearchInput} type="text" placeholder="Title, keywords..." />
				<button className={classes.talantsSearchBtn}>
					<SearchIconSvg />
				</button>
			</div>
			<div className={classes.talantsBlock}>
				<div className={classes.jobDesc}>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae animi harum unde mollitia sunt quibusdam minima veniam asperiores
						omnis quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsa! Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Velit, quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga accusamus quae asperiores cupiditate rem labore
						delectus eveniet modi. Libero?
					</p>
				</div>
			</div>
			<div className={classes.talantsBlock}>
				<div className={classes.jobDesc}></div>
			</div>
		</div>
	);
}

export default TalantsDesc;
