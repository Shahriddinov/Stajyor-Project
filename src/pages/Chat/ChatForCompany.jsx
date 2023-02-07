import React, { useState } from "react";
import classes from "./ChatForCompany.module.scss";
import Modal from "./Modal";
function ChatForCompany(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button className={classes.primaryBtn} onClick={() => setIsOpen(true)}>
				Open Chat
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</>
	);
}

export default ChatForCompany;
