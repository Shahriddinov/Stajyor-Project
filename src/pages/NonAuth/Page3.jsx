import React from "react";
import classes from "./Page3.module.scss";
import sloy1 from "../../assets/images/sloy2.png";
import { Link } from "react-router-dom";

function Page3(props) {
	return (
		<div className={classes.page3__container}>
			<div className={classes.container__sloy1}>
				<img src={sloy1} alt="Page3 Sloy1" />
			</div>
			<div className={classes.page3__text__btn}>
				<h3 className={classes.title}>Search talants!</h3>
				<p className={classes.subtitle}> 
				Ipsum harum assumenda in eum vel eveniet
				<br/> 
				numquam, cumque vero vitae enim cupiditate 
				<br/>
				deserunt eligendi officia modi consectetur.
				</p>
				<Link to="/auth">
					<button className={classes.post}>Post</button>
				</Link>
			</div>
		</div>
	);
}

export default Page3;
