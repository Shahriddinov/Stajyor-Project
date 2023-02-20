import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classes from './Talents.module.scss'
import ProfilePhoto from './assets/profilePhoto.png'
import Video from './assets/vid.png'
import FreelancerProfile from './assets/freelancerProfilePhoto.png'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import { FiHeart } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { BsChevronDown} from 'react-icons/bs'
import { HiOutlinePencil, HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Talents = () => {

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
                    <div className={classes.sort}>
                        <ul className={classes.menu__links}>
                            <li className={clientJobs === 'best' ? classes.active : classes.menu__link} onClick={() => setClientJobs('best')}>
                                Best matches
                            </li>
                            <li className={clientJobs === 'recent' ? classes.active : classes.menu__link} onClick={() => setClientJobs('recent')}>
                                Recent
                            </li>
                            <li className={clientJobs === 'saved' ? classes.active : classes.menu__link} onClick={() => setClientJobs('saved')}>
                                Saved
                            </li>
                        </ul>
                    </div>
                    <div className={classes.jobAdProposals}>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
                                <div className={classes.verticalLineBreak} />
                                <div className={classes.freelancerStats}>
                                        <h4>80%</h4>
                                        <div className={classes.successRate}>
                                            <div className={classes.rateBar}></div>
                                        </div>
                                        <p>Job success</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>5$</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                                <div className={classes.freelancerKeySkills}>
                                    <p>Figma</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe Illustrator</p>
                                </div>
                                <p>Level: <b>Middle</b></p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
                                <div className={classes.verticalLineBreak} />
                                <div className={classes.freelancerStats}>
                                        <h4>80%</h4>
                                        <div className={classes.successRate}>
                                            <div className={classes.rateBar}></div>
                                        </div>
                                        <p>Job success</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>5$</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                                <div className={classes.freelancerKeySkills}>
                                    <p>Figma</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe Illustrator</p>
                                </div>
                                <p>Level: <b>Middle</b></p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
                                <div className={classes.verticalLineBreak} />
                                <div className={classes.freelancerStats}>
                                        <h4>80%</h4>
                                        <div className={classes.successRate}>
                                            <div className={classes.rateBar}></div>
                                        </div>
                                        <p>Job success</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>5$</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                                <div className={classes.freelancerKeySkills}>
                                    <p>Figma</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe Illustrator</p>
                                </div>
                                <p>Level: <b>Middle</b></p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
                                <div className={classes.verticalLineBreak} />
                                <div className={classes.freelancerStats}>
                                        <h4>80%</h4>
                                        <div className={classes.successRate}>
                                            <div className={classes.rateBar}></div>
                                        </div>
                                        <p>Job success</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>5$</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                                <div className={classes.freelancerKeySkills}>
                                    <p>Figma</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe Illustrator</p>
                                </div>
                                <p>Level: <b>Middle</b></p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
                                <div className={classes.verticalLineBreak} />
                                <div className={classes.freelancerStats}>
                                        <h4>80%</h4>
                                        <div className={classes.successRate}>
                                            <div className={classes.rateBar}></div>
                                        </div>
                                        <p>Job success</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>5$</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                                <div className={classes.freelancerKeySkills}>
                                    <p>Figma</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe Illustrator</p>
                                </div>
                                <p>Level: <b>Middle</b></p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
                                <div className={classes.verticalLineBreak} />
                                <div className={classes.freelancerStats}>
                                        <h4>80%</h4>
                                        <div className={classes.successRate}>
                                            <div className={classes.rateBar}></div>
                                        </div>
                                        <p>Job success</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>5$</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                                <div className={classes.freelancerKeySkills}>
                                    <p>Figma</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe Illustrator</p>
                                </div>
                                <p>Level: <b>Middle</b></p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
                            </div>
                        </div>
                        <div className={classes.proposal}>
                            <div className={classes.proposalRow}>
                                <div className={classes.proposalLeft}>
                                    <img src={FreelancerProfile} alt="" className={classes.freelancerProfilePhoto}/>
                                    <Link to={`/${len}/freelancerPage`}>
                                        <div className={classes.freelancerInfo}>
                                            <div className={classes.verified}>
                                                <h4>Michel R</h4>
                                                <MdVerified color='#1F57C3'/>
                                            </div>
                                            <p>Web Design UI/UX</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={classes.proposalLeft}>
                                <div className={classes.verticalLineBreak} />
                                <div className={classes.freelancerStats}>
                                        <h4>80%</h4>
                                        <div className={classes.successRate}>
                                            <div className={classes.rateBar}></div>
                                        </div>
                                        <p>Job success</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>5$</h4>
                                        <p>Hourly</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                    <div className={classes.freelancerStats}>
                                        <h4>2</h4>
                                        <p>days</p>
                                    </div>
                                    <div className={classes.verticalLineBreak} />
                                </div>
                                <button className={classes.addToLikedButton}><FiHeart size={18} className={classes.centeredItem}/></button>
                            </div>
                            <div className={classes.proposalLetter}>
                                <p className={classes.proposalLetterText}>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows:</p>
                                <BsChevronDown size={30}/>
                            </div>
                            <div className={`${classes.proposalRow} ${classes.alignItemsCenter}`}>
                                <div className={classes.freelancerKeySkills}>
                                    <p>Figma</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe Illustrator</p>
                                </div>
                                <p>Level: <b>Middle</b></p>
                            </div>
                            <div className={classes.proposalRow}>
                                <div className={classes.freelancerExperience}><p><span>3 years</span> of experience</p></div>
                                <div className={classes.freelancerLocation}><HiOutlineLocationMarker size={15} color={'#1D71B8'}/> Tashkent, Uzbekistan</div>
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

export default Talents