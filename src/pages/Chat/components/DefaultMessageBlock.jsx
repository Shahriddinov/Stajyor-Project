import React, { useState } from "react";
import { useRef } from "react";
import fileAttachImg from "../../../assets/images/chat_img/fileAttachImg.png";
import classes from "./DefaultMessageBlock.module.scss";
function DefaultMessageBlock(props) {
	const hiddenFileInput = useRef(null);
	const [value, setValue] = useState("");
	const inputReset = useRef(null);
	const [arr, setArr] = useState([]);

	const handleClickFileUpload = () => {
		hiddenFileInput.current.click();
	};
	const handleChange = event => {
		const fileUploaded = event.target.files[0];
		props.handleFile(fileUploaded);
	};

	const submitValue = e => {
		const userMessage = {
			message: value
		};
		setArr(prevArr => [...prevArr, userMessage]);
		inputReset.current.value = "";
	};
	return (
		<div className={classes.modalMessageAndWrite}>
			<div className={classes.messageContainer}>
				<div className={classes.message}>
					{arr.map(({ message, index }) => (
						<span key={index}>{message}</span>
					))}
				</div>
			</div>
			<div className={classes.writeAndSendMessage}>
				<form>
					<input
						className={classes.writeMessage}
						ref={inputReset}
						onChange={e => setValue(e.target.value)}
						required
						type="text"
						placeholder="Text message..."
					/>
					<button onClick={submitValue}>Send</button>
				</form>
				<div className={classes.fileAttach} onClick={handleClickFileUpload}>
					<input type="file" ref={hiddenFileInput} onChange={handleChange} />
					<img type="file" src={fileAttachImg} alt="File Attach Img" />
				</div>
			</div>
		</div>
	);
}

export default DefaultMessageBlock;
