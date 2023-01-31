import React, { useState } from "react";
import classes from "./ChatForCompany.module.scss";
import ThreeDotsContent from "./components/threeDots/ThreeDotsContent";
import Modal from "./Modal";
function ChatForCompany(props) {
	const [isOpen, setIsOpen] = useState(true);
	const [dotsContent, setDotsContent] = useState(false);
	return (
		<>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
			{dotsContent && <ThreeDotsContent setDotsContent={setDotsContent} />}
		</>
	);
}

export default ChatForCompany;
