import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./SocialMedia.module.scss";
import telgramIcon from "../../../assets/images/Resume/telegramIcon.png";
import whatsUppIcon from "../../../assets/images/Resume/whatsUppIcon.png";
import twitterIcon from "../../../assets/images/Resume/twitterIcon.png";
import facebookIcon from "../../../assets/images/Resume/faceBookIcon.png";
import instagramIcon from "../../../assets/images/Resume/instagramIcon.png";
import githubIcon from "../../../assets/images/Resume/githubIcon.png";
import cancel from "../../../assets/images/Resume/cancel.png";
import { useState } from "react";
import { contactUpload, temporary10 } from "../../../reduxToolkit/ResumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

function SocialMedia() {
	// const WebSite = useRef("");
	// const WatsApp = useRef("");
	// const Facebook = useRef("");
	// const Telegram = useRef("");
	// const GitHub = useRef("");
	// const Twitter = useRef("");
	// const Instagram = useRef("");
	const dispatch = useDispatch();
	const [website, setWebsite] = [];
	const [icons, setIcons] = useState([]);
	const [socials, setSocials] = useState([
		{ icon: whatsUppIcon, name: "WatsApp" },
		{ icon: facebookIcon, name: "Facebook" },
		{ icon: instagramIcon, name: "Instagram" },
		{ icon: telgramIcon, name: "Telegram" },
		{ icon: githubIcon, name: "GitHub" },
		{ icon: twitterIcon, name: "Twitter" }
	]);

	const addInputContact = (i, n) => {
		setIcons([...icons, { icon: i, name: n }]);
		let filteredSocial = [];
		for (let i = 0; i < socials.length; i++) {
			if (socials[i].name !== n) {
				filteredSocial.push(socials[i]);
			}
		}
		setSocials(filteredSocial);
	};

	const handleSubmitting = event => {
		event.preventDefault();
	};

	const removeIput = (name, icon) => {
		let filteredIcons = [];
		for (let i = 0; i < icons.length; i++) {
			if (icons[i].name !== name) {
				filteredIcons.push(icons[i]);
			}
		}
		setIcons(filteredIcons);
		setSocials([...socials, { icon: icon, name: name }]);
	};

	const handleChangeInput = event => {
		// for (let i = 0; i < icons.length; i++) {
		// 	if (icons[i].name !== test) {
		// 		filteredIcons.push(icons[i]);
		// 	}
		// }
		// setMessage(event.target.value);
	};

	const handleSubmit = event => {
		dispatch(temporary10());
		// let formdatas = new FormData();
		// for (let i = 0; i < icons.length; i++) {
		// 	formdatas.append(socials[i].name);
		// }
		// formdatas.append("WebSite", userLang[i]);
		// formdatas.append("Level", userLevel[i]);
		// dispatch(languageUpload(formdatas));
		event.preventDefault();
	};

	return (
		<div className={classes.socialMedia}>
			<h2>Contacts</h2>
			<form action="submit" className={classes.socialForm} onSubmit={handleSubmit}>
				<input type="text" placeholder="Provide a link to your website " />
				{icons &&
					icons.map(item => (
						<div key={item.name} className={classes.socialInput}>
							<div className={classes.socialInputIn}>
								<input type="url" placeholder={`Provide a link to your ${item.name} account`} onChange={handleChangeInput} />
							</div>
							<img className={classes.insideIconImage} src={item.icon} alt="Whats app icon" />
							<button
								className={classes.cancelButton}
								onClick={event => {
									removeIput(item.name, item.icon);
									handleSubmitting(event);
								}}>
								<img src={cancel} alt="cancel icon" />
							</button>
						</div>
					))}
				<p>Choose in which of these social networks you have an account</p>
				<div className={classes.socialContainers}>
					{socials.map(item => (
						<div key={item.name} style={{'cursor':'pointer'}} className={classes.socialCard} onClick={() => addInputContact(item.icon, item.name)}>
							<img  style={{'width':'40px'}} src={item.icon} alt={item.name} />
							<h4>{item.name}</h4>
						</div>
					))}
				</div>
				<div style={{'display':'flex', 'width':'100%', 'align-items':'center', 'justify-content':'flex-end', 'gap':'20px'}}>
					<button className={classes.backButton}>Back</button>
				<button className={classes.nextButton}>Next</button>
				</div>
			</form>
		</div>
	);
}

export default SocialMedia;
