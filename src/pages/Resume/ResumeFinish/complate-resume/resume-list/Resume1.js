import React from "react";
import { useSelector } from "react-redux";
import {resumeGeo,resumePhone,resumePochta} from '../../../../../assets/images/index'

const Resume1 = props => {
	const {
		firstName,
		phoneNumber,
		bio,
		experiences,
		email,
		freelancerHobbies,
		defaultuserImage,
		educations,
		freelancerPosition,
		lastName,
		address,
		userLanguages,
		birthday,
	} = props;
	return (
		<>
			<div className="ComplateResume">
				<div style={{borderRadius: '20px'}} className="resume2_1 pad-all resume-watch">
					<div className="resume2_1-head">
						<div className={'resume2_1-head__left'}>
								<img src={defaultuserImage} alt={firstName} />
						</div>
						<div className={'resume2_1-head__right'}>
							<p className="resume2_1-head-name">
								{/*{firstName} {lastName}*/}
								John Smith
							</p>
							<p className={'resume2_1-head-job'}>
								{/*{job}*/}
								Marketing Specialist
							</p>

<<<<<<< HEAD
							<div className="resume2_1-left-contacts__texts">
								{/*<div><img src={resumePhone}/><p>{phoneNumber}</p></div>*/}
								<div><img src={resumePhone}/><p>+99890 000 00 00</p></div>
=======
							{/* {lastName} */}
						</p>
						<p className="resume2_1-head-job">Frontend developer</p>
					</div>
					<div className="resume2_1-body">
						<div className="resume2_1-left">
							<div className="resume2_1-left-img">
								<img src={defaultuserImage}alt={firstName} />
								<span>personal info</span>
>>>>>>> origin/Abdurashid
							</div>

							<div className="resume2_1-left-contacts__texts">
								{/*<div><img src={resumePochta}/><p>{email}</p></div>*/}
								<div><img src={resumePochta}/><p>temurzhkibaev@gamil.com</p></div>
							</div>

							<div className="resume2_1-left-contacts__texts">
								<div><img src={resumeGeo}/><p>olmazor city</p></div>
								{/*<div><img src={resumeGeo}/><p>{address}</p></div>*/}
							</div>
						</div>
					</div>

<<<<<<< HEAD
					<div className="resume2_1-body">
						<div className="resume2_1-left bor-r">
							<div className="resume2_1-left__block resume2_1-left-contacts__texts">
								<p className="resume2_1-left-contacts__text">skills</p>
								{freelancerPosition?.map((item, i) => {
									return <span key={i+1}>{item}</span>;
								})}
								<span>PhotoShop</span>
							</div>
							<div className="resume2_1-left-contacts ">
								<div className="resume2_1-left-contacts__texts resume2_1-left__block">
=======
								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">skills</p>
									{freelancerPosition?.map((item, i) => {
										return <span key={i+1}>{item}</span>;
									})}
								</div>

								<div className="resume2_1-left-contacts__texts">
>>>>>>> origin/Abdurashid
									<p className="resume2_1-left-contacts__text">languages</p>
									{userLanguages?.map((item, i) => {
										return (
											<span key={i}>
												{item?.language} - {item?.level}
											</span>
										);
									})}
									<span>English - elementary</span>
								</div>

								<div className="resume2_1-left-contacts__texts resume2_1-left__block">
									<p className="resume2_1-left-contacts__text">Hobbies</p>
									{freelancerHobbies?.map((item, i) => {
<<<<<<< HEAD
										return<li key={i+1}>{item}</li>;
=======
										return<span key={i+1}>{item}</span>;
>>>>>>> origin/Abdurashid
									})}
									<li>Fooball</li>
								</div>

<<<<<<< HEAD
								<div className="resume2_1-left-contacts__texts resume2_1-left__block">
									<p className="resume2_1-left-contacts__text">Contacts</p>
									{freelancerHobbies?.map((item, i) => {
										return<span key={i+1}>{item}</span>;
=======
								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">Work experience</p>
									{experiences?.map((item, i) => {
										return <span key={i + 1}>{item?.companyName}</span>;
									})}
								</div>

								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">Education</p>
									{educations?.map((item, i) => {
										return <span key={i}>{item?.name}</span>;
>>>>>>> origin/Abdurashid
									})}
									<span>Murphy_design</span>
								</div>
							</div>
						</div>

						<div className="resume2_1__body">
							<div className="resume2_1__body mb-b">
								<p className="resume2_1__body__title">About me</p>
								{experiences?.map((item, i) => {
									return <span className={'resume2_1__body__bio'} key={i + 1}>{item?.bio}</span>;
								})}
								<span className={'resume2_1__body__bio'}>lorem5</span>
							</div>

<<<<<<< HEAD
							<div className="resume2_1__body mb-b">
								<p className="resume2_1__body__title">Education</p>
								{educations?.map((item, i) => {
									return<div key={i} className={'resume2_1__body__block'}>
										<div className={'resume2_1__body__block__left'}>
											<h5>{item?.year}</h5>
											<p>{item?.name}</p>
										</div>
										<div className={'resume2_1__body__block__right'}>
											<h5>{item?.degree}</h5>
											<p>{item?.description}</p>
										</div>
									</div>
								})}
								<div className={'resume2_1__body__block'}>
									<div className={'resume2_1__body__block__left'}>
										<h5>2012 - 2014</h5>
										<p>University name</p>
									</div>
									<div className={'resume2_1__body__block__right'}>
										<h5>bachlouer</h5>
										<p>lorem3</p>
									</div>
								</div>
							</div>

							<div className="resume2_1__body mb-b">
								<p className="resume2_1__body__title">Experience</p>
								{experiences?.map((item, i) => {
									return<div key={i} className={'resume2_1__body__block'}>
										<div className={'resume2_1__body__block__left'}>
											<h5>{item?.year}</h5>
											<p>{item?.name}</p>
										</div>
										<div className={'resume2_1__body__block__right'}>
											<h5>{item?.degree}</h5>
											<p>{item?.description}</p>
										</div>
									</div>
								})}
								<div className={'resume2_1__body__block'}>
									<div className={'resume2_1__body__block__left'}>
										<h5>2020 - present</h5>
										<p>Company name</p>
									</div>
									<div className={'resume2_1__body__block__right'}>
										<h5>Senior UX Designer</h5>
										<p>lorem5</p>
									</div>
								</div>
=======
							<div className="resume2_1-right-body">
								<div className="resume2_1-right-body-text">{bio}</div>
>>>>>>> origin/Abdurashid
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume1;
