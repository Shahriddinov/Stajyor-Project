import React from "react";
import { useSelector } from "react-redux";

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
		birthday
	} = props;
	// console.log(	)
	return (
		<>
			<div className="ComplateResume">
				<div className="resume2_1 resume-watch">
					<div className="resume2_1-head">
						<p className="resume2_1-head-name">
							{firstName} {lastName}

							{/* {lastName} */}
						</p>
						<p className="resume2_1-head-job">Frontend developer</p>
					</div>
					<div className="resume2_1-body">
						<div className="resume2_1-left">
							<div className="resume2_1-left-img">
								<img src={defaultuserImage}alt={firstName} />
								<span>personal info</span>
							</div>
							<hr />

							<div className="resume2_1-left-contacts">
								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">phone:</p>
									<span>{phoneNumber}</span>
								</div>

								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">email:</p>
									<span>{email}</span>
								</div>

								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">skills</p>
									{freelancerPosition?.map((item, i) => {
										return <span key={i+1}>{item}</span>;
									})}
								</div>

								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">languages</p>
									{userLanguages?.map((item, i) => {
										return (
											<span key={i}>
												{item?.language} - {item?.level}
											</span>
										);
									})}
								</div>

								<div className="resume2_1-left-contacts__texts">
									<p className="resume2_1-left-contacts__text">Hobbies</p>
									{freelancerHobbies?.map((item, i) => {
										return<span key={i+1}>{item}</span>;
									})}
								</div>

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
									})}
								</div>
							</div>
						</div>

						<div className="resume2_1-right">
							<div className="resume2_1-right-head">
								<p>{birthday}</p>
								<p>
									{firstName} {lastName}
								</p>
								<p>Frontend developer</p>
							</div>

							<div className="resume2_1-right-body">
								<div className="resume2_1-right-body-text">{bio}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume1;
