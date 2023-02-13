import React from 'react';
import './Dropdown.scss'
import user_img from '../../../../assets/images/header/user.svg'
import arrow_down from '../../../../assets/images/header/down_arrow.svg'
const Dropdown = () => {

  const auth_path = window.location.pathname.split("/")[1]
  console.log(auth_path);
    return (
<div className="dropdown">
  <button className="dropbtn">
    <img src={user_img} alt="user photos" />
    <h4 className='dropdown_title' >Dropdfczxczxczxczxown</h4>
    <img src={arrow_down} className='header_arrow_img' alt="arrow photos" />
    
    </button>
  <div className="dropdown-content">
    <a href={`/${auth_path}/freelancer-profile`}>Profile</a>
    <a href="/">Notification <span>○</span></a>
    <a href="/">Contracts</a>
    <a href="/">Chats</a>
    <a href="/">Resume</a>
    <a href="/">Log out</a>
  </div>
</div>
    );
};

export default Dropdown;
