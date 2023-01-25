import React from "react";
import classes from "./JobsDesc.module.scss";
import searchIcon from "../../../../assets/images/searchIcon.png";
import checkImg from "../../../../assets/images/checkImg.png";
import heartLiked from "../../../../assets/images/heartLiked.png";
import jobsData from "./jobsData";

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
			<div className={classes.jobsCard}>
                { 
                    jobsData.map((item, index) => (
                        <div className={classes.jobsCardItem}
                            key={index}
                            id={index}
                        >
                            <p>{ item.title}</p>
                        </div>
                    ))
                }
			</div>
		</div>
	);
}

export default JobsDesc;
