import React from 'react';
import './Dropdown.scss'
import user_img from '../../../../assets/images/header/user.svg'
import arrow_down from '../../../../assets/images/header/down_arrow.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { profilLogout } from 'reduxToolkit/LoginSlice';
import { getFreelancerData } from "reduxToolkit/FreelancerSlice";
const Dropdown = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const len = useSelector(state => state.lenguage.lenguage)
  const { freelancerData } = useSelector(state => state.freelance )
  console.log(freelancerData.firstName);


  useEffect(() => {
		dispatch(getFreelancerData())
	}, [dispatch])


  const handleClick = () => {
    dispatch(profilLogout())
    navigate(`/${len}/`)
  }
    return (
      <div className="dropdown">
        <button className="dropbtn">
          <img src={user_img} alt="user photos" />
          <h4 className='dropdown_title' >{freelancerData.firstName}</h4>
          <img src={arrow_down} className='header_arrow_img' alt="arrow photos" />

          </button>
        <div className="dropdown-content">
          <Link to={`/${len}/freelancer-profile`}>Profile</Link>
          <Link to={`/${len}/notification`}>Notification <span>○</span></Link>
          <Link to={`/${len}/contracts`}>Contracts</Link>
          <Link to={`/${len}/chat`}>Chats</Link>
          <Link to={`/${len}/resume`}>Resume</Link>
          <button onClick={handleClick}>Log out</button>
        </div>
      </div>
    );
};

export default Dropdown;
