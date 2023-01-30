import React, { useState } from "react";
import classes from "./Chat.module.scss";
import Modal from "./Modal";
function Chat(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<main>
			<button className={classes.primaryBtn} onClick={() => setIsOpen(true)}>
				Open Chat
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</main>
	);
}

export default Chat;
