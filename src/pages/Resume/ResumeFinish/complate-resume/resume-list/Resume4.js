import React from "react";
<<<<<<< HEAD

const Resume4 = props => {
	const { phoneNumber, bio, experiences, email, freelancerContact, defaultuserImage, educations, freelancerPosition, firstName, lastName, address } = props;
	return (
		<>
			<div className="ComplateResume">
				<div className="resume4 resume-watch">
					<div className="resume4-left">
						<div className="resume4-left-user-pic">
							<img src={defaultuserImage} alt={firstName} />
						</div>

							<div className="resume4-left-info">
							<div className="resume4_title-l r4lt">education</div>
							{educations?.map((item, i) => {
								return (
									<div className="resume4-left-info-class" key={i + 1}>
										<b>{item?.degree}</b>
										<br />
										<span>{item?.name}</span>
										<br />
										<span>
											{item.dateFrom?.substring(0, 4)} - {item.dateTo?.substring(0, 4)}
										</span>
									</div>
								);
							})}
						</div>

						<div className="resume4-left-info">
							<div className="resume4_title-l r4lt">reference</div>
							{experiences?.map((item, i) => {
								return (
									<div className="resume4-left-info-class" key={i + 1}>
										<b>{item?.job}</b>
										<br />
										<span>{item?.companyName}</span>
										<br />
										<span>
											{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
										</span>
									</div>
								);
							})}
						</div>

						<div className="resume4-left-contact">
							<div className="resume4-left-contact-title">phone</div>
							<p className="resume4-left-contact-text">{phoneNumber}</p>

							<div className="resume4-left-contact-title">email</div>
							<p className="resume4-left-contact-text">{email}</p>

=======
import whatsUpIcon from "../img/whatsap.svg";
import instagramIcon from "../img/instagram.svg";
const Resume4 = props => {
	const { phoneNumber, bio, experiences, email, freelancerContact, defaultuserImage, educations, freelancerPosition, firstName, lastName, address } = props;
	return (
		<>
			<div className="ComplateResume">
				<div className="resume4 resume-watch">
					<div className="resume4-left">
						<div className="resume4-left-user-pic">
							<img src={defaultuserImage} alt={firstName} />
						</div>
						<div className="resume4-left-contact">
							<div className="resume4-left-contact-title">phone</div>
							<p className="resume4-left-contact-text">{phoneNumber}</p>

							<div className="resume4-left-contact-title">email</div>
							<p className="resume4-left-contact-text">{email}</p>

>>>>>>> origin/Abdurashid
							<div className="resume4-left-contact-title">website</div>
							<p className="resume4-left-contact-text">{freelancerContact?.webSite}</p>

							<div className="resume4-left-contact-title">adsress</div>
							<p className="resume4-left-contact-text">
								{address?.countryName} {address?.regionName} {address?.home}
								{address.street}
							</p>
						</div>
<<<<<<< HEAD
=======
						<div className="resume4-left-info">
							<div className="resume4_title-l r4lt">Skills</div>
							<div className="resume4-left-info-class">
								{freelancerPosition?.map((item, i) => {
									return (
										<div className="resume4-left-info-class-item" key={i + 1}>
											<p className="skills-text">{item.name}</p>
											<p className="skills-level" />
										</div>
									);
								})}
								<div className="resume4-left-info-class-item">
									<p className="text">React</p>
								</div>
								<div className="resume4-left-info-class-item">
									<p className="text">Node JS</p>
								</div>
								<div className="resume4-left-info-class-item">
									<p className="text">Redux</p>
								</div>
							</div>
						</div>

						<div className="resume4-left-info">
							<div className="resume4_title-l r4lt">Languages</div>
							<div className="resume4-left-info-class">
								<div className="resume4-left-info-class-item">
									<p className="text">English - level</p>
								</div>
								<div className="resume4-left-info-class-item">
									<p className="text">English - level</p>
								</div>
								<div className="resume4-left-info-class-item">
									<p className="text">English - level</p>
								</div>
							</div>
						</div>

						<div className="resume4-left-info">
							<div className="resume4_title-l r4lt">Hobbies</div>
							<div className="resume4-left-info-class">
								<div className="resume4-left-info-class-item">
									<p className="text">Football </p>
								</div>
								<div className="resume4-left-info-class-item">
									<p className="text">Football </p>
								</div>
								<div className="resume4-left-info-class-item">
									<p className="text">Football </p>
								</div>
							</div>
						</div>

						<div className="resume4-left-info">
							<div className="resume4_title-l r4lt ">Contact</div>
							<div className="resume4-left-info-class">
								<div className="resume4-left-info-class-item contact-info">
									<img src={whatsUpIcon} alt="" />
									<p className="text">Abdurashid.7008 </p>
								</div>
								<div className="resume4-left-info-class-item contact-info">
									<img src={whatsUpIcon} alt="" />
									<p className="text">Abdurashid.7008 </p>
								</div>
								<div className="resume4-left-info-class-item contact-info">
									<img src={whatsUpIcon} alt="" />
									<p className="text">Abdurashid.7008 </p>
								</div>
							</div>
						</div>
>>>>>>> origin/Abdurashid
					</div>

					<div className="resume4-right">
						<div className="resume4-right-name">
							<div className="resume4-right-user-name">
								{" "}
								{firstName} {lastName}
<<<<<<< HEAD
=======
								Abdurashid Agzamov
>>>>>>> origin/Abdurashid
							</div>
							<div className="resume4-right-user-title">PROFFESIONAL TITLE</div>
						</div>

						<div className="resume4-all-about-user">
							<div className="resume4-right-user-about">
								<h3 className="resume4_title-l r4rt">about me</h3>

<<<<<<< HEAD
								<p>{bio}</p>
							</div>

							<div className="resume4-right-user-works">
								<h3 className="resume4_title-l r4rt">work experience</h3>
								{experiences?.map((item, i) => {
=======
								{/* <p>{bio}</p> */}
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam voluptatum repellendus ratione laborum non, cupiditate a corrupti
									voluptas sapiente sunt repudiandae nemo quasi quaerat magni alias iste fuga quisquam?
								</p>
							</div>

							<div className="resume4-right-user-works">
								<h3 className="resume4_title-l r4rt">Education</h3>

								<div className="resume4-right-user-job">
									<div className="user-experience-year">2005 - 2012</div>
									<div className="user-experience-text">
										<h3>Frontend</h3>
										<span>Bakalavr</span>
										<p>Toshkent shahar, Yangiyol tuman Mustaqilik MFY 9 uy</p>
									</div>
								</div>
							</div>

							<div className="resume4-right-user-works">
								<h3 className="resume4_title-l r4rt">Experience</h3>
								{/* {experiences?.map((item, i) => {
>>>>>>> origin/Abdurashid
									return (
										<div className="resume4-right-user-job" key={i + 1}>
											<div className="user-experience-year">
												{item?.dateFrom} - {item?.dateTo}
											</div>
											<div>
<<<<<<< HEAD
												<b>{item?.job}</b>
												<br />
=======
												<h3>{item?.job}</h3>
>>>>>>> origin/Abdurashid
												<span>{item?.companyName}</span>
												<p>{item?.description}</p>
											</div>
										</div>
									);
<<<<<<< HEAD
								})}
							</div>

							<h3 className="resume4_title-l r4rt">software skill</h3>
							<div className="resume4-right-user-skill">
								<ul className="resume4-skill-cl">
									{freelancerPosition?.map((item, i) => {
										return (
											<li key={i + 1}>
												<span>{item}</span>
												<p className="resume4-skill-lvl" />
											</li>
										);
									})}
								</ul>
=======
								})} */}
								<div className="resume4-right-user-job">
									<div className="user-experience-year">2012 - 2022</div>
									<div className="user-experience-text">
										<h3>Frontend</h3>
										<span>Google</span>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed assumenda perferendis maxime ducimus doloribus quia doloremque
											voluptatum incidunt neque.
										</p>
									</div>
								</div>
>>>>>>> origin/Abdurashid
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume4;
