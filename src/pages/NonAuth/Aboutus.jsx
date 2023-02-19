import React from "react";
import classes from "./Aboutus.module.scss";
import TelegramIcon from "../../assets/images/icons/TelegramIcon.svg";
import FacebookIcon from "../../assets/images/icons/FacebookIcon.svg";
import InstagramIcon from "../../assets/images/icons/InstagramIcon.svg";

function Aboutus(props) {
	return (
		<div className={classes.aboutus}>
			<div className={classes.about__container}>
				<div className={classes.mainAbout}>
					<div className={classes.videoBlock}>
						<video className={classes.Video} controls src="https://youtu.be/sUbR1uZ9G3A" type="video/mp4"></video>
					</div>
					<div className={classes.TextsMain}>
						<div className={classes.IconsMain}>
							<p>About us</p>
							<div className={classes.iconsBlock}>
								<img src={TelegramIcon} alt="Telegram Icon" />
								<img src={FacebookIcon} alt="Facebook Icon" />
								<img src={InstagramIcon} alt="Instagram Icon" />
							</div>
						</div>
						<p className={classes.text}>
							Habitant mi varius consectetur eget. Neque, arcu, egestas pellentesque vitae vitae ut. Est malesuada consectetur quam netus
							sollicitudin tellus. Amet, euismod suspendisse cras tortor cursus at habitasse malesuada. Ut ac lectus arcu arcu, ultricies netus.
							<br />
							<br />
							At maecenas metus pellentesque turpis egestas mattis neque. Tempor amet tortor phasellus hac quisque. Molestie sollicitudin lorem
							habitasse erat velit, donec elit habitant. habitasse erat velit, donec elit habitant.
							<br />
							<br />
							Eu hendrerit tellus at felis, mi, imperdiet. Porta risus odio tortor, etiam. Eu hendrerit tellus at felis, mi, imperdiet. Porta
							risus odio tortor, etiam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Aboutus;
