import React from "react";
import business4 from "../../assets/images/page4.png";
import classes from "./Page4.module.scss";
import telegram from "../../assets/images/icons/icon1.png";
import facebook from "../../assets/images/icons/icon2.png";
import instagram from "../../assets/images/icons/icon3.png";

function Page4() {
	return (
		<div className={classes.page4Box}>
			<div>
				<img src={business4} alt="business environment" />
				<div className={classes.icons}>
					<img src={telegram} alt="telegram icon" />
					<img src={facebook} alt="facebook icon" />
					<img src={instagram} alt="instagram icon" />
				</div>
			</div>
			<div>
				<h2>THOUSANDS!!!</h2>
				<p>
					Thousands of <strong>workers</strong> and <strong>employer</strong> employers <br /> are already waiting for you!.
				</p>
				<button type="submit">Join our team right now</button>
			</div>
		</div>
	);
}

export default Page4;
