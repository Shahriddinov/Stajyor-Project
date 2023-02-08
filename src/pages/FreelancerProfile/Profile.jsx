import CompanyCard from 'pages/Company/components/CompanyCard';
import Fvideo from 'pages/Freelancer/components/Fvideo';
import PortfolioCard from 'pages/Freelancer/components/PortfolioCard';
import Round from 'pages/NonAuth/Round';
import user_img from '../../assets/images/Freelancer/girl_img.svg'
import location from '../../assets/images/Freelancer/location.svg'
import ticked from '../../assets/images/Freelancer/ticked.svg'

import { ReactComponent as Telegram } from '../../assets/images/FreelancerPortfolio/telegram.svg'
import { ReactComponent as Instagram } from '../../assets/images/FreelancerPortfolio/instagramm.svg'
import { ReactComponent as Twitter } from '../../assets/images/FreelancerPortfolio/twitter.svg'
import { ReactComponent as Facebook } from '../../assets/images/FreelancerPortfolio/facebook.svg'
import { ReactComponent as Github } from '../../assets/images/FreelancerPortfolio/github.svg'
import { ReactComponent as Whatsapp } from '../../assets/images/FreelancerPortfolio/whatsapp.svg'
import React from 'react';
import './Profile.scss'
import Available from './components/Available';
import { useContext } from 'react';
import Context from 'components/Context/Context';
import AddProject from './components/AddProject';
import AddProfilePhoto from './components/AddProfilePhoto';
// import Country from 'pages/Resume/cards/Country';
// import Language from 'pages/Resume/cards/Language';
// import SocialMedia from 'pages/Resume/cards/SocialMedia';

const Profile = () => {

    const { isAvialable, setIsAvialable, isPortfolio, setIsPortfolio , isAddPortfolio, setAddIsPortfolio} = useContext(Context)

    const AviableFunc = (bol) => {
        setIsAvialable(bol)
    }

    const PortfolioFunc = (bol) => {
        setIsPortfolio(bol)
    }

    const AddPortfolioFunc = (bol) => { 
        setAddIsPortfolio(bol)
    }


    



    return (<>
            {
                isAvialable || isPortfolio || isAddPortfolio ? <div className="freelancer_black"  > </div> : null
            }
   <div className="freelancer_container">
        { isAvialable ? <Available /> : null}
        { isPortfolio ? <AddProject /> : null }
        { isAddPortfolio ?   <AddProfilePhoto /> : null}
             <div className='freelancer_container_round'>
                    <Round />
                </div>
        <div className='userfreelancermodal' >
            {/* <SocialMedia /> */}
            {/* <Country /> */}
            <div className="userfreelancermodal_left">
                <ul className="userfreelancermodal_left_list">
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item1">
                        <img className='userfreelancermodal_left_list_item1_img' src={user_img} alt="" />
                        <div>
                            <h4>Michel Rodriges <img src={ticked} alt="" /> </h4>
                            <p> Web-design UI/UX <span>Middle</span> </p>
                        </div>
                    </li>
                    <li className="userfreelancermodal_left_list_item userfreelancermodal_left_list_item2">
                    <h4 className='userfreelancermodal_left_list_item_title' > 80% </h4>
                        <progress id="file" max="100" value="70"> 70% </progress>
                        <p className="userfreelancermodal_left_list_item_info"> Job Success </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <h4 className='userfreelancermodal_left_list_item_title' > 5$ </h4>
                        <p className="userfreelancermodal_left_list_item_info"> Hourly </p>
                    </li>
                    <li className="userfreelancermodal_left_list_item">
                        <div className="userfreelancermodal_left_list_item_wrapper" onClick={() => AddPortfolioFunc(true)}  >

                        </div>
                    </li>
                </ul>

                <p className="userfreelancermodal_left_info">
                    I have been in the IT business for more than 11 years.
                <br />
                <br />
                With over 5 years of experience in the ERP consultancy. I have deployed and delivered 30+ Odoo implementations in different types of businesses. I have implemented a mixture of Enterprise and Community versions according to the cost-benefit analysis of the business and which suits best for the business.
                </p>
                <Fvideo />

                <h3 className='userfreelancermodal_left_title' >Portfolio (13)
                 <div className="userfreelancermodal_left_title_wrapper"  onClick={() => PortfolioFunc(true)}  ></div> </h3>
                
                <PortfolioCard />

                <h3 className='userfreelancermodal_left_title' >Work History</h3>

                <ul className="userfreelancermodal_left_wrapper">
                    <li className="userfreelancermodal_left_wrapper_item">
                        Completed (<span>324</span>)
                    </li>
                    <li className="userfreelancermodal_left_wrapper_item">
                        In progress (<span>3</span>)
                    </li>
                    <span className='userfreelancermodal_left_wrapper_span'></span>
                </ul>
                

                <CompanyCard />

    
    
       </div>


            <div className="userfreelancermodal_right">


                   < ul className="userfreelancermodal_right_list">
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>$5936</h4>
                            <p>Total earnings</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item userfreelancermodal_right_list_item1' >
                            <h4>324</h4>
                            <p>Total jobs</p>
                        </li>
                        <li  className='userfreelancermodal_right_list_item ' >
                            <h4>1027</h4>
                            <p>Total hours</p>
                        </li>
                    </ul>

                    <ul className="userfreelancermodal_right_mainlist">
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Available <div className="userfreelancermodal_right_mainlist_item_wrapper" onClick={() => AviableFunc(true)} ></div> </h4>
                            <span>More than 40 hrs/week</span>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Verifications</h4>
                            <h5>ID: <span>Verified</span> <img src={ticked} alt="" /></h5>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Languages <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div>
                                <h5>English: <h6>C2 -</h6> <span>Native Speaker</span></h5>
                                <h5 className='userfreelancermodal_right_mainlist_item_h5'>Russian: <h6>B1 -</h6> <span>Upper intermedite</span></h5>
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Educations <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                           <div>
                             <h5>Skans School of Accountancy Other, ACCA (Association of Chartered Certified Accountant) </h5>
                            <h6>2012-2018</h6>
                           </div>

                            <div>
                                <h5>Aptech Computer Education
                            Other, Software and Website Development (ASP.NET C#)
                            </h5>
                            <h6>2010-2011</h6>
                            </div>
                        </li>

                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4> Experience <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div>
                                <h5>NAPA Automotive: <span>UX UI Designer</span></h5>
                                <h6>March 2022 - Now</h6>
                            </div>
                        </li>
                        <li className="userfreelancermodal_right_mainlist_item">
                            <h4>Skills <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "gap":"10px", 'max-width':'350px', 'flex-wrap':'wrap'}} >
                            <b>Figma</b>
                            <b>html</b>
                            <b>Adobe PhotoShop</b>
                            </div>
                        </li>

                          <li className="userfreelancermodal_right_mainlist_item">
                            <h4>Contacts <div className="userfreelancermodal_right_mainlist_item_wrapper"></div> </h4>
                            <div style={{"display":"flex", "flex-direction": "column" , "gap":"20px"}} >
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
                            <h5><img src={location} alt="" /> <h6 style={{'margin-left':"10px"}} >Tashkent, Uzbekistan</h6> </h5>
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