import React, { useState } from "react";
import classes from "./ChatForCompany.module.scss";

import Modal from "./Modal";
function ChatForCompany(props) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		
		</>
	);
}

export default ChatForCompany;
