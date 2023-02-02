import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import fileAttachImg from "../../../assets/images/chat_img/fileAttachImg.png";
import classes from "./DefaultMessageBlock.module.scss";
function DefaultMessageBlock() {
	return (
		<div className={classes.modalMessageAndWrite}>
			<div className={classes.container}>
				<div className={classes.messageContainer}></div>
				<div className={classes.modalChatUsersSearch}>
					<div className={classes.writeAndSendMessage}>
						<form action="submit">
							<input type="text" placeholder="Text message..." required />
							<button>Send</button>
						</form>
						<div className={classes.fileAttach}>
							<img src={fileAttachImg} alt="File Attach Img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DefaultMessageBlock;
