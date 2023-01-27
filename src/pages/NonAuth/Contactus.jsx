import React from "react";
import classes from "./Contactus.module.scss";
import logosInstagram from "../../assets/images/icons/logos_telegram.png";
import logosWhatsapp from "../../assets/images/icons/logos_whatsapp.png";

function Contactus(props) {
	return (
		<>
			<div className={classes.mainContacts}>
				<div className={classes.telegramContact}>
					<img src={logosInstagram} alt="" />
					<h1>Go To Telegram</h1>
				</div>
				<div className={classes.whatsappContact}>
					<img src={logosWhatsapp} alt="" />
					<h1>Go To Whatsapp</h1>
				</div>
			</div>
			<div className={classes.contactUs}>
				<h1>Contact us</h1>
				<p>Fill in the blank and we will contact you</p>
				<input type="text" placeholder="Name" />
				<input type="email" placeholder="E-mail" />
				<input type="text" placeholder="+998 99 999 99 99" min="1" max="13" />
				<input className={classes.textMessage} type="text" placeholder="Text message" />
				<button>Send</button>
			</div>
		</>
	);
}

export default Contactus;
