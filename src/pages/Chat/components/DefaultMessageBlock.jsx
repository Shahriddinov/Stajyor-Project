import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import fileAttachImg from "../../../assets/images/chat_img/fileAttachImg.png";
import classes from "./DefaultMessageBlock.module.scss";
function DefaultMessageBlock() {
	const [count, setCount] = useState(1);
	
	let step1 = false,
		step2 = false,
		step3 = false,
		step4 = false,
		step5 = false,
		step6 = false,
		step7 = false,
		step8 = false;
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
		case 5:
			step5 = true;
			break;
		case 6:
			step6 = true;
			break;

		case 7:
			step7 = true;
			break;

		case 8:
			step8 = true;
			break;

		default:
			step1 = true;
	}

	return (
		<div className={classes.container}>
			<div className={classes.messageContainer}>Messages</div>
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
	);
}

export default DefaultMessageBlock;
