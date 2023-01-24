import React from "react";
import searchIcon from "../../../../assets/images/searchIcon.png";
import heartLiked from "../../../../assets/images/heartLiked.png";
import locImg from "../../../../assets/images/locImg.png";
import checkImg from "../../../../assets/images/checkImg.png";
import talantsData from "./talantsData";
import classes from "./TalantsDesc.module.scss";
function TalantsDesc(props) {
	return (
		<div className={classes.talantsDesc}>
			<div className={classes.talantsSearch}>
				<form action="submit">
					<input type="text" placeholder="Title, keywords..." />
					<button type="submit">
						<img src={searchIcon} alt="Search Icnon" />
					</button>
				</form>
			</div>
			<div className={classes.talantsBlock}>
				{talantsData.map((item, index) => (
					<div className={classes.talantsDescItem} key={index} id={index}>
						<div className={classes.talantsDescItemHeader}>
							<div className={classes.imgName}>
								<img src={item.userImg} alt="UserLogo" />
								<div className={classes.namePro}>
									<h3>
										{item.userName} <img src={checkImg} alt="CheckImg" />
									</h3>
									<span>{item.userPro}</span>
								</div>
							</div>
							<div className={classes.talantsLine}></div>
							<div className={classes.jobSuccess}>
								<p>{item.jobSuccess}</p>
								<span>Job Success</span>
							</div>
							<div className={classes.talantsLine}></div>
							<div className={classes.hourRate}>
								<p>{item.hourly}</p>
								<span>Hourly</span>
							</div>
							<div className={classes.talantsLine}></div>
							<div className={classes.completedJobs}>
								<p>{item.completedJobs}</p>
								<span>Completed jobs</span>
							</div>

							<div>
								<div className={classes.liked}>
									<img src={heartLiked} alt="Heart Liked" />
								</div>
							</div>
						</div>
						<div className={classes.blockLine}></div>
						<div className={classes.description}>
							<p>{item.description}</p>
						</div>
						<div className={classes.blockLine}></div>
						<div className={classes.skills}>
							<p>
								{item.skills.map((skillItem, index) => (
									<span key={index}>{skillItem}</span>
								))}
							</p>
							<div className={classes.selectLavel}>
								<label htmlFor="level">Level:</label>
								<select name="levels" id="levels">
									<option value="junior">Junior</option>
									<option value="middle">Middle</option>
									<option value="senior">Senior</option>
								</select>
							</div>
						</div>
						<div className={classes.expLocation}>
							<p className={classes.exp}>
								<span>{item.experience} years </span> <></>of experience{" "}
							</p>
							<p className={classes.location}>
								<img src={locImg} alt="LocationImg" />
								<span>{item.location}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TalantsDesc;
