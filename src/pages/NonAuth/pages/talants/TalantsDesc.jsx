import React, { useState, useEffect } from "react";
import searchIcon from "../../../../assets/images/searchIcon.png";
import locImg from "../../../../assets/images/locImg.png";
import checkImg from "../../../../assets/images/checkImg.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import talantsDatas from "./talantsData";
import classes from "./TalantsDesc.module.scss";


import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";


function TalantsDesc(props) {
	const [likes, setLikes] = useState([]);
	const [isActive, setIsActive] = useState([]);

	const [searchField, setSearchField] = useState("");
	// const [talants, setTalants] = useState([]);
	const [filteredTalants, setFilterTalants] = useState(null);

	const {data, loading} = useSelector(state => state.talant);
	
	// const loading = useSelector(state => state.talant.loading);


	console.log(filteredTalants[0].freelancerImage)

	
	
	
	useEffect(() => {
		const newFilteredTalants = data?.filter(talant => {
			return talant.firstName?.toLocaleLowerCase().includes(searchField);
		});
		setFilterTalants(newFilteredTalants);
			// const newFilteredTalants = talants.filter(talant => {
			// 	return talant.name?.toLocaleLowerCase().includes(searchField);
			// });
			// setFilterTalants(newFilteredTalants);
	}, [searchField,loading]);

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
			<div className={classes.talantsCard}>
				<div className={classes.talantsSearch}>
					<div className={classes.talantsSearchForm}>
						<input type="search" placeholder="Title, keywords..." onChange={onSearchChange} />
						<button type="submit">
							<img src={searchIcon} alt="Search Icnon" />
						</button>
					</div>
				</div>
				<div className={classes.talantsDescCard}>
					{filteredTalants?.map((item, index) => (
						<div className={classes.talantsDescItem} key={index} id={index}>
							<div className={classes.talantsDescItemHeader}>
								<div className={classes.imgName}>
									<img src={item.freelancerImage} alt="UserLogo" />
									<div className={classes.namePro}>
										<h3>
											{item.firstName} <img src={checkImg} alt="CheckImg" />
										</h3>
										<span>{item.freelancerPosition.name}</span>
									</div>
								</div>
								<div className={classes.talantsLine}></div>
								<div className={classes.jobSuccess}>
									<p>"11%"</p>
									<div className={classes.blueLine}>
										<div className={classes.blueLine1}></div>
										<div className={classes.blueLine2}></div>
									</div>
									<span>Job Success</span>
								</div>
								<div className={classes.talantsLine}></div>
								<div className={classes.hourRate}>
									<p>1$</p>
									<span>Hourly</span>
								</div>
								<div className={classes.talantsLine}></div>
								<div className={classes.completedJobs}>
									<p>111</p>
									<span>Completed jobs</span>
								</div>
								<div className={classes.talantsLine}></div>
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
										<p className={classes.descContent}>{item.description.substring(0, 165)}</p>
										<span className={classes.faChevronDown}>
											<FaChevronDown />
										</span>
									</>
								)}
							</div>
							<div className={classes.blockLine}></div>
							<div className={classes.skills}>
								<p>
									{item.freelancerPosition.freelancerSkills.map((skillItem, index) => (
										<span key={index}>{skillItem.name}</span>
									))}
								</p>
								<div className={classes.selectLevel}>
									<label htmlFor="level">Level:</label>
									<select name="levels" id="levels">
										<option className={classes.options} value="junior">Junior</option>
										<option className={classes.options} value="middle">Middle</option>
										<option className={classes.options} value="senior">Senior</option>
									</select>
								</div>
							</div>
							<div className={classes.expLocation}>
								<p className={classes.exp}>
									<span>1 years &nbsp;</span> <> </> of experience{" "}
								</p>
								<p className={classes.location}>
									<img src={locImg} alt="LocationImg" />
									<span>{item.address.regionName} {item.address.countryName}</span>
								</p>
							</div>
						</div>
					)) }
				</div>
			</div>
		</div>
	);
}

export default TalantsDesc;
