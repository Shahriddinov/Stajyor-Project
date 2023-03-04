import CompanyCard from 'pages/Company/components/CompanyCard';
import Fvideo from 'pages/Freelancer/components/Fvideo';
import PortfolioCard from 'pages/Freelancer/components/PortfolioCard';
import location from '../../assets/images/Freelancer/location.svg'
import ticked from '../../assets/images/Freelancer/ticked.svg'
import { useEffect } from 'react'
import { ReactComponent as Telegram } from '../../assets/images/FreelancerPortfolio/telegram.svg'
import { ReactComponent as Instagram } from '../../assets/images/FreelancerPortfolio/instagramm.svg'
import { ReactComponent as Twitter } from '../../assets/images/FreelancerPortfolio/twitter.svg'
import { ReactComponent as Facebook } from '../../assets/images/FreelancerPortfolio/facebook.svg'
import { ReactComponent as Github } from '../../assets/images/FreelancerPortfolio/github.svg'
import { ReactComponent as Whatsapp } from '../../assets/images/FreelancerPortfolio/whatsapp.svg'
import React from 'react';
import './Profile.scss'
import { useSelector, useDispatch } from 'react-redux';

import { getFreelancer } from 'reduxToolkit/extraReducers';
import { useTranslation } from "react-i18next";
import { UserCircle } from 'tabler-icons-react';


const Profile = () => {
  	const { t } = useTranslation()

    const dispatch = useDispatch();

    const { data } = useSelector( state => state.freelance)

    useEffect(()=> {
		 dispatch(getFreelancer())
		 console.log(data?.data?.firstName);
		 console.log(data?.data?.freelancerImage);
	},[])


    // const { isAvialable, setIsAvialable, isPortfolio, setIsPortfolio , isAddPortfolio, setAddIsPortfolio,
    // isAddLanguage, setAddIsLanguage , isAddEducation, setAddIsEducation
    // } = useContext(Context)

    // const AviableFunc = (bol) => {
    //     setIsAvialable(bol)
    // }

    // const PortfolioFunc = (bol) => {
    //     setIsPortfolio(bol)
    // }

    // const AddPortfolioFunc = (bol) => { 
    //     setAddIsPortfolio(bol)
    // }

    // const AddIsLanguageFunc = (bol) => {
    //     setAddIsLanguage(bol)
    // }

    // const AddIsEducationFunc = (bol) => {
    //     setAddIsEducation(bol)
    // }



    return (<>
            {/* {
               isAddEducation || isAddLanguage || isAvialable || isPortfolio || isAddPortfolio ? <div className="freelancer_black"  > </div> : null
            } */}
   <div className="freelancer_container">
        {/* { isAvialable ? <Available /> : null}
        { isPortfolio ? <AddProject /> : null }
        { isAddPortfolio ?   <AddProfilePhoto /> : null}
        { isAddLanguage ? <AddLanguage /> : null}
        { isAddEducation ? <AddEducation /> : null}  */}
             {/* <div className='freelancer_container_round'>
                    <Round />
                </div> */}
        <div className='userfreelancermodal' >
            {/* <SocialMedia /> */}
            {/* <Country /> */}
            {/* <Country /> */}
            {/* <AddLanguage /> */}
            {/* <AddEducation /> */}
            <div className="userfreelancermodal_left">
                <ul className="userfreelancermodal_left_list">
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item1">
                    { data?.data?.freelancerImage ? <img src={`http://localhost:5000/staticfiles/${data?.data?.freelancerImage}`} className='userfreelancermodal_left_list_item1_img'  style={{"border-radius":"50%"}} alt="user photos" /> : <UserCircle  className='userfreelancermodal_left_list_item1_img' /> }
                        {/* <img className='userfreelancermodal_left_list_item1_img' src={user_img} alt="" /> */}
                        <div>
                            <h4>{data?.data?.firstName} <img src={ticked} alt="" /> </h4>
                            <p  style={{'font-size':'22px'}}>{data?.data?.freelancerPosition?.name}<span>Middle</span> </p>
                        </div>
                    </li>
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item2">
                    <h4 className='userfreelancermodal_left_list_item_title' > 80% </h4>
                        <progress id="file" max="100" value="70"> 70% </progress>
                        <p className="userfreelancermodal_left_list_item_info">{t("job_success")} </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <h4 className='userfreelancermodal_left_list_item_title' > 5$ </h4>
                        <p className="userfreelancermodal_left_list_item_info"> {t("hourly")} </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <div className="userfreelancermodal_left_list_item_wrapper"  >

                        </div>
                    </li>
                </ul>

                <p className="userfreelancermodal_left_info">
                    {/* I have been in the IT business for more than 11 years. */}
                    {/* {freelancerData.description} */}
                    {data?.data?.description}
                    
                {/* <br />
                <br /> */}
                {/* With over 5 years of experience in the ERP consultancy. I have deployed and delivered 30+ Odoo implementations in different types of businesses. I have implemented a mixture of Enterprise and Community versions according to the cost-benefit analysis of the business and which suits best for the business. */}
                </p>
                <Fvideo />

                <h3 className='userfreelancermodal_left_title' >{t("portfolio")} (13)
                 <div className="userfreelancermodal_left_title_wrapper"  ></div> </h3>
                
                <PortfolioCard />

                <h3 className='userfreelancermodal_left_title' >{t("work_history")}</h3>

                <ul className="userfreelancermodal_left_wrapper">
                    <li className="userfreelancermodal_left_wrapper_item">
                        {t("completed")} (<span>324</span>)
                    </li>
                    <li className="userfreelancermodal_left_wrapper_item">
                        {t("in_progress")}(<span>3</span>)
                    </li>
                </ul>
                

                <CompanyCard />

    
    
       </div>


            <div className="userfreelancermodal_right">


                   <ul className="userfreelancermodal_right_list">
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>$5936</h4>
                            <p>{t("total_earnings")}</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>324</h4>
                            <p>{t("total_jobs")}</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item ' >
                            <h4>1027</h4>
                            <p>{t("total_jobs")}</p>
                        </li>
                    </ul>

                    <ul className="userfreelancermodal_right_mainlist">
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> {t("available")} <div className="userfreelancermodal_right_mainlist_item_wrapper" ></div> </h4>
                            <span>{t("more_than")} 10 {t("hrs/week")} </span>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Verifications</h4>
                            <h5>ID: <span>Verified</span> <img src={ticked} alt="" /></h5>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Languages <div className="userfreelancermodal_right_mainlist_item_wrapper"  ></div> </h4>
                            <div>
                                { data?.data?.userLanguages.map( e => (
                                <>
                                {/* <h5>English: <h6>C2 -</h6> <span>Native Speaker</span></h5> */}
                                <h5 className='userfreelancermodal_right_mainlist_item_h5'>   {e.name}: <span>{e.level}  </span> </h5></> 
                                ) ) }
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Educations <div className="userfreelancermodal_right_mainlist_item_wrapper"  > </div> </h4>
                           <div>
                            { data?.data?.educations.map(e => (
                                <>
                                 <h5>{e.schoolName} ({e.educationDegree}) {e.typeStudy} </h5>
                                 <h5>Location: <h6>{e.location}</h6></h5>
                                 <h6>2012-2018</h6>
                                </>
                            )) }
                           </div>

                            {/* <div>
                                <h5>Aptech Computer Education
                            Other, Software and Website Development (ASP.NET C#)
                            </h5>
                            <h6>2010-2011</h6>
                            </div> */}
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Experience <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div>
                                {data?.data?.experiences.map(e => (
                                    <>
                                    <h5>{e.companyName}: <span>{e.job}</span></h5>
                                    {/* <h6>March 2022 - Now</h6> */}
                                    </>
                                ))}
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>Skills <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "gap":"10px", 'max-width':'350px', 'flex-wrap':'wrap'}} >
                            {
                                data?.data?.freelancerPosition?.freelancerSkills.map((skill) => (
                                    <b key={skill.id}>{skill.name}</b>
                                ))
                            }
                            </div>
                        </li>

                          <li className="userfreelancermodal_right_mainlist_item">
                            <h4>Contacts <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "flex-direction": "column" , "gap":"20px"}} >
                            
                                {/* {data?.data?.experiences.map(e => (
                                    <>
                                    <h5>{e}</h5>
                                    </>
                                ))} */}
                            
                            <a href='https://www.telegram.com/' rel='noreferrer' target='_blank' ><h5><Telegram/> Telegram</h5></a>
                            <a href='https://www.whatsapp.com' target='_blank' rel='noreferrer' > <h5><Whatsapp /> Whatsapp</h5>     </a>    
                            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'> <h5><Instagram /> Instagram</h5>  </a>       
                            <a href='https://www.github.com' target='_blank' rel='noreferrer'> <h5><Github /> Github</h5>        </a>         
                            <a href='https://www.twitter.com' target='_blank' rel='noreferrer'> <h5><Twitter/> Twitter</h5>       </a>          
                            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'> <h5><Facebook /> Facebook</h5>    </a>                
                            </div>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>Living address <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            {/* <h5><img src={location} alt="" /> <h6 style={{'margin-left':"10px"}} >{freelancerData.address.regionName}, {freelancerData.address.countryName}</h6> </h5> */}
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>Member since</h4>
                            <span>June 9, 2022</span>
                            <button className='userfreelancermodal_right_mainlist_item_btn' >Resume</button>
                        </li>

                    </ul>
            </div>
            
        </div>
    </div>
    </>
    );
};

export default Profile;