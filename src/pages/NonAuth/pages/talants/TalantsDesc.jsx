import React, { useState, useRef, useEffect } from "react";
import searchIcon from "../../../../assets/images/searchIcon.png";
import heartLiked from "../../../../assets/images/heartLiked.png";
import locImg from "../../../../assets/images/locImg.png";
import checkImg from "../../../../assets/images/checkImg.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import talantsData from "./talantsData";
import classes from "./TalantsDesc.module.scss";

import { BsHeart, BsHeartFill } from "react-icons/bs";

function TalantsDesc(props) {
	const [likes, setLikes] = useState([]);
	const [isActive, setIsActive] = useState([]);

	const [searchField, setSearchField] = useState("");
	const [talants, setTalants] = useState([]);
	const [filteredTalants, setFilterTalants] = useState(talants);

	useEffect(() => {
		setTalants(talantsData);
	}, []);

	useEffect(() => {
		const newFilteredTalants = talants.filter(talant => {
			return talant.name?.toLocaleLowerCase().includes(searchField);
		});
		setFilterTalants(newFilteredTalants);
	}, [talants, searchField]);

	const onSearchChange = event => {
		const searchFieldString = event.target.value?.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	const onClickLike = item => {
		let index = likes.findIndex(x => x === item.id);
		if (index >= 0) likes.splice(index, 1);
		else likes.push(item.id);
		setLikes([...likes]);
	};

	const onClickAccordion = item => {
		let index = isActive.findIndex(x => x === item.id);
		if (index >= 0) isActive.splice(index, 1);
		else isActive.push(item.id);
		setIsActive([...isActive]);
	};

	return (
		<div className={classes.talantsDesc}>
			<div className={classes.talantsSearch}>
				<form action="submit">
					<input type="search" placeholder="Title, keywords..." onChange={onSearchChange} />
					<button type="submit">
						<img src={searchIcon} alt="Search Icnon" />
					</button>
				</form>
			</div>
			<div className={classes.talantsCard}>
				{filteredTalants.map((item, index) => (
					<div className={classes.talantsDescItem} key={index} id={index}>
						<div className={classes.talantsDescItemHeader}>
							<div className={classes.imgName}>
								<img src={item.userImg} alt="UserLogo" />
								<div className={classes.namePro}>
									<h3>
										{item.name} <img src={checkImg} alt="CheckImg" />
									</h3>
									<span>{item.userPro}</span>
								</div>
							</div>
							<div className={classes.talantsLine}></div>
							<div className={classes.jobSuccess}>
								<p>{item.jobSuccess}</p>
								<div className={classes.blueLine}>
									<div className={classes.blueLine1}></div>
									<div className={classes.blueLine2}></div>
								</div>
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

							<div className={classes.liked} onClick={onClickLike.bind(this, item)}>
								{likes.findIndex(x => x === item.id) >= 0 ? (
									<BsHeartFill className={classes.bsheartfill} />
								) : (
									<BsHeart className={classes.bsheart} />
								)}
							</div>
						</div>
						<div className={classes.blockLine}></div>
						<div className={classes.description} onClick={onClickAccordion.bind(this, item)}>
							{isActive.findIndex(x => x === item.id) >= 0 ? (
								<>
									<p className={classes.descContent}>{item.description}</p>
									<span className={classes.faChevronDown}>
										<FaChevronUp />
									</span>
								</>
							) : (
								<>
									<p className={classes.descContent}>{item.description.substring(0, 100)}</p>
									<span className={classes.faChevronDown}>
										<FaChevronDown />
									</span>
								</>
							)}
						</div>
						<div className={classes.blockLine}></div>
						<div className={classes.skills}>
							<p>
								{item.skills.map((skillItem, index) => (
									<span key={index}>{skillItem}</span>
								))}
							</p>
							<div className={classes.selectLevel}>
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
								<span>{item.experience} years &nbsp;</span> <> </> of experience{" "}
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

// {<p className={classes.descContent}>{item.description.substring(0,100)}</p>}
// 							{isActive && <p className={classes.descContent}>{item.description}</p>}
// 							<span className={classes.faChevronDown} onClick={() => setIsActive(!isActive)}>
// 								{isActive ? <FaChevronUp /> : <FaChevronDown />}
// 							</span>