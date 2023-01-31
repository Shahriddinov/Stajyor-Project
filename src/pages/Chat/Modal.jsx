import React from "react";
import classes from "./Modal.module.scss";
import searchIcon from "../../assets/images/searchIcon.png";
import usersData from "./usersdata";
import userImg from "../../assets/images/chat_img/userImg.png";
import check from "../../assets/images/chat_img/check.png";
import checkImg from "../../assets/images/chat_img/checkImg.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";

function ChatModal({ setIsOpen }) {
	var userActiveTime = new Date().getHours() + ":" + new Date().getMinutes();
	return (
		<div className={classes.mainModal}>
			<div className={classes.darkBG} />
			<div className={classes.centered}>
				<div className={classes.modal}>
					<div className={classes.closeBtnCon}></div>
					<button className={classes.closeBtn} onClick={() => setIsOpen(false)}>
						<RiCloseLine />
					</button>
					<div className={classes.modalContent}>
						<div className={classes.modalChatUsers}>
							<div className={classes.modalChatUsersSearch}>
								<form action="sibmit">
									<input type="text" placeholder="Search..." />
									<button type="submit">
										<img src={searchIcon} alt="search Icon" />
									</button>
								</form>
							</div>
							<div className={classes.modalChatUsersList}>
								{usersData.map((user, index) => (
									<>
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
									</>
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
								<div className={classes.threeDots}>
									<BsThreeDotsVertical />
								</div>
							</div>
							<div className={classes.modalMessageAndWrite}>
								<div className={classes.modalChatContentMessages}></div>
                <div className={classes.modalChatContentWriteMessage}>
                  
                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatModal;
