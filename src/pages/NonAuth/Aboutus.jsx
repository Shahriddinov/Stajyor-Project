import React from "react";
import classes from "./Aboutus.module.scss";
import TelegramIcon from "../../assets/images/icons/TelegramIcon.svg";
import FacebookIcon from "../../assets/images/icons/FacebookIcon.svg";
import InstagramIcon from "../../assets/images/icons/InstagramIcon.svg";

function Aboutus(props) {
	return (
		<div className={classes.aboutus}>
			<div className={classes.about__container}>
				<div className={classes.videoBlock}>
					<video className={classes.Video} controls src="https://youtu.be/sUbR1uZ9G3A" type="video/mp4"></video>
				</div>
				<div className={classes.TextsMain}>
					<div className={classes.IconsMain}>
						<p>About us</p>
						<div className={classes.iconsBlock}>
							<img src={TelegramIcon} alt="Telegram " />
							<img src={FacebookIcon} alt="Facebook " />
							<img src={InstagramIcon} alt="Instagram " />
						</div>
					</div>
					<p className={classes.text}>
						Habitant mi varius consectetur eget. Neque, arcu, egestas pellentesque vitae vitae ut. Est malesuada consectetur quam netus sollicitudin
						tellus. Amet, euismod suspendisse cras tortor cursus at habitasse malesuada. Ut ac lectus arcu arcu, ultricies netus.
						<br />
						<br />
						At maecenas metus pellentesque turpis egestas mattis neque. Tempor amet tortor phasellus hac quisque. Molestie sollicitudin lorem
						habitasse erat velit, donec elit habitant. habitasse erat velit, donec elit habitant.
						<br />
						<br />
						Eu hendrerit tellus at felis, mi, imperdiet. Porta risus odio tortor, etiam. Eu hendrerit tellus at felis, mi, imperdiet. Porta risus
						odio tortor, etiam.
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nemo culpa dolorum fugiat consequuntur id quibusdam minima, dolorem asperiores maiores aspernatur consequatur nulla quia accusantium! Ut unde ad minus obcaecati saepe dolore hic, consectetur adipisci tempore? Odit explicabo recusandae est repudiandae tenetur vero mollitia aspernatur nostrum vel error. Hic amet nulla ratione exercitationem laborum excepturi ut, saepe, vero consequuntur tempore quis, non eveniet. Nobis id provident nam placeat quidem quibusdam autem tempore ex asperiores dolore sequi odit, quo nulla maxime voluptate quaerat nostrum deserunt. In iure cum laborum, molestias nihil excepturi architecto sint est fugiat dicta iste veritatis officia numquam?
					</p>
				</div>
			</div>
		</div>
	);
}

export default Aboutus;
