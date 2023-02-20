import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Jobs.module.scss'
import CompanyLogo from './assets/compLogo.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { FiHeart } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown} from 'react-icons/bs'
import { HiOutlinePencil, HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Jobs = () => {

    const [clientJobs, setClientJobs] = useState('best')
    const len = useSelector(state => state.lenguage.lenguage)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className={classes.circleBg}>
                <img src={Circle} alt="" />
            </div>
            <Nav />
            <div className={classes.jobAdContainer}>
                <div className={classes.jobAd}>
                    <div className={classes.search}>
                        <input type="text" placeholder='Title, keywords'/>
                        <button><HiOutlineSearch size={18}/></button>
                    </div>
                    <div className={classes.companyClientJobs}>
                        <div className={classes.companyClientJob}>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobCost}>$10</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobDays}>3 days</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <p>Required level: <b>Middle</b></p>    
                                    </div>
                                </div>
                                <div className={classes.companyClientJobDescription}>
                                    <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                    <BsChevronDown size={30}/>
                                </div>
                                <div className={classes.companyClientJobRequiredSkills}>
                                    <p>Figma</p> | 
                                    <p>Adobe Photoshop</p> | 
                                    <p>Adobe Illustrator</p>
                                </div>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                        <div className={classes.companyName}>
                                            <h4>Napa Automotive</h4>
                                            <div className={classes.verified}>
                                                <MdVerified color='#1F57C3'/><p>Verified</p>
                                            </div>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.yearsInService}>
                                            <h4>3 years</h4>
                                            <p>In service</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>24</h4>
                                            <p>Completed Jobs</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>$1530</h4>
                                            <p>Paid</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                    </div>
                                    <p className={classes.postedDate}>Posted 5 days ago</p>
                                </div>
                            </div>  
                        <div className={classes.companyClientJob}>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobCost}>$10</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobDays}>3 days</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <p>Required level: <b>Middle</b></p>    
                                    </div>
                                </div>
                                <div className={classes.companyClientJobDescription}>
                                    <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                    <BsChevronDown size={30}/>
                                </div>
                                <div className={classes.companyClientJobRequiredSkills}>
                                    <p>Figma</p> | 
                                    <p>Adobe Photoshop</p> | 
                                    <p>Adobe Illustrator</p>
                                </div>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                        <div className={classes.companyName}>
                                            <h4>Napa Automotive</h4>
                                            <div className={classes.verified}>
                                                <MdVerified color='#1F57C3'/><p>Verified</p>
                                            </div>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.yearsInService}>
                                            <h4>3 years</h4>
                                            <p>In service</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>24</h4>
                                            <p>Completed Jobs</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>$1530</h4>
                                            <p>Paid</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                    </div>
                                    <p className={classes.postedDate}>Posted 5 days ago</p>
                                </div>
                            </div>  
                        <div className={classes.companyClientJob}>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobCost}>$10</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobDays}>3 days</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <p>Required level: <b>Middle</b></p>    
                                    </div>
                                </div>
                                <div className={classes.companyClientJobDescription}>
                                    <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                    <BsChevronDown size={30}/>
                                </div>
                                <div className={classes.companyClientJobRequiredSkills}>
                                    <p>Figma</p> | 
                                    <p>Adobe Photoshop</p> | 
                                    <p>Adobe Illustrator</p>
                                </div>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                        <div className={classes.companyName}>
                                            <h4>Napa Automotive</h4>
                                            <div className={classes.verified}>
                                                <MdVerified color='#1F57C3'/><p>Verified</p>
                                            </div>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.yearsInService}>
                                            <h4>3 years</h4>
                                            <p>In service</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>24</h4>
                                            <p>Completed Jobs</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>$1530</h4>
                                            <p>Paid</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                    </div>
                                    <p className={classes.postedDate}>Posted 5 days ago</p>
                                </div>
                            </div>  
                        <div className={classes.companyClientJob}>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobCost}>$10</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobDays}>3 days</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <p>Required level: <b>Middle</b></p>    
                                    </div>
                                </div>
                                <div className={classes.companyClientJobDescription}>
                                    <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                    <BsChevronDown size={30}/>
                                </div>
                                <div className={classes.companyClientJobRequiredSkills}>
                                    <p>Figma</p> | 
                                    <p>Adobe Photoshop</p> | 
                                    <p>Adobe Illustrator</p>
                                </div>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                        <div className={classes.companyName}>
                                            <h4>Napa Automotive</h4>
                                            <div className={classes.verified}>
                                                <MdVerified color='#1F57C3'/><p>Verified</p>
                                            </div>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.yearsInService}>
                                            <h4>3 years</h4>
                                            <p>In service</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>24</h4>
                                            <p>Completed Jobs</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>$1530</h4>
                                            <p>Paid</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                    </div>
                                    <p className={classes.postedDate}>Posted 5 days ago</p>
                                </div>
                            </div>  
                        <div className={classes.companyClientJob}>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobCost}>$10</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobDays}>3 days</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <p>Required level: <b>Middle</b></p>    
                                    </div>
                                </div>
                                <div className={classes.companyClientJobDescription}>
                                    <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                    <BsChevronDown size={30}/>
                                </div>
                                <div className={classes.companyClientJobRequiredSkills}>
                                    <p>Figma</p> | 
                                    <p>Adobe Photoshop</p> | 
                                    <p>Adobe Illustrator</p>
                                </div>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                        <div className={classes.companyName}>
                                            <h4>Napa Automotive</h4>
                                            <div className={classes.verified}>
                                                <MdVerified color='#1F57C3'/><p>Verified</p>
                                            </div>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.yearsInService}>
                                            <h4>3 years</h4>
                                            <p>In service</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>24</h4>
                                            <p>Completed Jobs</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>$1530</h4>
                                            <p>Paid</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                    </div>
                                    <p className={classes.postedDate}>Posted 5 days ago</p>
                                </div>
                            </div>  
                        <div className={classes.companyClientJob}>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <h3 className={classes.companyClientJobName}>Business Card Design</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobCost}>$10</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <h3 className={classes.companyClientJobDays}>3 days</h3>
                                        <div className={classes.verticalLineBreak} />
                                        <p>Required level: <b>Middle</b></p>    
                                    </div>
                                </div>
                                <div className={classes.companyClientJobDescription}>
                                    <p className={classes.jobDescription}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                    <BsChevronDown size={30}/>
                                </div>
                                <div className={classes.companyClientJobRequiredSkills}>
                                    <p>Figma</p> | 
                                    <p>Adobe Photoshop</p> | 
                                    <p>Adobe Illustrator</p>
                                </div>
                                <div className={classes.companyClientJobRow}>
                                    <div className={classes.companyClientJobLeft}>
                                        <img src={CompanyLogo} alt="" className={classes.compLogo}/>
                                        <div className={classes.companyName}>
                                            <h4>Napa Automotive</h4>
                                            <div className={classes.verified}>
                                                <MdVerified color='#1F57C3'/><p>Verified</p>
                                            </div>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.yearsInService}>
                                            <h4>3 years</h4>
                                            <p>In service</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>24</h4>
                                            <p>Completed Jobs</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                        <div className={classes.paid}>
                                            <h4>$1530</h4>
                                            <p>Paid</p>
                                        </div>
                                        <div className={classes.verticalLineBreak} />
                                    </div>
                                    <p className={classes.postedDate}>Posted 5 days ago</p>
                                </div>
                            </div>  
                    </div>
                </div>
                <div className={classes.filters}>
                    <h2>Filter</h2>
                    <div className={classes.filter}>
                        <h3>Payment amount</h3>
                        <div className={classes.inputFields}>
                            <div className={classes.inputField}>
                                <p>From</p>
                                <input type="text" placeholder='$10'/>
                            </div>
                            <div className={classes.inputField}>
                                <p>To</p>
                                <input type="text" placeholder='$20'/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.filter}>
                        <h3>Job success</h3>
                        <div className={classes.inputField}>
                            <input type="text" placeholder='More than 80%'/>
                        </div>
                    </div>
                    <div className={classes.filter}>
                        <h3>Required level</h3>
                        <div className={classes.inputFields}>
                            <div className={classes.inputField}>
                                <p>From</p>
                                <select name="" id="">
                                    <option value="junior">Junior</option>
                                    <option value="middle">Middle</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </div>
                            <div className={classes.inputField}>
                                <p>To</p>
                                <select name="" id="">
                                    <option value="junior">Junior</option>
                                    <option value="middle">Middle</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.checkbox}>
                            <input type="checkbox" name="verified" id="verified" />
                            <label htmlFor="">Verified employee</label>
                        </div>
                    </div>
                    <div className={classes.filter}>
                        <h3>Region</h3>
                        <div className={classes.inputField}>
                            <input type="text" placeholder='choose region'/>
                        </div>
                    </div>
                    <div className={classes.filter}>
                        <h3>Completed jobs</h3>
                        <div className={classes.inputField}>
                            <input type="text" placeholder='minnimum'/>
                        </div>
                    </div>
                    <div className={classes.filter}>
                        <h3>Required skills</h3>
                        <div className={classes.inputField}>
                            <input type="text" placeholder='select skills'/>
                        </div>
                    </div>
                    <button>Apply filters</button>
                </div>
            </div>
        </>
    )
}

export default Jobs