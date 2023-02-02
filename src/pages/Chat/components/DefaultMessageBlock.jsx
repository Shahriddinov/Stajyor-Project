import React, { useState } from "react";
import fileAttachImg from "../../../assets/images/chat_img/fileAttachImg.png";
import classes from "./DefaultMessageBlock.module.scss";
function DefaultMessageBlock() {
	return (
		<div className={classes.modalMessageAndWrite}>
			<div className={classes.container}>
				<div className={classes.messageContainer}>
					<div className={classes.message}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis hic eveniet tenetur atque quo dignissimos officiis cumque neque, alias
						ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias iste tempore ipsum saepe tempora ad. Ut tenetur
						possimus voluptatem deserunt consequuntur blanditiis adipisci corporis. Dolor neque officia optio. Aliquid?
					</div>
				</div>
				<div className={classes.modalChatUsersSearch}>
					<div className={classes.writeAndSendMessage}>
						<form>
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
