import React, { useState, useEffect } from "react";
import classes from "./Modal.module.scss";
import searchIcon from "../../assets/images/searchIcon.png";
import usersData from "./usersdata";
import userImg from "../../assets/images/chat_img/userImg.png";
import check from "../../assets/images/chat_img/check.png";
import checkImg from "../../assets/images/chat_img/checkImg.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import DefaultMessageBlock from "./components/DefaultMessageBlock";
import ThreeDotsContent from "./components/threeDots/ThreeDotsContent";
import Media from "./components/threeDots/media/Media";
import Files from "./components/threeDots/files/Files";
import Links from "./components/threeDots/links/Links";

function ChatModal({ setIsOpen }) {
	var userActiveTime = new Date().getHours() + ":" + new Date().getMinutes();

	const [searchField, setSearchField] = useState("");
	const [talants, setTalants] = useState([]);
	const [filteredTalants, setFilterTalants] = useState(talants);
	const [threeDots, setOpenThreeDots] = useState(false);
	useEffect(() => {
		setTalants(usersData);
	}, []);

	useEffect(() => {
		const newFilteredTalants = talants.filter(talant => {
			return talant.userName?.toLocaleLowerCase().includes(searchField);
		});
		setFilterTalants(newFilteredTalants);
	}, [talants, searchField]);

	const onSearchChange = event => {
		const searchFieldString = event.target.value?.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	function openDotsContent(event) {
		setOpenThreeDots(current => !current);
	}

	const [count, setCount] = useState(1);

	let step1 = false,
		step2 = false,
		step3 = false,
		step4 = false;

	switch (count) {
		case 1:
			step1 = true;
			break;
		case 2:
			step2 = true;
			break;
		case 3:
			step3 = true;
			break;
		case 4:
			step4 = true;
			break;

		default:
			step1 = true;
	}

	return (
		<div className={classes.mainModal}>
			<div className={classes.darkBG} />
			<div className={classes.centered}>
				<div className={classes.modal}>
					<div className={classes.closeBtnCon}>
						<button className={classes.closeBtn} onClick={() => setIsOpen(false)}>
							<RiCloseLine />
						</button>
					</div>

					<div className={classes.modalContent}>
						<div className={classes.modalChatUsers}>
							<div className={classes.modalChatUsersSearch}>
								<form action="submit">
									<input type="text" placeholder="Search..." required onChange={onSearchChange} />
									<button type="submit">
										<img src={searchIcon} alt="search Icon" />
									</button>
								</form>
							</div>
							<div className={classes.modalChatUsersList}>
								{filteredTalants.map((user, index) => (
									<div className={classes.userBlock} key={index} id={index}>
										<img src={user.userImage} alt="User logo" />
										<div className={classes.userNameDescription}>
											<span className={classes.userName}>
												{user.userName} <img src={checkImg} alt="Check" />
											</span>
											<span className={classes.userDescription}>{user.description}</span>
										</div>
										<div className={classes.userActiveTime}>
											<span className={classes.userTime}>{userActiveTime}</span>
											<span>
												<img src={check} alt="Check" />
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className={classes.modalChatContent}>
							<div className={classes.modalChatContentHeader}>
								<div className={classes.userInfo}>
									<img src={userImg} alt="User Logo" className={classes.userLogo} />
									<div className={classes.userNameAndStatus}>
										<span className={classes.userName}>
											<span>Umid Abdusattorov </span>
											<img src={checkImg} alt="Check Img" />
										</span>
										<span className={classes.userStatus}>online</span>
									</div>
								</div>
								<div className={classes.threeDots} onClick={() => openDotsContent()}>
									<BsThreeDotsVertical />
								</div>
								{threeDots ? <ThreeDotsContent step2={step2} step3={step3} step4={step4} setCount={setCount} /> : threeDots && null}
							</div>
							<div className={classes.modalMessageContainer}>
								{step1 && <DefaultMessageBlock />}
								{step2 && <Media setCount={setCount} openDotsContent={openDotsContent} />}
								{step3 && <Files setCount={setCount} openDotsContent={openDotsContent} />}
								{step4 && <Links setCount={setCount} openDotsContent={openDotsContent} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatModal;
