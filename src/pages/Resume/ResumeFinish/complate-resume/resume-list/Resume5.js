import whatsUpIcon from "../img/whatsap.svg";

const Resume5 = ({
	phoneNumber,
	bio,
	experiences,
	email,
	address,
	freelancerContact,
	freelancerHobbies,
	defaultuserImage,
	educations,
	freelancerPosition,
	firstName,
	lastName
}) => {
	return (
		<>
			<div className="ComplateResume">
				<div className="resume2_5 resume-watch">
					<div className="resume2_5__top-contents">
						<div className="resume2_5-top-left">
							<div className="resume2_5-top-left-name">
								<span className="resume2_5-firstname">{firstName} </span>
								<br />
								<span className="resume2_5-lastname">{lastName} </span>
								<p className="resume2_5-job">Frontend devoloper</p>
								<div className="resume2_5-top-left-contact">
									<div className="resume2_5-top-left-contact-item">
										<p>Phone</p>
										<span>{phoneNumber}</span>
									</div>

            <div className='resume2_6-top-right'>
              <img className='resume2_6-top-right-img' src={defaultuserImage} />
            </div>
          </div>

          <div className='resume2_6-bottom'>
            <div className='resume2_6-bottom-left'>
              <p className='resume2_6-bottom-title'>about me</p>
              <div className='resume2_6-bottom-left-text'>
                <span className={'subTitle'}>{bio}</span>
              </div>

              <div className='resume2_6-bottom-title'>language</div>
              <div className='resume2_6-bottom-left-text'>
                <div className='language-lvl'>
                  {userLanguages?.map((item, i) => (
                    <React.Fragment key={i + 1}>
                      <p className={'subTitleUp'}>{item?.language}</p>
                      <span className='resume2_6-cirlces' />
                      <span className='resume2_6-cirlces' />
                      <span className='resume2_6-cirlces' />
                      <span className='resume2_6-cirlces' />
                      <span className='resume2_6-cirlces' />
                      <span className='resume2_6-cirlces' />
                      <span className='resume2_6-cirlces' />
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className='resume2_6-bottom-title'>skills</div>
              <div className='resume2_6-bottom-left-text'>
                {freelancerPosition?.map((item, i) => {
                  return (
                    <div key={i + 1}>
                      <p className={'subTitleUp'}>{item.name}</p>
                    </div>
                  );
                })}
              </div>

              <div className='resume2_6-bottom-title'>hobbies</div>
              <div className='resume2_6-bottom-left-text'>
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

            <div className='resume2_6-bottom-right'>
              <div className='resume2_6-bottom-title'>education</div>
              <div className='resume2_6-bottom-left-text'>
                {educations?.map((item, i) => {
                  return (
                    <div className={'resume-6'}>
                      <div className={'resume-6__about'}>
                        <div className={'about__img'}>
                          <img src={resumeTriple} alt={'triple'} />
                        </div>
                        <div>
                          <p className={'about__study subTitleUp'}>
                            {item.degree}
                          </p>
                          <p className={'about__name subTitleUp'}>
                            {item.degree}
                          </p>
                        </div>
                      </div>
                      <p className={'subTitle'}>{item.bio}</p>
                    </div>
                  );
                })}
              </div>

              <div className='resume2_6-bottom-title'>experience</div>
              <div className='resume2_6-bottom-left-text'>
                {experiences?.map((item, i) => {
                  return (
                    <div className={'resume-6'}>
                      <div className={'resume-6__about'}>
                        <div className={'about__img'}>
                          <img src={resumeTriple} alt={'triple'} />
                        </div>
                        <div>
                          <p className={'about__study subTitleUp'}>
                            {item.degree}
                          </p>
                          <p className={'about__name subTitleUp'}>
                            {item.degree}
                          </p>
                        </div>
                      </div>
                      <p className={'subTitle'}>{bio}</p>
                    </div>
                  );
                })}
              </div>
              <div className='resume2_6-bottom-title'>contacts</div>
              <div className='resume2_6-bottom-left-text'>
                {experiences?.map((item, i) => {
                  return (
                    <span
                      className='subTitle resume2_6-bottom-left-text'
                      key={i + 1}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume6;
