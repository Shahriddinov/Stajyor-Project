import React from 'react'
import { useSelector } from 'react-redux';

const Resume2 = (props) => {
    console.log(props);

    const {loading} = useSelector(state => state.resume)
  return (
    <>
    {
        loading
        ?(
            null
        )
        :(
            <div className="ComplateResume">
                <div className="resume2_2 resume-watch">
                    <div className="resume2_2-top">
                    <div className="resume2_2-top-left">
                        <div className="resume2_2-top-left-img">
                            <img src={props?.freelancerImage} alt={props?.firstName}/>
                        </div>
                    </div>

                    <div className="resume2_2-top-right">
                        <div className="resume2_2-top-right-fullname">
                        <span className="top-right-fullname">
                            {props?.firstName}
                        </span>
                        <br />
                        <span className="top-right-fullname">
                        {props?.lastName}
                            </span>
                        <br />
                        <span className="top-right-job">
                            Frontend developer
                            {/* {FreelancPositions} */}
                        </span>
                        </div>

                        <div className="resume2_2-top-right-contact">
                        <div>
                            <span className="resume2_2-contact-title">phone:</span>
                            <br />
                            {props?.phoneNumber}
                        </div>

                        <div>
                            <span className="resume2_2-contact-title">email:</span>
                            <br />
                            {props?.email}
                        </div>

                        <div>
                            <span className="resume2_2-contact-title">adress:</span>
                            <br />
                            <span>
                            {props?.address?.countryName}{"  "}{props?.address?.regionName}{"  "}{props?.address?.home}
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="resume2_2-bottom">
                    <div className="resume2_2-bottom-left">
                        <div className="resume2_2-title">education</div>
                            {props?.educations?.map((item, i) => {
                            return (
                                <div className="resume2_2-bottom-left-info">
                                <p>
                                    {item?.start?.substring(0, 4)} -{" "}
                                    {item?.end?.substring(0, 4)}
                                </p>
                                <p>{item?.educationDegree}</p>
                                <p>{item?.schoolName}</p>
                                </div>
                            );
                            })}
                        <div>
                        <div className="resume2_2-title">hobbies</div>
                            <ul>
                                {props?.freelancerHobbies?.map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="resume2_2-bottom-right">
                        <div className="resume2_2-title">experience</div>
                        {props?.experiences?.map((item, i) => {
                        return (
                            <div className="resume2_2-bottom-right-card">
                            <div className="bottom-card-left">
                                <p>
                                {item?.start?.substring(0, 4)} -{" "}
                                {item?.end?.substring(0, 4)}
                                </p>
                                <p>{item?.companyName}</p>
                            </div>

                            <div className="bottom-card-right">
                                <b>{item?.job}</b>
                                <p>{item?.descripeion}</p>
                            </div>
                            </div>
                        );
                        })}
                        <div className="resume2_2-title">skills</div>

                        <div className="resume2__card-skills">
                        {props?.freelancerPosition?.freelancerSkills?.map((item, i) => {
                            return (
                            <div className="resume2__card-skills-item">
                                {item}{" "}
                                <div className="resume2__card-skills-dot">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                </div>
                            </div>
                            );
                        })}
                        </div>                  
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    </>
  )
}

export default Resume2