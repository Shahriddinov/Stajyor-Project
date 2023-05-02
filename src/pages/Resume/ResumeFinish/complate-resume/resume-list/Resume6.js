/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import phone from "../img/phone.svg";
import loc from "../img/location.svg";
import letter from "../img/letter.svg";
import {resumeTriple} from '../../../../../assets/images/index'

const Resume6 = props => {
	const {
		phoneNumber,
		bio,
		experiences,
		email,
		freelancerContact,
		defaultuserImage,
		educations,
		freelancerPosition,
<<<<<<< HEAD
		freelancerHobbies,
=======
>>>>>>> origin/Abdurashid
		firstName,
		lastName,
		address,
		userLanguages
	} = props;
	return (
		<>
			<div className="ComplateResume">
				<div className="resume2_6 resume-watch">
					<div className="resume2_6-top">
						<div className="resume2_6-top-left">
							<div className="resume2_6-top-left-name">
								<p className="resume2_6-top-left-user-name">
<<<<<<< HEAD
=======
									Lorem ipsum dolor
>>>>>>> origin/Abdurashid
									{firstName} {lastName}
								</p>
								<p className="resume2_6-top-left-user-job">{freelancerPosition?.name}</p>
							</div>

							<div className="resume2_6-top-left-user-contact">
<<<<<<< HEAD
								<p className={'subTitle'}>
									<img src={phone} alt={phone}/>
									{phoneNumber}
								</p>
								<p className={'subTitle'}>
									<img src={letter} alt={email}/>
									{email}
								</p>
								<p className={'subTitle'}>
									<img src={loc} alt={loc}/>
									{address?.countryName} {address?.regionName} {address?.home}
								</p>
=======
								<p>
									{" "}
									<img src={phone} />
									{phoneNumber}
								</p>
								<p>
									{" "}
									<img src={letter} />
									{email}
								</p>
								<p>
									{" "}
									<img src={loc} />
									{address?.countryName} {address?.regionName} {address?.home}
								</p>
								<p>
									{" "}
									<img src={loc} />
									{freelancerContact?.webSite}
								</p>
>>>>>>> origin/Abdurashid
							</div>
						</div>

						<div className="resume2_6-top-right">
							<img className="resume2_6-top-right-img" src={defaultuserImage} />
						</div>
					</div>

					<div className="resume2_6-bottom">
						<div className="resume2_6-bottom-left">
<<<<<<< HEAD
							<p className="resume2_6-bottom-title">about me</p>
							<div className="resume2_6-bottom-left-text">
								<span className={'subTitle'}>{bio}</span>
=======
							<p className="resume2_6-bottom-title">profile</p>
							<div className="resume2_6-bottom-left-text">
								<span>{bio}</span>
							</div>

							<div className="resume2_6-bottom-title">education</div>
							<div className="resume2_6-bottom-left-text">
								{educations?.map((item, i) => {
									return (
										<React.Fragment key={i}>
											<div>
												<b>{item?.name}</b>{" "}
												<span>
													{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
												</span>
											</div>
											<p>{item?.degree}</p>
										</React.Fragment>
									);
								})}
>>>>>>> origin/Abdurashid
							</div>

							<div className="resume2_6-bottom-title">language</div>
							<div className="resume2_6-bottom-left-text">
								<div className="language-lvl">
									{userLanguages?.map((item, i) => (
										<React.Fragment key={i + 1}>
<<<<<<< HEAD
											<p className={'subTitleUp'}>{item?.language}</p>
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
=======
											<span>{item?.language}</span>
											<p className="resume2_6-cirlces" />
											<p className="resume2_6-cirlces" />
											<p className="resume2_6-cirlces" />
											<p className="resume2_6-cirlces" />
											<p className="resume2_6-cirlces" />
											<p className="resume2_6-cirlces" />
											<p className="resume2_6-cirlces" />
>>>>>>> origin/Abdurashid
										</React.Fragment>
									))}
								</div>
							</div>
<<<<<<< HEAD
=======
						</div>

						<div className="resume2_6-bottom-right">
							<div className="resume2_6-bottom-title">work experience</div>
							{experiences?.map((item, i) => {
								return (
									<div className="resume2_6-bottom-left-text" key={i + 1}>
										<div>
											<b>{item?.job}</b>
											<b>
												{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
											</b>
											<p>{item?.companyName}</p>
										</div>
										<div>{item?.description}</div>
									</div>
								);
							})}
>>>>>>> origin/Abdurashid

							<div className="resume2_6-bottom-title">skills</div>
							<div className="resume2_6-bottom-left-text">
								{freelancerPosition?.map((item, i) => {
									return (
										<div key={i + 1}>
<<<<<<< HEAD
											<p className={'subTitleUp'}>{item.name}</p>
=======
											<b>{item.name}</b>
>>>>>>> origin/Abdurashid
										</div>
									);
								})}
							</div>
<<<<<<< HEAD

							<div className="resume2_6-bottom-title">hobbies</div>
							<div className="resume2_6-bottom-left-text">
								{freelancerHobbies?.map((item, i) => {
									return (
										<div key={i + 1}>
											<p className={'subTitleUp'}>{item.name}</p>
										</div>
									);
								})}
								<div></div>
							</div>

						</div>

						<div className="resume2_6-bottom-right">

							<div className="resume2_6-bottom-title">education</div>
							<div className="resume2_6-bottom-left-text">
								{educations?.map((item, i) => {
								return (
								<div className={'resume-6'}>
									<div className={'resume-6__about'}>
										<div className={'about__img'}>
											<img src={resumeTriple} alt={'triple'}/>
										</div>
										<div>
											<p className={'about__study subTitleUp'}>{item.degree}</p>
											<p className={'about__name subTitleUp'}>{item.degree}</p>
										</div>
									</div>
									<p className={'subTitle'}>{item.bio}</p>
								</div>
									);
								})}
							</div>

							<div className="resume2_6-bottom-title">experience</div>
							<div className="resume2_6-bottom-left-text">
							{experiences?.map((item, i) => {
								return (
									<div className={'resume-6'}>
										<div className={'resume-6__about'}>
											<div className={'about__img'}>
												<img src={resumeTriple} alt={'triple'}/>
											</div>
											<div>
												<p className={'about__study subTitleUp'}>{item.degree}</p>
												<p className={'about__name subTitleUp'}>{item.degree}</p>
											</div>
										</div>
										<p className={'subTitle'}>{bio}</p>
									</div>
								);
							})}


						</div>
							<div className="resume2_6-bottom-title">contacts</div>
							<div className="resume2_6-bottom-left-text">
								{experiences?.map((item, i) => {
									return (
										<span className="subTitle resume2_6-bottom-left-text" key={i + 1}>{item.name}</span>
									);
								})}
							</div>
=======
>>>>>>> origin/Abdurashid
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume6;
