import React from "react";

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

							<div className="resume4-left-contact-title">website</div>
							<p className="resume4-left-contact-text">{freelancerContact?.webSite}</p>

							<div className="resume4-left-contact-title">adsress</div>
							<p className="resume4-left-contact-text">
								{address?.countryName} {address?.regionName} {address?.home}
								{address.street}
							</p>
						</div>
					</div>

					<div className="resume4-right">
						<div className="resume4-right-name">
							<div className="resume4-right-user-name">
								{" "}
								{firstName} {lastName}
							</div>
							<div className="resume4-right-user-title">PROFFESIONAL TITLE</div>
						</div>

						<div className="resume4-all-about-user">
							<div className="resume4-right-user-about">
								<h3 className="resume4_title-l r4rt">about me</h3>

								<p>{bio}</p>
							</div>

							<div className="resume4-right-user-works">
								<h3 className="resume4_title-l r4rt">work experience</h3>
								{experiences?.map((item, i) => {
									return (
										<div className="resume4-right-user-job" key={i + 1}>
											<div className="user-experience-year">
												{item?.dateFrom} - {item?.dateTo}
											</div>
											<div>
												<b>{item?.job}</b>
												<br />
												<span>{item?.companyName}</span>
												<p>{item?.description}</p>
											</div>
										</div>
									);
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume4;
